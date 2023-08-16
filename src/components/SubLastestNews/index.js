import classNames from "classnames/bind";
import styles from "./SubLastestNews.module.css";

const cx = classNames.bind(styles);

function SubLastestNews({ image, title, description }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<div className={cx("post-img")}>
					<img src={image} alt="Hình ảnh bài post" />
				</div>
				<div className={cx('post-content')}>
					<h2>{title}</h2>
					<span>{description}</span>
				</div>
			</div>
		</div>
	);
}

export default SubLastestNews;