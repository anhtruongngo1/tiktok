import classNames from 'classnames/bind';
import { func } from 'prop-types';
import { useState } from 'react';
import { IconPrev } from '~/components/Icons/Icons';

import style from '../Form.module.scss';
import MenuInput from './MenuInput';
import MenuSelect from './MenuSelect';

const cx = classNames.bind(style);

const LIST_MOTH = [
    {
        title: 'Tháng Một',
        value: 1,
    },
    {
        title: 'Tháng Hai',
        value: 2,
    },
    {
        title: 'Tháng Ba',
        value: 3,
    },
    {
        title: 'Tháng Bốn',
        value: 4,
    },
    {
        title: 'Tháng Năm',
        value: 5,
    },
    {
        title: 'Tháng Sáu',
        value: 6,
    },
    {
        title: 'Tháng Bảy',
        value: 7,
    },
    {
        title: 'Tháng Tám',
        value: 8,
    },
    {
        title: 'Tháng Chín',
        value: 9,
    },
    {
        title: 'Tháng Mười',
        value: 10,
    },
    {
        title: 'Tháng 11',
        value: 11,
    },
    {
        title: 'Tháng 12',
        value: 12,
    },
];
const LIST_YEAR = [];
const LIST_DAY = [];

function Form({ handleChildren = func }) {
    const [valueItemMonth, setValueItemMonth] = useState({
        value: '',
        tick: '',
    });
    const [valueItemDay, setvalueItemDay] = useState({
        value: '',
        tick: '',
    });
    const [valueItemYear, setvalueItemYear] = useState({
        value: '',
        tick: '',
    });
    const [formData, setFormData] = useState({
        day: '',
        month: '',
        year: '',
    });
    console.log('checkfr', formData);

    const handleItem = (item) => {
        setValueItemMonth({
            value: item.title,
            tick: item.value,
        });
        setFormData({
            ...formData,
            month: item.value,
        });
    };
    const handleItem1 = (item) => {
        setvalueItemDay({
            value: item.title,
            tick: item.value,
        });
        setFormData({
            ...formData,
            day: item.value,
        });
    };
    const handleItem2 = (item) => {
        setvalueItemYear({
            value: item.title,
            tick: item.value,
        });
        setFormData({
            ...formData,
            year: item.value,
        });
    };
    const renderDay = () => {
        if (valueItemMonth.value !== '') {
            LIST_DAY.splice(0, LIST_DAY.length);

            const day = new Date(valueItemYear.value, valueItemMonth.tick, 0).getDate();
            for (var i = 1; i <= day; i++) {
                LIST_DAY.push({
                    title: i,
                    value: i,
                });
            }
        }
        if (valueItemMonth.value === '') {
            for (var i = 1; i <= 31; i++) {
                LIST_DAY.push({
                    title: i,
                    value: i,
                });
            }
        }
    };
    const renderYear = () => {
        const year = new Date().getFullYear();
        for (var i = 2000; i <= year; i++) {
            LIST_YEAR.push({
                title: i,
                value: i,
            });
        }
        LIST_YEAR.reverse();
    };

    return (
        <div className={cx('menu-form')}>
            <div className={cx('menu-form-prev')}>
                <span onClick={() => handleChildren(false)}>
                    <IconPrev className={cx('menu-form-prev-icon')} />
                </span>
            </div>
            <h1 className={cx('menu-header')}>Đăng ký</h1>
            <div className={cx('menu-box')}>
                <label className={cx('menu-label')}>Ngày sinh của bạn là ngày nào?</label>
                <div className={cx('menu-select')}>
                    <div>
                        {' '}
                        <MenuSelect
                            title={'Tháng'}
                            data={LIST_MOTH}
                            valueItem={valueItemMonth}
                            handleItem={handleItem}
                        />
                    </div>
                    <div>
                        {' '}
                        <MenuSelect title={'Ngày'} data={LIST_DAY} valueItem={valueItemDay} handleItem={handleItem1} />
                        {renderDay()}
                    </div>
                    <div>
                        {' '}
                        <MenuSelect title={'Năm'} data={LIST_YEAR} valueItem={valueItemYear} handleItem={handleItem2} />
                        {renderYear()}
                    </div>
                </div>
                <span className={cx('menu-note')}> Ngày sinh của bạn sẽ không được hiển thị công khai</span>
            </div>
            <MenuInput formData={formData} />
            <div className={cx('menu-rules')}>
                <p className={cx('menu-rules-text')}>
                    Bằng cách tiếp tục, bạn đồng ý với Điều khoản Sử dụng của TikTok và xác nhận rằng bạn đã đọc hiểu
                    Chính sách Quyền riêng tư của TikTok
                </p>
            </div>
        </div>
    );
}

export default Form;
