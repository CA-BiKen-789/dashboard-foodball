import Header from '~/components/Header';
import styles from './DuLieuTranDau.module.css';
import classNames from 'classnames/bind';
import Navbar from '~/components/Navbar';
import Footer from '~/components/Footer';
import { useEffect, useState } from 'react';
import { AiOutlineCalendar, AiOutlineInsertRowBelow, AiOutlineNotification } from "react-icons/ai";
import Standings from '~/components/Standings';

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
	}, [year, leagueId]);

	const id = leagues.find((item) => item.league.id === parseInt(leagueId));

	return (
		<div className={cx('wrapper')}>
			<Header />
			<Navbar />
			<div className={cx('content')}>
				<div className={cx('league')}>
					<select onChange={(event) => setLeagueId(event.target.value)}>
						{leagues.map((league) => (
							<option
								style={{ padding: '10px' }}
								key={league.league.id}
								value={league.league.id}
							>
								{league.league.name}
							</option>
						))}
					</select>
					<select onChange={(event) => setYear(event.target.value)}>
						<option disabled defaultValue='Mùa giải' selected>Mùa giải</option>
						{listYears.map((year) => (
							<option key={year} value={year}>{year}</option>
						))}
					</select>
					<header>
						<div className={cx('league-name')}>
							<img src={id?.league?.logo || 'https://files.softicons.com/download/sport-icons/fifa-world-cup-2006-icons-by-yellow-icon/ico/cup.ico'} alt='Logo' />
							<h1>{id?.league?.name || 'Chưa chọn'}</h1>
							<h4>Mùa giải: {year || 'Chưa chọn'}</h4>
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

						{/* table  */}
						<Standings
							tableTitles={tableTitles}
							type={type}
							isLoading={isLoading}
							standings={standings}
						/>

					</div>
				</div>

			</div>
			<Footer />
		</div>
	);
}

export default DuLieuTranDau;