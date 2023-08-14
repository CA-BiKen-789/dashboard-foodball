import classNames from "classnames/bind";
import styles from "./Header.module.css";
import { SearchOutlined } from "@ant-design/icons";

const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img className={cx('logo')} src="/images/header/logo.png" alt="Logo" />
				<img className={cx('banner')} src="/images/header/banner.png" alt="Banner" />
				<div className={cx('action')}>
					<div className={cx('language')}>
						<img className={cx('flag')} src="/images/header/flag.png" alt="Flag" />
						<span className={cx('language-name')}>Tiếng Việt</span>
					</div>
					<div className={cx('search')}>
						<SearchOutlined className={cx('btn-search')} />
						<input className={cx('input-search')} type="text" placeholder="Tìm kiếm" />
					</div>
					<a className={cx('login')} href="/#">
						Đăng nhập
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;