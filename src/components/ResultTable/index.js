import { Link } from 'react-router-dom';
import styles from './ResultTable.module.css';
import classNames from 'classnames/bind';
import { CaretDownOutlined } from '@ant-design/icons';

const cx = classNames.bind(styles);

function ResultTable({ logoLeague, nameLeague, listTeams }) {


	return (
		<div className={cx('wrapper')}>
			<div className={cx('table')}>
				<div className={cx('header')}>
					<div className={cx('name-league')}>
						<img src={logoLeague} alt='Icon' />
						<h3 className={cx('name')}>{nameLeague}</h3>
					</div>
					<span>điểm</span>
				</div>
				<div className={cx('body')}>
					<ul className={cx('team-list')}>
						{listTeams.map((item, index) => (
							<li key={index} className={cx('item')}>
								<div>
									<span>{index + 1}</span>
									<span>{item.nameTeam}</span>
								</div>
								<h6 className={cx('score')}>{item.score}</h6>
							</li>
						))}
					</ul>
				</div>
			</div>
			<Link to='/#'>
				<CaretDownOutlined />
			</Link>
		</div>
	);
}

export default ResultTable;