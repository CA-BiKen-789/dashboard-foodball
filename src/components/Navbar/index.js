import classNames from "classnames/bind";
import styles from "./Navbar.module.css";
import { NavLink, useLocation } from 'react-router-dom';
import { HomeOutlined } from "@ant-design/icons/lib/icons";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Navbar() {
	const location = useLocation();
	const isActive = (path) => {
		return location.pathname === path ? 'active' : '';
	};
	const listMenu = [
		{
			name: "Bóng đá",
			path: "/bong-da"
		}
		,
		{
			name: "Nhận định bóng đá",
			path: "/#"
		},
		{
			name: "Tin bóng đá",
			path: "/#"
		},
		{
			name: "Bóng đá Việt Nam",
			path: "/#"
		},
		{
			name: "Esports",
			path: "/#"
		},
		{
			name: "Lịch thi đấu",
			path: "/#"
		},
		{
			name: "Trực tiếp",
			path: "/#"
		},
		{
			name: "Tips",
			path: "/#"
		},
		{
			name: "Sea Game 32",
			path: "/#"
		}
	]

	const [isFixed, setIsFixed] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 170) {
				setIsFixed(true);
			} else {
				setIsFixed(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div className={cx("wrapper", { "fixed-navbar": isFixed })}>
			<div className={cx('inner')}>
				<ul className={cx('list-menu')}>
					<li className={cx('menu-item', 'menu-item_home')}>
						<NavLink
							className={cx(isActive('/'))}
							to="/" >
							<HomeOutlined />
						</NavLink>
					</li>
					{listMenu.map((item, index) => (
						<li key={index}>
							<NavLink
								className={cx(isActive(item.path))} to={item.path}>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;