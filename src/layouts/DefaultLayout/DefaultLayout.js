import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from '../components/Sidebar';
import PropTypes from 'prop-types';
import Information from '../components/Infomation/Information';


const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header /> */
             <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>
                    <Information />
                </div>
            </div>
      
        </div>
    
    );
}
DefaultLayout.propTypes = {
    children : PropTypes.node.isRequired
}

export default DefaultLayout;
