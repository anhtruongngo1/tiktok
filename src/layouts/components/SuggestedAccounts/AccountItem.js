import styles from './SuggestedAccounts.module.scss' ;
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';
import Image from '~/components/Image';


const cx = classNames.bind(styles)

function AccountItem({data}) {

    const renderPreview = (props) =>{
        return (
            <div  tabIndex="-1" {...props}>
                <PopperWrapper >
                    <AccountPreview data={data} />
              

                </PopperWrapper>

            </div>
        )
    }
    return ( 
        <div>
        <Tippy 
        interactive
        delay={[100,0]}
        render={renderPreview}
        placement='bottom'
        offset={[-20, 0]}
        >
        <div className={cx('account-item')}>
            <Image 
            className={cx('avartar')}
            src={data.avatar}
            alt ={data.first_name}
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>  {data.nickname}</strong>
                    {
                        data.tick && 
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                    }
                     </p>
                <p className={cx('name')}>
                   {data.first_name + data.last_name}
                </p>

            </div>
        </div>

        </Tippy>

        </div>
     );
}


export default AccountItem;