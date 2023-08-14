import classNames from "classnames/bind";
import styles from "./Post.module.css";

const cx = classNames.bind(styles);

function Post({ image, alt, title, description }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<img src={image} alt={alt} />
				<h2>{title}</h2>
				<span>{description}</span>
			</div>
		</div>
	);
}

export default Post;