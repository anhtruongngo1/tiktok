import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './VideoBox.module.scss';
import img from '~/assets/video/demo.jpeg';
import video from '~/assets/video/video.mp4';
import { useEffect } from 'react';

const cx = classNames.bind(styles);
function VideoBox({data =[]}) {


    const handleReMove = (e) => {
        e.target.currentTime = 0 
        e.target.pause()
    };
    useEffect(()=>{

    },[data])
    return (
        <div className={cx('wrapper')}>
         {
             data.map((item) =>(
                <div className={cx('item')} key={item.id}>
                <div className={cx('content')}>
                    <div className={cx('video')}>
                        <div className={cx('video-image')}>
                            <video
                                onMouseOver={(e) => e.target.play()}
                                onMouseOut={(e) => handleReMove(e)}
                                className={cx('image')}
                                loop
                                muted
                                poster={item.thumb_url}
                            >
                                <source src={item.file_url} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
                <div>
                    <p className={cx('title')}>{item.description}</p>
                </div>
            </div>
             ))
         }
        </div>
    );
}

export default VideoBox;
