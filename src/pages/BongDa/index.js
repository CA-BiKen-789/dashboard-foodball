import classNames from "classnames/bind";
import styles from "./BongDa.module.css";
import Header from "~/components/Header";
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { Link } from "react-router-dom";
import TitleNews from "~/components/TitleNews";
import MainPost from "~/components/MainPost";
import PostSubPage from "~/components/PostSubPage";
import PostRecommend from "~/components/PostRecommend";
import SubPostRecommend from "~/components/SubPostRecommend";
import NoContent from "~/components/NoContent";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function BongDa() {

	const tabs = ['Cúp C1', 'Anh', 'Pháp', 'Đức', 'Tây Ban Nha', 'Ý', 'Euro'];

	const [posts, setPosts] = useState([]);
	const [type, setType] = useState('');

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
				<div className={cx('main-content')}>
					<TitleNews>
						bóng đá
					</TitleNews>
					<div className={cx('tabs')}>
						{tabs.map((tab, index) => (
							<button
								key={index}
								style={type === tab ? { color: '#fb592e', borderBottom: '3px solid #fb592e' } : {}}
								onClick={() => setType(tab)}
							>
								{tab}
							</button>
						))}
					</div>

					<div className={cx('content-news')}>
						<div className={cx('main-content-news')}>
							<div className={cx('post')}>
								<ul className={cx('post-list')}>
									{
										type ? (posts.length > 0 ?
											(posts.map((item, index) => (
												index === 0 ? (
													<li className={cx('main-post')} key={index}>
														<Link to={`/detail/${item.slug}`}>
															<MainPost
																title={item.title}
																description={item.description}
																image={'https://thethao789.b-cdn.net/' + item.thumb}
																alt="Ảnh bài post chính"
															/>
														</Link>
													</li>
												) : (
													<li className={cx('post-item')} key={index}>
														<Link to={`/detail/${item.slug}`}>
															<PostSubPage
																postLayout={cx('post-layout')}
																image={'https://thethao789.b-cdn.net/' + item.thumb}
																alt={item.alt}
																description={item.description}
																title={item.title}
																postContent={cx('post-content')}
															/>
														</Link>
													</li>
												)
											))) : (
												<NoContent />
											))
											:
											(posts.map((item, index) => (
												index === 0 ? (
													<li className={cx('main-post')} key={index}>
														<Link to={`/detail/${item.slug}`}>
															<MainPost
																title={item.title}
																description={item.description}
																image={'https://thethao789.b-cdn.net/' + item.thumb}
																alt="Ảnh bài post chính"
															/>
														</Link>
													</li>
												) : (
													<li className={cx('post-item')} key={index}>
														<Link to={`/detail/${item.slug}`}>
															<PostSubPage
																postLayout={cx('post-layout')}
																image={'https://thethao789.b-cdn.net/' + item.thumb}
																alt={item.alt}
																description={item.description}
																title={item.title}
																postContent={cx('post-content')}
															/>
														</Link>
													</li>
												)
											)))
									}
								</ul>
							</div>
						</div>
						<div className={cx('sub-content')}>
							<TitleNews>
								xem nhiều nhất
							</TitleNews>
							<ul>
								{posts.length > 0 ?
									(posts.map((item, index) => (
										index === 0 ? (
											<Link to={`/detail/${item.slug}`} key={index}>
												<PostRecommend
													postLayout={cx('post-layout')}
													image={'https://thethao789.b-cdn.net/' + item.thumb}
													alt={item.alt}
													description={item.description}
													title={item.title}
												/>
											</Link>
										) : (
											<li key={index}>
												<Link to={`/detail/${item.slug}`}>
													<SubPostRecommend
														postLayout={cx('post-layout')}
														image={'https://thethao789.b-cdn.net/' + item.thumb}
														alt={item.alt}
														description={item.description}
														title={item.title}
													/>
												</Link>
											</li>
										)
									))) : (
										<NoContent />
									)}
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default BongDa;