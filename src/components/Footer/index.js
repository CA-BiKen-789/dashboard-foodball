import classNames from "classnames/bind";
import styles from "./Footer.module.css";
import { FacebookFilled, YoutubeFilled, InstagramFilled } from "@ant-design/icons/lib/icons";

const cx = classNames.bind(styles);

function Footer() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('inner')}>
				<span>
					© 2022 Bản quyền thuộc về Thể Thao 789 DMCA.com Protection Status
				</span>
				<div className={cx('follow')}>
					<span>
						Theo dõi Thể Thao 789 trên
					</span>
					<FacebookFilled className={cx('icon')} />
					<YoutubeFilled className={cx('icon')} />
					<InstagramFilled className={cx('icon')} />
				</div>
			</div>
		</div>
	);
}

export default Footer;