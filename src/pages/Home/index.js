import classNames from "classnames/bind";
import styles from "./Home.module.css";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import Post from "~/components/Post";
import { Link } from "react-router-dom";
import TitleNews from "~/components/TitleNews";
import Slider from "~/components/Slider";
import ResultTable from "~/components/ResultTable";
import LastestNews from "~/components/LastestNews";
import SubLastestNews from "~/components/SubLastestNews";
import Calendar from "~/components/Calendar";
import NoContent from "~/components/NoContent";
import { useEffect, useState } from "react";
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const cx = classNames.bind(styles);

function formatDate(timestamp) {
	const date = new Date(timestamp);
	const currentDate = new Date();
	const oneDay = 24 * 60 * 60 * 1000;

	if (date.toDateString() === currentDate.toDateString()) {
		return "Hôm nay";
	} else if (date.toDateString() === new Date(currentDate - oneDay).toDateString()) {
		return "Hôm qua";
	} else if (date.toDateString() === new Date(currentDate + oneDay).toDateString()) {
		return "Ngày mai";
	}

	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Asia/Ho_Chi_Minh'
	};
	return new Intl.DateTimeFormat('vi-VN', options).format(date);
}

function Home() {
	const listTeams = [
		{
			nameTeam: 'Man City',
			score: 89
		},
		{
			nameTeam: 'Man UTD',
			score: 57
		},
		{
			nameTeam: 'Arsenal',
			score: 47
		},
		{
			nameTeam: 'Dortmund',
			score: 44
		}
	]
	const [posts, setPosts] = useState([]);
	const [fixtures, setFixtures] = useState([]);

	useEffect(() => {
		fetch('https://api.keovip11.tv/api/football/fixtures')
			.then(res => res.json())
			.then(fixtures => {
				setFixtures(fixtures.response);
			});
	}, [])

	useEffect(() => {
		fetch('https://api.thethao789.com/api/post/getByTagSlug/bong-da?pageIndex=1&pageSize=6')
			.then(res => res.json())
			.then(posts => {
				setPosts(posts.data);
			});
	}, []);

	return (
		<div className={cx('wrapper')}>
			<Header />
			<Navbar />
			<div className={cx('content')}>
				<div className={cx('calendar')}>
					<TitleNews>Lịch thi đấu</TitleNews>
					<div className={cx('calendar-table')}>
						<Swiper
							modules={[Navigation, Pagination, Scrollbar, A11y]}
							spaceBetween={0}
							slidesPerView={5}
							navigation
							pagination={{ clickable: true }}
							scrollbar={{ draggable: true }}
						>
							{fixtures.map((item, index) => (
								<SwiperSlide key={index}>
									<Calendar
										link={`/du-lieu-bong-da/${item.league.id}`}
										timestamp={formatDate(item.fixture.date)}
										homeLogo={item.teams.home.logo}
										homeName={item.teams.home.name}
										awayLogo={item.teams.away.logo}
										awayName={item.teams.away.name}
									/>
								</SwiperSlide>
							))}
						</Swiper>

					</div>
				</div>
				<div className={cx('post')}>
					<TitleNews>Tin mới nhất</TitleNews>
					<ul className={cx('lastest-post')}>
						<div className={cx('lastest-news')}>
							<Link to="/#">
								<LastestNews
									image="/images/posts/post8.png"
									title="Bóng Đá Ảo Châu Á Là Gì? Bí Kíp Cá Cược Bóng Đá Ảo Thắng Lớn"
									description="HLV Park Hang-seo là một trong những HLV thành công nhất với bóng đá Việt Nam. Vậy lý do nào khiến nhà cầm quân người Hàn"
								/>
							</Link>
						</div>
						<div className={cx('sub-lastest-news')}>
							{posts.map((item, index) =>
							(
								<li key={index}>
									<Link to="/#">
										<SubLastestNews
											postContent={cx('post-content')}
											title={item.title}
											description={item.description}
											image={'https://thethao789.b-cdn.net/' + item.thumb}
											alt="Ảnh bài post chính"
										/>
									</Link>
								</li>
							))}
						</div>
					</ul>
					<TitleNews>
						bóng đá
					</TitleNews>
					<ul className={cx('post-list')}>
						{posts.length > 0 ?
							(posts.map((item, index) => (
								<li className={cx('post-item')} key={index}>
									<Link to="/#">
										<Post
											title={item.title}
											description={item.description}
											image={'https://thethao789.b-cdn.net/' + item.thumb}
											alt="Ảnh bài post chính"
											postClass={cx('post-layout')}
										/>
									</Link>
								</li>
							))) : (
								<NoContent />
							)
						}
					</ul>
				</div>
			</div>
			<div className={cx('slider')}>
				<div className={cx('slider-content')}>
					<Slider />
				</div>
			</div>
			<div className={cx('title-table')}>
				<TitleNews>Kết quả giải đấu</TitleNews>
			</div>
			<div className={cx('table-league')}>
				<ResultTable
					listTeams={listTeams}
					logoLeague='/images/league/ngoai-hang-anh-icon.png'
					nameLeague='ngoại hạng anh'
				/>
				<ResultTable
					listTeams={listTeams}

					logoLeague='/images/league/league1-icon.png'
					nameLeague='league 1'
				/>
				<ResultTable
					listTeams={listTeams}

					logoLeague='/images/league/laliga-icon.png'
					nameLeague='la liga'
				/>
				<ResultTable
					listTeams={listTeams}

					logoLeague='/images/league/bundesliga-icon.png'
					nameLeague='bundesliga'
				/>
				<ResultTable
					listTeams={listTeams}

					logoLeague='/images/league/seria-a-icon.png'
					nameLeague='seria a'
				/>
			</div>
			<Footer />
		</div>
	);
}

export default Home;