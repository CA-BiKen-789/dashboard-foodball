import classNames from "classnames/bind";
import styles from "./PostSubPage.module.css";

const cx = classNames.bind(styles);

function PostSubPage({ image, title, description, timestamp }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<div className={cx("post-img")}>
					<img src={image} alt="Ảnh bài post phụ" />
				</div>
				<div className={cx('post-content')}>
					<h2>{title}</h2>
					<span className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
					<span className={cx('timestamp')}>{timestamp}</span>
				</div>
			</div>
		</div>
	);
}

export default PostSubPage;