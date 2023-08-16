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

const cx = classNames.bind(styles);

function Home() {

	const listPost = [
		{
			title: "Bóng Đá Ảo Châu Á Là Gì? Bí Kíp Cá Cược Bóng Đá Ảo Thắng Lớn",
			description: "Tìm hiểu định nghĩa bóng đá ảo châu Á là gì - Chia sẻ kinh nghiệm cá độ bóng đá ảo hay nhất tại Thethao789 giúp cược thủ thắng đậm nhà cái",
			image: "/images/posts/post1.png",
			alt: "Ảnh bài post"
		}, {
			title: "Tổng Quan Về Kèo Chấp Đồng Banh Cho Tân Thủ Mới Nhất 2023",
			description: "Kèo chấp đồng banh là một loại kèo cược không thể bỏ qua khi nhắc tới cá cược bóng đá. Hãy cùng Thethao789 đi tìm hiểu sâu hơn qua bài viết",
			image: "/images/posts/post2.png",
			alt: "Ảnh bài post"
		}, {
			title: "Tài Xỉu Trong Bóng Đá Là Gì? Kinh Nghiệm Đặt Cược Hiệu Quả",
			description: "Tài xỉu trong bóng đá là kèo cược được rất nhiều anh em yêu thích bởi tỷ lệ thắng lớn và dễ tìm kiếm tại các nhà cái cá cược. Cùng Thetheo789 đi",
			image: "/images/posts/post3.png",
			alt: "Ảnh bài post"
		}, {
			title: "Kèo Trên Là Gì? Hướng Dẫn Đặt Cược Kèo Trên Luôn Thắng",
			description: "Kèo trên là gì, chơi có khó không, làm thế nào để ăn được phần thưởng lớn? Tất cả sẽ được Thethao789 giải đáp qua bài viết chi tiết thú vị sau",
			image: "/images/posts/post4.png",
			alt: "Ảnh bài post"
		}, {
			title: "Cá Cược Bóng Rổ - Thể Loại Cá Cược Hot Nhất Hiện Nay",
			description: "Cá cược bóng rổ là bộ môn được nhiều người quan tâm nhất thời điểm hiện nay. Thể loại này mang đến cho người chơi nhiều cách cá độ vô",
			image: "/images/posts/post5.png",
			alt: "Ảnh bài post"
		}, {
			title: "Yếu Tố Tạo Nên Sức Mạnh Tuyển Pháp Ở World Cup 2022",
			description: "Sức mạnh tuyển Pháp là tổng hòa của nhiều thứ khác nhau. Dưới đây là những phân tích những gì đã tạo nên một Gà Trống Goloa",
			image: "/images/posts/post6.png",
			alt: "Ảnh bài post"
		}, {
			title: "Cầu Thủ Quang Hải Sẽ Cùng Đội Tuyển Việt Nam Tham Dự AFF Cup",
			description: "Cầu thủ Quang Hải là một trong những ngôi sao sáng nhất của bóng đá Việt Nam. Việc anh có thể cùng đội tuyển tham dự AFF Cup",
			image: "/images/posts/post7.png",
			alt: "Ảnh bài post"
		}, {
			title: "HLV Park Hang-seo Chia Tay Đội Tuyển Việt Nam",
			description: "HLV Park Hang-seo là một trong những HLV thành công nhất với bóng đá Việt Nam. Vậy lý do nào khiến nhà cầm quân người Hàn",
			image: "/images/posts/post8.png",
			alt: "Ảnh bài post"
		},

	];

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

	return (
		<div className={cx('wrapper')}>
			<Header />
			<Navbar />
			<div className={cx('content')}>
				<div className={cx('calendar')}>
					<TitleNews>Lịch thi đấu</TitleNews>
					<div className={cx('calendar-table')}>
						<Calendar />
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
							{listPost.map((item, index) =>
							(
								<li key={index}>
									<Link to="/#">
										<SubLastestNews
											postContent={cx('post-content')}
											image={item.image}
											title={item.title}
											description={item.description}
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
						{listPost.map((item, index) => (
							<li className={cx('post-item')} key={index}>
								<Link to="/#">
									<Post
										image={item.image}
										alt={item.alt}
										description={item.description}
										title={item.title}
										postClass={cx('post-layout')}
									/>
								</Link>
							</li>
						))}
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