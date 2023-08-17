import classNames from "classnames/bind";
import styles from "./LastestNews.module.css";

const cx = classNames.bind(styles);

function LastestNews({ image, title, description, postContent }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<div className={cx("post-img")}>
					<img src={image} alt="Hình ảnh bài post" />
				</div>
				<div className={postContent}>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
					<span className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
				</div>
			</div>
		</div>
	);
}

export default LastestNews;