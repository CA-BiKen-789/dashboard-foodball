import classNames from "classnames/bind";
import styles from "./Customers.module.css";

const cx = classNames.bind(styles);

function Customers() {
	return (<h1 className={cx('wrapper')}>Customers</h1>);
}

export default Customers;