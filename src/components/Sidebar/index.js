import classNames from "classnames/bind";
import styles from "./Sidebar.module.css";
import React from 'react';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Sidebar() {
	return (
		<div className={cx('wrapper')}>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<ul>
						<li>
							<Link to="/orders">Orders</Link>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<Link to="/products">Products</Link>
						</li>
					</ul>
				</li>
				<li>
					<ul>
						<li>
							<Link to="/customers">Customers</Link>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;