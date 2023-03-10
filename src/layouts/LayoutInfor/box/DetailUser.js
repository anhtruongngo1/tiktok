import { faCheckCircle, faLink, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Button from '~/components/Button';
import { IconMore, IconShare, IconUserFollow, IconUserPrivate } from '~/components/Icons/Icons';
import Image from '~/components/Image';
import styles from './DetailUser.module.scss';
import VideoBox from './VideoBox';
import * as userService from '~/Services/userServices';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function DetailUser() {
    let { id } = useParams();
    const [active, setActive] = useState(true);
    const [infoUser, setInfoUser] = useState([]);

    useEffect(() => {
        DetailanUser(id)
    }, [id]);

    console.log('check id' , id);
    const DetailanUser = async (id) => {
        const res = userService
            .getInfoUser({
                type:  id,
            })
            .then((data) => setInfoUser(data))
            .catch((error) => console.log(error));
    };
    const handleFollow = async (id) => {
        const accessToken = localStorage.getItem('user');
        const res = await userService.userFollow({ id, accessToken });
        console.log('check res1', res);
        DetailanUser(id)
    };
    console.log('check user', infoUser);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('box')}>
                    <div className={cx('avatar')}>
                        <span className={cx('avatar-box')}>
                            <Image src={infoUser.avatar} className={cx('image')} />
                        </span>
                    </div>
                    <div className={cx('information')}>
                        <h2 className={cx('nickname')}>
                            {infoUser && infoUser.nickname ? infoUser.nickname : ''}

                            {infoUser.tick ? <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> : ''}
                        </h2>
                        <h4 className={cx('fullname')}>
                            {infoUser && infoUser.first_name && infoUser.last_name
                                ? infoUser.first_name + infoUser.last_name
                                : ''}
                        </h4>
                        <div className={cx('follow')}>
                            {infoUser && infoUser.is_followed ? (
                                <Button outline className={cx('follow-link')}>
                                    {' '}
                                    Tin nh???n
                                </Button>
                            ) : (
                                <Button onClick={() => handleFollow(infoUser.id)} primary className={cx('follow-btn')}>
                                    Follow
                                </Button>
                            )}

                            <Tippy
                                interactive
                                delay={[100, 0]}
                                content="B??? follower"
                                placement="bottom"
                                offset={[-20, 10]}
                            >
                                <div className={cx('icon')}>
                                    <IconUserFollow />
                                </div>
                            </Tippy>
                        </div>
                        <div className={cx('box-icon')}>
                            <IconShare />
                            <IconMore />
                        </div>
                    </div>
                </div>
                <div className={cx('box')}>
                    <div className={cx('item')}>
                        <strong> {infoUser.followings_count}</strong>
                        <span className={cx('item-title')}> ??ang follow</span>
                    </div>
                    <div className={cx('item')}>
                        <strong>{infoUser.followers_count}</strong>
                        <span className={cx('item-title')}> Follower</span>
                    </div>
                    <div className={cx('item')}>
                        <strong> {infoUser.likes_count}</strong>
                        <span className={cx('item-title')}> Th??ch</span>
                    </div>
                </div>
            </div>
            <p className={cx('box-description')}> {infoUser && infoUser.bio ? infoUser.bio : ''}</p>
            <a className={cx('link')} href={infoUser.facebook_url}>
                <FontAwesomeIcon icon={faLink} />
                {infoUser.facebook_url && infoUser.facebook_url}
            </a>
            <div className={cx('list')}>
                <div className={cx('list-title')}>
                    <p
                        onClick={() => setActive(true)}
                        className={cx('list-span-video', active === true ? 'active' : '')}
                    >
                        Video
                    </p>
                    <p
                        onClick={() => setActive(false)}
                        className={cx('list-span-like', active === true ? '' : 'active')}
                    >
                        <FontAwesomeIcon icon={faLock} />
                        ???? th??ch
                    </p>
                    <div className={cx('list-underline')}></div>
                </div>
            </div>
            {
                active ?
                 <div className={cx('list-box')}>
                    <div className={cx('list-box')}>
                        <VideoBox data={infoUser.videos} />
                    </div>
                </div> 
                :

            <div className={cx('list-private')}>
                <div className={cx('private-box')}>
                    <FontAwesomeIcon icon={faLock} />

                </div>
                <p className={cx('private-title')}>
                Video ???? th??ch c???a ng?????i d??ng n??y ??? tr???ng th??i ri??ng t??
                </p>
                <p>C??c video ???????c th??ch b???i {infoUser.nickname} hi???n ??ang ???n</p>

            </div>

            }
        </div>
    );
}

export default DetailUser;
