import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import { func } from "prop-types";
import { useState } from "react";
import { IconDown, IconTick } from "~/components/Icons/Icons";
import { Wrapper as PopperWrapper } from '~/components/Popper';
import style from '../Form.module.scss'

const cx = classNames.bind(style)


function MenuSelect({title , data = [] , valueItem = { value : '' , tick : ''} , handleItem = func}) {
    const [toggleList , setToggleList] = useState(false)

    const handleToggleList = () =>{
        setToggleList(!toggleList)
    }
    return (  
        <>
        <div 
        onClick={handleToggleList}
        className={cx('menu-select-box')}>
        { valueItem.value === '' ? title : valueItem.value}  
      <IconDown className={toggleList ? cx('menu-icon') : cx('')} />
        
        <div className={cx('menu-list')}>
            { toggleList && data.map((item , i) => (
                            <p 
                            onClick={() => handleItem(item)}
                            className={valueItem.tick === item.value ? cx('menu-list-data' , 'active') : cx('menu-list-data')}
                            key={i}

                             >
                                {item.title} 
                                {valueItem.tick === item.value ? <IconTick /> : <></>} 
                                </p>
                        ))}
        </div>
       


     </div>
        </>
 


     );
}

export default MenuSelect;