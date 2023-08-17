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
			path: "/nhan-dinh-bong-da"
		},
		{
			name: "Tin bóng đá",
			path: "/tin-bong-da"
		},
		{
			name: "Bóng đá Việt Nam",
			path: "/bong-da-viet-nam"
		},
		{
			name: "Esports",
			path: "/esports"
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

		const handleRouteChange = () => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("routeChange", handleRouteChange);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("routeChange", handleRouteChange);
		};
	}, []);




	return (
		<div className={cx("wrapper", { "fixed-navbar": isFixed })}>
			<div className={cx('inner')}>
				<ul className={cx('list-menu')}>
					<li className={cx('menu-item', 'menu-item_home')}>
						<NavLink
							className={cx(isActive('/'))}
							to="/" onClick={() => {
								const event = new Event("routeChange");
								window.dispatchEvent(event);
							}}>
							<HomeOutlined />
						</NavLink>
					</li>
					{listMenu.map((item, index) => (
						<li key={index}>
							<NavLink
								className={cx(isActive(item.path))} to={item.path} onClick={() => {
									const event = new Event("routeChange");
									window.dispatchEvent(event);
								}}>
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