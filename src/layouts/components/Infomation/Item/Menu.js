import { useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import RenderItem from '~/layouts/components/Infomation/Item/RenderItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { func } from 'prop-types';
function Menu({ data = [], handlePage = func }) {
    const ref = useRef();

    const handlescroll = () => {
       if(window.scrollY + window.screen.height >= ref.current.offsetHeight){
        handlePage()
       }

     
    };
    
    useEffect(() => {
        
        window.addEventListener('scroll', handlescroll, { passive: true });
    }, [data]);
    

    return (
        <div  ref={ref}>
            {data.map((item) => (
                <RenderItem items={item} key={item.id} />
            ))}
        </div>
    );
}

export default Menu;
