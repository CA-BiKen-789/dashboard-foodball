import classNames from "classnames/bind";
import styles from "./Post.module.css";

const cx = classNames.bind(styles);

function Post({ image, alt, title, description, postContent }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<div className={cx("post-img")}>
					<img src={image} alt={alt} />
				</div>
				<div className={postContent}>
					<h2 dangerouslySetInnerHTML={{ __html: title }} />
					<span className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
				</div>
			</div>
		</div>
	);
}

export default Post;