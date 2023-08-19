import NoContent from '../NoContent';
import styles from './Standings.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Standings({ tableTitles, type, isLoading, standings }) {
	return (
		<div className={cx('wrapper')}>
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
							{
								type ?
									(isLoading ? (
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
											))) : (
										<NoContent />
									)
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default Standings;