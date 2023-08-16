import classNames from "classnames/bind";
import styles from "./NhanDinhBongDa.module.css";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router-dom";
import TitleNews from "~/components/TitleNews";
import MainPost from "~/components/MainPost";
import PostSubPage from "~/components/PostSubPage";
import PostRecommend from "~/components/PostRecommend";
import SubPostRecommend from "~/components/SubPostRecommend";

const cx = classNames.bind(styles);

function NhanDinhBongDa() {

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

	const listSubPosts = [
		{
			subTitle: "Ngoại Hạng Anh vòng 17: Derby London, tranh tài nghẹt thở",
			subImage: "/images/posts/post1.png",
			timestamp: "03:50, 15/08/2023"
		},
		{
			subTitle: "Yếu Tố Tạo Nên Sức Mạnh Tuyển Pháp Ở World Cup 2022",
			subImage: "/images/posts/post2.png",
			timestamp: "03:50, 15/08/2023"
		},
		{
			subTitle: "Soi kèo Brentford vs Tottenham Hotspur: 19h30 Ngày 26/12 - Ngoại Hạng Anh",
			subImage: "/images/posts/post3.png",
			timestamp: "03:50, 15/08/2023"
		},
		{
			subTitle: "Động Thái Của David De Gea Khi Sau Khi Tây Ban Nha Bị Loại",
			subImage: "/images/posts/post4.png",
			timestamp: "03:50, 15/08/2023"
		},
	]

	return (
		<div className={cx('wrapper')}>
			<Header />
			<Navbar />
			<div className={cx('content')}>
				<div className={cx('main-content')}>
					<TitleNews>
						bóng đá
					</TitleNews>
					<div className={cx('content-news')}>
						<div className={cx('main-content-news')}>
							<div className={cx('post')}>
								<ul className={cx('post-list')}>
									{listPost.map((item, index) => (
										index === 0 ? (
											<li className={cx('main-post')} key={index}>
												<Link to="/#">
													<MainPost
														title={item.title}
														description={item.description}
														image={item.image}
														alt="Ảnh bài post chính"
													/>
												</Link>
											</li>
										) : (
											<li className={cx('post-item')} key={index}>
												<Link to="/#">
													<PostSubPage
														postLayout={cx('post-layout')}
														image={item.image}
														alt={item.alt}
														description={item.description}
														title={item.title}
														postContent={cx('post-content')}
													/>
												</Link>
											</li>
										)
									))}
								</ul>
							</div>
						</div>
						<div className={cx('sub-content')}>
							<TitleNews>
								xem nhiều nhất
							</TitleNews>
							<ul>
								{listSubPosts.map((item, index) => (
									index === 0 ? (
										<Link to="/#" key={index}>
											<PostRecommend
												image="/images/posts/post2.png"
												title="Danh Hiệu Lẩn Trốn Đội Tuyển Anh Dù Có Binh Lực Hùng Mạnh"
												timestamp="03:40 15/08/2023"
											/>
										</Link>
									) : (
										<li key={index}>
											<Link to="/#">
												<SubPostRecommend
													image={item.subImage}
													title={item.subTitle}
													timestamp={item.timestamp} />
											</Link>
										</li>
									)
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default NhanDinhBongDa;