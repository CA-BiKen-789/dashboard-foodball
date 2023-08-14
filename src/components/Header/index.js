import classNames from "classnames/bind";
import styles from "./Header.module.css";

const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx('wrapper')}>
			<h1>dashboard football</h1>
			<img className={cx('logo')} src="/images/logo.png" alt="logo" />
			<div className={cx('account')}>
				<img src="/images/avatar.jpg" alt="avatar" />
				<span>CA BiKen - IT Web</span>
			</div>
		</div>
	);
}

export default Header;