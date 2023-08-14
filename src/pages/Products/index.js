import classNames from "classnames/bind";
import styles from "./Products.module.css";

const cx = classNames.bind(styles);

function Products() {
	return (<h1 className={cx('wrapper')}>Products</h1>);
}

export default Products;