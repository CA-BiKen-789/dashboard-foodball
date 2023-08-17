import styles from './MainDetailNews.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainDetailNews({ title, updatedTime, description, htmlContent }) {
	return (
		<div className={cx('wrapper')} >
			<h1 className={cx('title')}>{title}</h1>
			<span className={cx('updatedTime')}>{updatedTime}</span>
			<h3 className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />
			<span className={cx('htmlContent')} dangerouslySetInnerHTML={{ __html: htmlContent }} />
		</div>
	);
}

export default MainDetailNews;