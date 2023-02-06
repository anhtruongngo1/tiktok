import style from '../Form.module.scss';
import classNames from 'classnames/bind';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import MenuLoginForm from '../MenuLoginForm';
import { IconPrev } from '~/components/Icons/Icons';
import MenuInput from '../Register/MenuInput';
import { useState } from 'react';
import { userLogin } from '~/Services/userServices';
import { useDispatch } from 'react-redux';
import { handleDataUser, toggleModal } from '~/redux/userSlice';

const cx = classNames.bind(style);

function DataLogin({ handleChildren }) {
    const dispatch = useDispatch()
    const [handleEmailNumber, setHandleEmailNumber] = useState(true);
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            regPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .required('vui lòng nhập email')
                .matches(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)| (".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    'Vui lòng nhập đúng định dạng email',
                ),
            password: Yup.string().required('vui lòng nhập password'),
        }),
        onSubmit: (values) => {
            handleLogin(values)
        },
    });

    const handleModal = () => {
        setHandleEmailNumber(!handleEmailNumber);
    };
    const handleLogin = async (data) =>{
        const res = await userLogin({
            email : data.email ,
            password : data.password
        })
        if (res) {
         
                dispatch(toggleModal(false))     
                dispatch(handleDataUser(res)) 
                console.log("check data" , res);   
            
        }
    }
    return (
        <div className={cx('menu-form')}>
            <div className={cx('menu-form-prev')}>
                <span onClick={() => handleChildren(false)}>
                    <IconPrev className={cx('menu-form-prev-icon')} />
                </span>
            </div>
            <h1 className={cx('menu-header')}>Đăng Nhập</h1>
            <div className={cx('menu-input')}>
                <div className={cx('menu-input-box')}>
                    <h4 className={cx('menu-input-title')}>{handleEmailNumber ? 'Email ' : 'Điện thoại'} </h4>
                    <span onClick={() => handleModal()} className={cx('menu-input-label')}>
                        {handleEmailNumber ? 'Đăng ký bằng số điện thoại' : 'Email '}
                    </span>
                </div>
                {handleEmailNumber ? (
                    <div>
                        <input
                            name="email"
                            value={formik.email}
                            onChange={formik.handleChange}
                            type="email"
                            className={cx('menu-input-item' , formik.errors.email && 'active')}
                            placeholder="Địa chỉ Email"
                        />
                          {formik.errors.email && <p className={cx('menu-input-errmess')}>{formik.errors.email}</p>}
                        <input
                            name='password'
                            value={formik.password}
                            onChange={formik.handleChange}
                            type="password"
                            className={cx('menu-input-item' , formik.errors.password && 'active')}
                            placeholder="Mật khẩu"
                        />
                         {formik.errors.password && <p className={cx('menu-input-errmess')}>{formik.errors.password}</p>}
                    </div>
                ) : (
                    <MenuLoginForm />
                )}

                <div>
                    <button 
                    type='submit'
                    onClick={formik.handleSubmit}
                    className={cx('menu-button')}>Tiếp</button>
                </div>
            </div>
        </div>
    );
}

export default DataLogin;
