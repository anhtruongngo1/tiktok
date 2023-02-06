import styles from './AccountPreview.module.scss' ;
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {  useNavigate } from 'react-router-dom';


import Button from '~/components/Button';
import Image from '~/components/Image';


const cx = classNames.bind(styles)

function AccountPreview({data}) {
    const Navigate = useNavigate()

    const handleLink = () =>{
        Navigate(`/information/@${data.nickname}`)
    }
    return ( 
        <div className={cx('wrapper')}>   
        <div className={cx('header')}>
        <Image
        onClick = { () => handleLink()}
         className={cx('avatar')}
        src={data.avatar}
          alt='' />
          {
            data && data.is_followed ?
            <Button outline className={cx('follow-btn')}  >Đang Follow </Button>
            :
            <Button primary className={cx('follow-btn')}  > follow </Button>


          }
            
        </div>
        <div className={cx('body')}>

        </div>
        <p   onClick = { () => handleLink()}
        className={cx('nickname')}>
                    <strong>  {data.nickname}</strong>
                    {
                        data.tick &&
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>

                    }
                     </p>
                <p   onClick = { () => handleLink()}
                className={cx('name')}>
                    {data.first_name + data.last_name} 
                </p>
                <p className={(cx('analytics'))}>
                    <strong className={(cx('value'))}> {data.followers_count} </strong>
                    <span className={(cx('label'))}>Followers </span>
                    <strong className={(cx('value'))}>{data.likes_count} </strong>
                    <span className={(cx('label'))}>Likes </span>
                    

                </p>
             </div>
     );
}

export default AccountPreview;