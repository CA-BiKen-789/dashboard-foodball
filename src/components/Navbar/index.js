import classNames from "classnames/bind";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons/lib/icons";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Navbar() {
	const listMenu = [
		{
			name: "Home",
			path: "/"
		},
		{
			name: "Bóng đá",
			path: "/#"
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
						<Link to="/">
							<HomeOutlined />
						</Link>
					</li>
					{listMenu.map((item, index) => (
						<li key={index}>
							<Link to={item.path}>
								{item.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;