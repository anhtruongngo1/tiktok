import styles from './LayoutDetailVideo.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalVideo } from '~/redux/userSlice';
import bg1 from '~/assets/images/image.jpeg';
import thumb from '~/assets/video/thumb.jpg';
import video from '~/assets/video/video.mp4';
import logo from '~/assets/images/logo.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faFlag, faHeart, faMusic, faShare, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import Button from '~/components/Button';
import { IconDip, IconFace, IconHear, IconIns, IconTalk, IconTwice, UploadIcon } from '~/components/Icons/Icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function LayoutDetailVideo(items=[]) {
    const dispatch = useDispatch();
    const [Icon, setIcon] = useState(false);

    const data = useSelector((state)=> state.user.dataDetailsVideo);
    console.log('checkne', items);

    const handleIcon = () => {
        setIcon(!Icon);
    };
    const handleClose = () => {
        dispatch(toggleModalVideo(false));
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('video')}>
                <div style={{ backgroundImage: `url(${data.thumb_url})` }} className={cx('video-background')}></div>
                <div className={cx('video-video')}>
                    <video className={cx('video-video')} controls loop muted poster={data.thumb_url}>
                        <source src={data.file_url } type="video/mp4" />
                    </video>
                </div>
                <button onClick={()=> handleClose()}
                 className={cx('video-close')}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <img className={cx('video-logo')} src={logo} />
                <button className={cx('video-report')}>
                    <FontAwesomeIcon icon={faFlag} />
                    Báo cáo
                </button>
            </div>

            <div className={cx('infomation')}>
                <div className={cx('infomation-info')}>
                    <a href="#" className={cx('infomation-link')}>
                        <Image src={data.user.avatar} className={cx('infomation-avatar')} />
                    </a>
                    <a href="#" className={cx('infomation-linkName')}>
                        <span className={cx('infomation-userName')}>{data.user.nickname}</span>
                        <span className={cx('infomatin-nickName')}>
                            Hỏi dân It
                            <span style={{ margin: ` 0 4px` }}> </span>
                            <span>6 giờ trước</span>
                        </span>
                    </a>
                    <Button className={cx('infomation-btn')}>đang follow</Button>
                    {/* <Button primary className={cx('infomation-btn')}>follower</Button> */}
                </div>
                <div className={cx('description')}>
                    <span className={cx('description-span')}>
                       {data.description}
                    </span>
                    <div className={cx('information-box')}>
                        <span>
                            <FontAwesomeIcon icon={faMusic} />
                            <span className={cx('information-box-hashtag')}>{data.music}</span>
                        </span>
                    </div>
                </div>
                <div className={cx('actions')}>
                    <button className={cx('button')} onClick={() => handleIcon()}>
                        <span className={cx('icon')}>
                            {/* {Icon ? */}
                            {/* <IconHear /> : */}
                            {data.is_liked ?  <IconHear /> :  <FontAwesomeIcon icon={faHeart} />
                            }
                           
                        </span>
                        <strong className={cx('strong')}>{data.likes_count}</strong>
                    </button>
                    <button className={cx('button')} onClick={() => handleIcon()}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCommentDots} />
                        </span>
                        <strong className={cx('strong')}>{data.comments_count}</strong>
                    </button>
                    <div className={cx('brand')}>
                        <Tippy delay={[0, 50]} content="Nhúng" placement="top">
                            <button className={cx('action-btn')}>
                                <IconDip />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Chia sẽ với facebook" placement="top">
                            <button className={cx('action-btn')}>
                                <IconFace />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Chia sẽ với Instagram" placement="top">
                            <button className={cx('action-btn')}>
                                <IconIns />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Chia sẽ với Twice" placement="top">
                            <button className={cx('action-btn')}>
                                <IconTwice />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Chia sẽ với Talk" placement="top">
                            <button className={cx('action-btn')}>
                                <IconTalk />
                            </button>
                        </Tippy>
                        <Tippy delay={[0, 50]} content="Chia sẽ" placement="top">
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faShare} />
                            </button>
                        </Tippy>
                    </div>
                </div>
                <div  className={cx('share')}>
                    <p  className={cx('share-link')}>
                        https://www.tiktok.com/@tayninh.tv/video/7182544104994114818?is_from_webapp=1&amp;sender_device=pc&amp;web_id=7152347339205035521
                    </p>
                    <button className={cx('share-btn')}>
                        Sao chép liên kết
                    </button>
                </div>
                <div className={cx('comments')}>
                
                </div>
                <div className={cx('comment-action')}>
                <input className={cx('comment-input')}
                 placeholder='thêm bình luận'/>
                    <button className={cx('comment-btn')}>
                       Đăng
                    </button>

                </div>
            </div>
     
        </div>
    );
}

export default LayoutDetailVideo;
