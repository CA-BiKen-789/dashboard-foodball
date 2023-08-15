import classNames from "classnames/bind";
import styles from "./TitleNews.module.css";

const cx = classNames.bind(styles);

function TitleNews({ children }) {

	return (
		<div className={cx("wrapper")}>
			<h3>{children}</h3>
		</div>
	);
}

export default TitleNews;