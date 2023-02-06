import styles from './SuggestedAccounts.module.scss' ;
import classNames from 'classnames/bind';
import PropTypes, { func } from 'prop-types';

import AccountItem from './AccountItem'


const cx = classNames.bind(styles)

function SuggestedAccounts({label , data = [] , handleMore= func }  ) {
    
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>

            {
                data.map(account =>(
                    
                    <AccountItem key={account.id} data={account} />
                ))
            }
          
          

        <p onClick={()=>handleMore()}
        className={cx('more-btn')}>
             See all
            </p>



        </div>

        
    );
}
SuggestedAccounts.propTypes = {
    label : PropTypes.string.isRequired ,
    data : PropTypes.array ,
    func : PropTypes.func
}

export default SuggestedAccounts;