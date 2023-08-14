import classNames from "classnames/bind";
import styles from "./Orders.module.css";

const cx = classNames.bind(styles);

function Orders() {
	return (<h1 className={cx('wrapper')}>Orders</h1>);
}

export default Orders;