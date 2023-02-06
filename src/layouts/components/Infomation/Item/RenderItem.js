import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import classNames from 'classnames/bind';
import styles from './RenderItem.module.scss';
import Image from '~/components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import VideoList from '../video/VideoList';
import Action from '../action/Action';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '../../SuggestedAccounts/AccountPreview';
import Button from '~/components/Button';

import * as userService from "~/Services/userServices"
import LayoutDetailVideo from '~/layouts/LayoutDetailVideo/LayoutDetailVideo';
import { useDispatch } from 'react-redux';
import { handleDataDetailsVideo } from '~/redux/userSlice';



const cx = classNames.bind(styles);

export default function RenderItem({ items = [] }) 
{   
    const [followed, setFollowed] = useState(items.user.is_followed)
    const dispatch = useDispatch()


    useEffect(()=>{

    },[items])
    const navigate = useNavigate();
        
    const renderPreview = (props) =>{
        return (
            <div  tabIndex="-1" {...props}>
                <PopperWrapper >
                    <AccountPreview data={items.user} />
              

                </PopperWrapper>

            </div>
        )
    }
    const handleLink = () =>{
        console.log('cons' , items);
        navigate(`/information/@${items.user.nickname}`)
        
    }
    console.log('check data' , items.user);
    const handleFollow = async(id) =>{
         const res = await userService.userFollow({id})
         if(res&& res.data){
            setFollowed(!followed)
         }
        console.log('check id ' , id);

    }
    const handleUnFollow = async(id) =>{
        const res = await userService.userUnFollow({id})
        if(res && res.data){
            setFollowed(!followed)
        }
    }
    

     return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
            <Tippy 
             interactive
             delay={[500,0]}
             render={renderPreview}
             placement='bottom'
             offset={[130, 10]}
            >
                <a href="/">
                    <div className={cx('avatar-box')}>
                        <Image
                            className={cx('avatar-icon')}
                            src={items.user.avatar} />
                    </div>
                </a>
                
            </Tippy>
            </div>

            <div className={cx('content')}>
            <div className={cx('box')}>
            <div className={cx('information')}>
                    <Tippy 
             interactive
             delay={[500,0]}
             render={renderPreview}
             placement='bottom'
             offset={[130, 10]}
            >
                
                    <div className={cx('information-box')}>
                        <h3 onClick={() =>handleLink()}
                         className={cx('information-box-name')}> {items.user.nickname} </h3>
                        <h4 className={cx('information-box-fullname')}> {items.user.last_name}{items.user.first_name}</h4>
                    </div>
                
                </Tippy>
                    <div className={cx('information-box')}>
                        <span className={cx('information-box-description')}>
                           {items.description}
                        </span>
                        <a href='/'
                        className={cx('information-box-hashtag')}> #tiktok_clone</a>
                    </div>
                    <div className={cx('information-box')}>
                      <span > 
                      <FontAwesomeIcon icon={faMusic}/>
                      <span className={cx('information-box-hashtag')}> {items.music}</span>
                      </span>

                    </div>
                    <div className={cx('information-btn')}>
                        {
                            followed === true ?
                            <Button
                            onClick={()=>handleUnFollow(items.user.id)}
                             className={cx('information-btn-unfollow')}>Đang follow</Button>
                            :
                          <Button className={cx('information-btn-btn')}
                          onClick={() =>handleFollow(items.user.id)}
                            outline >Follow </Button>

                        }

                    </div>
                </div>
                <div className={cx('video')} onClick={() => dispatch(handleDataDetailsVideo(items))}>
                    <VideoList items={items} />
                    
            <div className={cx('actions')}>
                <Action 
                likeCount={items.likes_count} 
                shareCount = {items.shares_count}
                commentCount= {items.comments_count}
                />
                

            </div>

                </div>
            </div>
            </div>

        </div>
    );
}
