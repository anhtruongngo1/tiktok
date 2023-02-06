import{ Children, useEffect, useState } from 'react' ;
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from "@fortawesome/free-solid-svg-icons";
import { bool, func } from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleModal } from '~/redux/userSlice';
import Form from './Form';
import FormParent from './Form/FormParent';





const cx = classNames.bind(styles);

 function MenuLogin({item = [] , title , footer = bool , handleToggleMenu=func , }) {

    const dispatch = useDispatch()
  const [children , setChildren] = useState(false)
  const [handleModal , setHandleMode] = useState('')
   useEffect(()=>{
    setChildren(false)

   },[item])
    const toggleModalLogin = () =>{
      dispatch(toggleModal(false))
    }
    const handleChildren = (isParent , parent) =>{
      if(isParent || parent){
        setChildren(true)
        if(parent){
          setChildren(true)
          setHandleMode('REGISTER')
        }
        if(isParent){
          setChildren(true)
          setHandleMode('LOGIN')
        }
 
      }
      else {
        setChildren(false)
      }
      
    }

    const renderItems = () => {

          return (
            <> 
            <div className={cx('menu-list')}>
        <div className={cx('menu-body')}>

      <h1 className={cx('menu-header')}>{title}</h1>
      {item.map((item , i) => {
                    const isParent = !!item.children;
                    const parent = !!item.parent
        return (
         <div 
         onClick={() => handleChildren(isParent , parent)}
         key={i}  className={cx('menu-item')}>    
         <span className={cx('menu-icon')}> {item.icon} </span> 
         {item.title}
     </div>
        )

    })}
        </div>


      </div>

            </>
       
          );
     
  };


  return (
    <>
    <div className={cx('menu')}>

      {children ? <FormParent handleModal={handleModal}  handleChildren={handleChildren}/> : renderItems() }
     
      
     
      <div className={cx('menu-footer')}>
       { footer ? <>
        Bạn không có tài khoản ? <div
        onClick={handleToggleMenu}
         className={cx('menu-toggle')}>Đăng kí</div>
       </> :
       <>
         Bạn đã có Tài khoản ? <div
        onClick={handleToggleMenu}
         className={cx('menu-toggle')}>Đăng Nhập</div>
       </>
       }

      </div>

        
        <div
        onClick={toggleModalLogin}
         className={cx('close-menu')}>
        <FontAwesomeIcon icon={faXmark} />

        </div>
        </div>
    </>
  )
}
export default MenuLogin
