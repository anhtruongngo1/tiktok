
import classNames from "classnames/bind";
import { useState } from "react";
import { IconDown } from "~/components/Icons/Icons";
import style from './Form.module.scss'

const cx = classNames.bind(style)


function MenuLoginForm() {
    const [numberLogin , setNumberLogin] = useState('')
    const [capcha , setCapcha] = useState('')
    return (  
    <>
         <div>
          <div className={cx('menu-number-box')}>
            <div className={cx('menu-number-local')}>VN +84 <IconDown /></div>
            <span  className={cx('menu-number-border')}>

            </span>
          <input
                value={numberLogin}
                onChange={(e)=>setNumberLogin(e.target.value)}
                 type="text" 
                 className={cx('menu-number-item')}  
                 placeholder="Nhập số điện thoại"/>  

          </div>
          <div className={cx('menu-number-box')}>
          <input
                value={numberLogin}
                onChange={(e)=>setNumberLogin(e.target.value)}
                 type="text" 
                 className={cx('menu-number-item')}  
                 placeholder="Nhập số điện thoại"/> 
            <div className={cx('menu-number-capcha')}>Gửi mã</div>
          

          </div>

            </div>

    </>);
}

export default MenuLoginForm;