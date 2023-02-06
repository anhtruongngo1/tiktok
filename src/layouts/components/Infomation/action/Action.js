import { faComment, faCommentDots, faHeart, faShare, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { IconHear, } from "~/components/Icons/Icons";
import styles from "./Action.module.scss"


const cx = classNames.bind(styles)
function Action({likeCount ,shareCount , commentCount}) {

    const [Icon , setIcon] = useState(false)


    const handleIcon = () =>{
        setIcon(!Icon)
    }
    return ( 
        <div className={cx('actions')}>
            <button  className={cx('button')}  onClick={()=> handleIcon()}>
                <span className={cx('icon')}>
                    
                    {Icon ?
                    <IconHear /> :
                    <FontAwesomeIcon icon={faHeart}/>
                    
                }
                   
                </span>
                <strong  className={cx('strong')}>
                    {likeCount}
                </strong>
            </button>
            <button  className={cx('button')}  onClick={()=> handleIcon()}>
                <span className={cx('icon')}>
                    

                <FontAwesomeIcon icon={faCommentDots} />
                    
        
                   
                </span>
                <strong  className={cx('strong')}>
                    {commentCount}
                </strong>
            </button>
            <button  className={cx('button')}  onClick={()=> handleIcon()}>
                <span className={cx('icon')}>
                    
         
                    <FontAwesomeIcon icon={faShare}/>
                    
         
                   
                </span>
                <strong  className={cx('strong')}>
                    {shareCount}
                </strong>
            </button>

        </div>
     );
}

export default Action;