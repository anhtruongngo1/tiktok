import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoList.module.scss';

import video from '~/assets/video/video.mp4';
import thumb from '~/assets/video/thumb.jpg';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalVideo } from '~/redux/userSlice';
import LayoutDetailVideo from '~/layouts/LayoutDetailVideo/LayoutDetailVideo';

const cx = classNames.bind(styles);

export default function VideoList(items=[]) {

  const dispatch = useDispatch();
  const vidRef = useRef(null);
     useEffect(() => {
         ready();
     }, [items]);
    const ready = () => {
      if('IntersectionObserver' in window){
        var lazyImg = document.querySelectorAll('img[lazy-src]')
        var lazyVideo = document.querySelectorAll('video')
        //console.log('checkimg', lazyImg);
        let observer= new IntersectionObserver((entries) =>{
          entries.forEach(entry =>{
           if(entry.isIntersecting){
            load(entry.target)
           // observer.observe(entry.target)
           }
         

          })
      },{
        rootMargin : "-300px"  
    });
    let observerVideo= new IntersectionObserver((entries) =>{
      entries.forEach(entry =>{
       if(entry.isIntersecting){
       handlePlay(entry.target)
       }
       else{
        handlePause(entry.target)
       }
     

      })
  },{
    rootMargin : "-200px"  
});

    
      lazyImg.forEach(img =>{
        observer.observe(img)
    })
    lazyVideo.forEach(video =>{
      observerVideo.observe(video)
    })
      }
    };
    const load = (img) => {
      const url = img.getAttribute('lazy-src')
      //  img.setAttribute('src' , "#");
       // img.styles.opacity= 0 ;
       img.classList.add(cx('active'))

  
       
        
  }
  const handlePlay = (video) =>{
   // video.current.play()
   const element = document.querySelector('video-video')
      video.setAttribute("autoPlay" ,"true") ;
      video.play()
  
  }
  const handlePause = (video) =>{
    // video.current.play()
    const element = document.querySelector('video-video')
      // video.setAttribute("autoPlay" ,"false") ;
       video.pause()
       video.removeAttribute("autoPlay")
       video.currentTime = 0 

       
   
   }



   const handleClose = () => {
    dispatch(toggleModalVideo(true));
};



    return (
        <div className={cx('wrapper')}>
            <div onClick={()=>handleClose()}
             className={cx('video')}>
                <video ref={vidRef}
                 className={cx('video-video')} controls loop muted poster={items.items.thumb_url}  >
                    <source src={items.items.file_url} type="video/mp4" />
                </video>
                {/* <div className={cx('video-thumb')}>
                    <img id='thumb' lazy-src=""  src={thumb} className={cx('video-thumb-img' )} />
                </div> */}
            </div>
            <div className={cx('video-btn')}>
              
            </div>
        </div>
    );
}
