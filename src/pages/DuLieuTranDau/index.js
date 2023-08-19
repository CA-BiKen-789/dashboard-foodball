import Header from '~/components/Header';
import styles from './DuLieuTranDau.module.css';
import classNames from 'classnames/bind';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import { useEffect, useState } from 'react';
import NoContent from '~/components/NoContent';
import { AiOutlineCalendar, AiOutlineInsertRowBelow, AiOutlineNotification } from "react-icons/ai";

const cx = classNames.bind(styles);

function DuLieuTranDau() {
	const tabs = ['Lịch đấu', 'Kết quả', 'Bảng điểm']
	const tableTitles = ['Thứ hạng', 'Trận', 'Thắng', 'Hòa', 'Bại', 'Bàn thắng', 'Bàn bại', '+/-', 'Điểm', 'Phong độ']
	const [type, setType] = useState('');
	const [standings, setStandings] = useState(undefined ?? []);
	const [year, setYear] = useState()
	const [leagueId, setLeagueId] = useState()
	const [isLoading, setIsLoading] = useState(false);
	const [leagues, setLeagues] = useState(undefined ?? []);
	const [selectedLeague, setSelectedLeague] = useState(null);
	const [firstTimeSelected, setFirstTimeSelected] = useState(false);


	const listYears = [];

	for (let i = 2004; i <= 2023; i++) {
		listYears.push(i);
	}

	useEffect(() => {
		fetch(`https://api.keovip11.tv/api/football/leagues`)
			.then(res => res.json())
			.then(leagues => {
				setLeagues(leagues.response)
			});
	}, []);

	useEffect(() => {
		if (year && leagueId) {
			setIsLoading(true);
			fetch(`https://api.keovip11.tv/api/football/standings?season=${year}&league=${leagueId}`)
				.then(res => res.json())
				.then(standings => {
					setStandings(standings.response[0]?.league?.standings[0]);
					setIsLoading(false);
				});
		}
		setFirstTimeSelected(true);
	}, [year, leagueId]);

	return (
		<div className={cx('wrapper')}>
			<Header />
			<Navbar />
			<div className={cx('content')}>
				<div className={cx('league')}>

					<select onChange={(event) => setYear(event.target.value)}>
						<option disabled defaultValue='Mùa giải'>Mùa giải</option>
						{listYears.map((year) => (
							<option key={year} value={year}>{year}</option>
						))}
					</select>
					<select onChange={(event) => setLeagueId(event.target.value)}>
						{leagues.map((league) => (
							<option
								key={league.league.id}
								value={league.league.id}>
								{league.league.name} {league.league.id}
							</option>
						))}
					</select>
					<header>
						<div className={cx('league-name')}>
							{selectedLeague && firstTimeSelected && (
								<>
									<img src={selectedLeague.league.logo} alt='Logo' />
									<h1>{selectedLeague.league.name}</h1>
									<h4>Mùa giải: {year}</h4>
								</>
							)}
						</div>
						<div className={cx('league-tabs')}>
							{tabs.map((tab, index) => (
								<button
									key={index}
									style={type === tab ?
										{
											color: '#fff',
											backgroundColor: '#fb592e'
										} : {}
									}
									onClick={() => setType(tab)}
								>
									{tab}
								</button>
							))}
						</div>
					</header>
					<div className={cx('table')}>
						<header>
							<div className={cx('title')}>
								{type === tabs[0] ? (<AiOutlineCalendar fill='#fff' style={{ width: '25px', height: '25px' }} />) : type === tabs[1] ? (<AiOutlineNotification fill='#fff' style={{ width: '25px', height: '25px' }} />) : (<AiOutlineInsertRowBelow fill='#fff' style={{ width: '25px', height: '25px' }} />)}
								<h1>{type || 'Bảng thống kê'}</h1>
							</div>
						</header>
						<div className={cx('table-body')}>
							<div className={cx('table-body-layout')}>
								<table cellSpacing={0}>
									<thead>
										<tr>
											{tableTitles.map((item, index) => (
												<th key={index}>
													{item}
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{isLoading ? (
											<tr>
												<td colSpan={tableTitles.length}
													style={{ fontSize: '1.6rem', padding: '40px 0', fontWeight: 'bold' }}
												>Loading...</td>
											</tr>
										) :
											(standings?.length > 0 ?
												standings?.map((item, index) => (
													<tr className={cx('border-top-bottom')} key={index}>
														<td className={cx('first-col')}>
															<span className={cx('no')}
																style={
																	item.all.played > 0 ?
																		(item.rank === 1 ?
																			{ background: '#306ee5', color: '#fff' } :
																			item.rank === 2 ?
																				{ background: '#1355d5', color: '#fff' } :
																				item.rank === 3 ?
																					{ background: '#013eb5', color: '#fff' } :
																					item.rank === 4 ?
																						{ background: '#063aa1', color: '#fff' } :
																						item.rank === 5 ?
																							{ background: '#022b7b', color: '#fff' } :
																							item.rank === 6 ?
																								{ background: '#03225f', color: '#fff' } : {}) : {
																			color: '#000', background: '#fff',
																		}
																}
															>
																{item.rank}
															</span>
															<span className={cx('team-name')}>
																<img src={item.team.logo} alt='Logo' />
																<span>
																	{item.team.name}
																</span>
															</span>
														</td>
														<td>{item.all.played}</td>
														<td>{item.all.win}</td>
														<td>{item.all.draw}</td>
														<td>{item.all.lose}</td>
														<td>{item.all.goals.for}</td>
														<td>{item.all.goals.against}</td>
														<td>{item.goalsDiff}</td>
														<td>{item.points}</td>
														<td>
															<span className={cx('form')}>
																{item.form && item.form.split('').map((formChar, index) => (
																	<span
																		key={index}
																		style={
																			formChar === 'L'
																				? { background: 'red' }
																				: formChar === 'D'
																					? { background: '#717386' }
																					: {}
																		}
																	>
																		{formChar === 'L' ? 'B' : formChar === 'W' ? 'T' : formChar === 'D' ? 'H' : ''}
																	</span>
																))}
															</span>
														</td>
													</tr>
												)) : (
													<NoContent />
												))
										}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

			</div>
			<Footer />
		</div>
	);
}

export default DuLieuTranDau;