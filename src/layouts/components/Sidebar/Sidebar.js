import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons/Icons';
import SuggestedAccounts from '../SuggestedAccounts';

import * as userService from '~/Services/userServices';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar({ classe }) {
    const [page, setPage] = useState(INIT_PAGE);
    const [followPage , setFollowPage] = useState(INIT_PAGE)
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    const [followUser, setFollowUser] = useState([]);

    const currentUser = useSelector((state)=> state.user.currentUser);

    useEffect(() => {
        userService
            .getSuggested({ page, perPage: PER_PAGE })
            .then((data1) => {
                setSuggestedUsers((prevUser) => [...prevUser, ...data1]);
            })
            .catch((error) => console.log(error));
            if(currentUser){
                handleListFollow()
            }
  
    }, [page , followPage , currentUser]);

    
    const handleMore = () =>{
        setPage(page+1)
    }
    
    const handleListFollow = () =>{
        userService
        .userListFollow({ page : followPage})
        .then((data) => {
            setFollowUser((prevUser) => [...prevUser, ...data.data]);
        })
        .catch((error) => console.log(error));
    }
    const handleMoreFollow = () =>{
        setFollowPage(followPage+1)
    }
    return (
        <aside className={cx('wrapper', classe)}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts label="Suggested accounts" data={suggestedUsers} handleMore={handleMore} />
            <SuggestedAccounts label="Following accounts" data={followUser} handleMore={handleMoreFollow}/>
        </aside>
    );
}

export default Sidebar;
