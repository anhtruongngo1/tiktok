import classNames from "classnames/bind";

import Sidebar from "../components/Sidebar";
import DetailUser from "./box/DetailUser";
import styles from "./LayoutInfor.module.scss"


const cx = classNames.bind(styles)

function LayoutInfor() {
    return (
    <div className={cx('wrapper')}>
        <div className={cx('container')}>
             {/* <Sidebar classe="layout" /> */}
                <div className={cx('content')}>
                    <DetailUser />                                     
             </div>
            </div>
    </div>  
    );
}

export default LayoutInfor;