import classNames from "classnames/bind";
import styles from "./PostSubPage.module.css";

const cx = classNames.bind(styles);

function PostSubPage({ image, alt, title, description }) {

	return (
		<div className={cx("wrapper")}>
			<div className={cx("post")}>
				<div className={cx("post-img")}>
					<img src={image} alt={alt} />
				</div>
				<div className={cx('post-content')}>
					<h2>{title}</h2>
					<span>{description}</span>
				</div>
			</div>
		</div>
	);
}

export default PostSubPage;