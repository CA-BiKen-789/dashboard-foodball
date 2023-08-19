import classNames from "classnames/bind";
import styles from "./Calendar.module.css";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Calendar({ link, homeLogo, homeName, awayLogo, awayName, timestamp }) {

	return (
		<div className={cx("wrapper")}>
			<Link className={cx('link')} to={link}>
				<div className={cx('calendar')}>
					<h6 className={cx('match-time')}>{timestamp}</h6>
					<div className={cx('match')}>
						<div className={cx('match-item')}>
							<img className={cx('match-logo')} src={homeLogo} alt="Logo" />
							<span className={cx('name')}>{homeName}</span>
						</div>
						<div className={cx('match-item')}>
							<img className={cx('match-logo')} src={awayLogo} alt="Logo" />
							<span className={cx('name')}>{awayName}</span>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default Calendar;