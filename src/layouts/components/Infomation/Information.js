import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './Information.module.scss';

import Menu from './Item/Menu';
import * as userService from '~/Services/userServices'
import { useSelector } from 'react-redux';


const cx = classNames.bind(styles);

const INIT_PAGE = 1;
function Information() {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [noMoreVideo, setNoMoreVideo] = useState(false);
    const currentUser = useSelector((state)=> state.user.currentUser);
    useEffect(() => {
        userService
            .userVideo({ type: 'for-you', page })
            .then((data) => {
                if (Array.isArray(data)) {
                    setData((prevUser) => [...prevUser, ...data]);
                }
                if (data.length === 0) {
                    setNoMoreVideo(true);
                }
            })
            .catch((error) => console.log(error));
    }, [page ,currentUser ]);

    const handlePage = () =>{
        setPage(page + 1)
        console.log('check page' , page);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu-scroll')}>
                <Menu data={data} handlePage={handlePage} />
            </div>
        </div>
    );
}

export default Information;
