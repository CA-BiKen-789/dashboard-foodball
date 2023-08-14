import classNames from "classnames/bind";
import styles from "./Home.module.css";

const cx = classNames.bind(styles);

function Home() {
	return (
		<h1 className={cx('wrapper')}>
			Home
		</h1>
	);
}

export default Home;