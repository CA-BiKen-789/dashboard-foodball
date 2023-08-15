import classNames from "classnames/bind";
import styles from "./PostRecommend.module.css";

const cx = classNames.bind(styles);

function PostRecommend({ image, title, timestamp }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<div className={cx("post-img")}>
					<img src={image} alt="Sub recommend post" />
				</div>
				<div className={cx('post-content')}>
					<h2>{title}</h2>
					<span>{timestamp}</span>
				</div>
			</div>
		</div>
	);
}

export default PostRecommend;