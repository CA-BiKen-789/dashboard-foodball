import classNames from "classnames/bind";
import styles from "./MainPost.module.css";

const cx = classNames.bind(styles);

function MainPost({ image, alt, title, description }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("main-post")}>
				<div className={cx("main-post-img")}>
					<img src={image} alt={alt} />
				</div>
				<div className={cx("main-post-content")}>
					<h2>{title}</h2>
					<span className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
				</div>
			</div>
		</div>
	);
}

export default MainPost;