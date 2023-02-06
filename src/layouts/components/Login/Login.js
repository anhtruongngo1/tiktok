import { faCircleUser, faQrcode, faUser, faUserCircle, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useState } from "react";
import { IconApple, IconFace, IconGoogle, IconIns, IconTalk, IconTwice } from "~/components/Icons/Icons";
import styles from './Login.module.scss'
import Form from "./Menu/Form";
import MenuLogin from "./Menu/MenuLogin";





const cx = classNames.bind(styles);

const MENU_LOGIN = [
    {
        icon : <FontAwesomeIcon icon={faQrcode} /> ,
        title : 'Sử dụng mã QR'
    },
    {
        icon : <FontAwesomeIcon icon={faUserCircle} /> ,
        title : 'số điện thoại / Email / Tiktok ID' ,
        children : {
            title : "Đăng Nhập" ,
            enCode : 1
        }
    },
    {
        icon : <IconFace /> ,
        title : 'Tiếp tục với Facebook'
    },
    {
        icon : <IconGoogle /> ,
        title : 'Tiếp tục với Google'
    },
    {
        icon : <IconIns /> ,
        title : 'Tiếp tục với Instagram'
    },
    {
        icon :  <IconTwice />,
        title : 'Tiếp tục với Twitter'
    },
    {
        icon : <IconApple /> ,
        title : 'Tiếp tục với Apple'
    },
    {
        icon : <IconTalk /> ,
        title : 'Tiếp tục với KakaoTalk'
    }
]

const MENU_REGISTER = [ {
    icon : <FontAwesomeIcon icon={faUserCircle} /> ,
    title : ' Sử dụng số điện thoại hoặc email ',
    parent : {
        title : "Đăng ký" ,
        enCode : 2
    }
    },
    {
        icon : <IconFace /> ,
        title : 'Tiếp tục với Facebook'
    },
    {
        icon : <IconGoogle /> ,
        title : 'Tiếp tục với Google'
    },
]



function Login() {
    const [handleMenu , setHandleMenu] = useState(true)

    const handleToggleMenu = () =>{
        setHandleMenu(!handleMenu)
    }
    return (  
    <div className={cx('wrapper')} >
        <div className={cx('inner')}>
           
        </div>
        <MenuLogin  
        item={handleMenu ? MENU_LOGIN : MENU_REGISTER} 
        title={handleMenu ? 'Đăng nhập vào TikTok' : 'Đăng ký TikTok'}
        footer={handleMenu}
        handleToggleMenu={handleToggleMenu}  
        />

   
    </div>);
}

export default Login;