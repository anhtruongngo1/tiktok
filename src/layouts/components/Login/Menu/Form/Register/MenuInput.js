import classNames from 'classnames/bind';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { IconCheckBox } from '~/components/Icons/Icons';
import { userRegister } from '~/Services/userServices';
import style from '../Form.module.scss';
import MenuLoginForm from '../MenuLoginForm';

const cx = classNames.bind(style);

function MenuInput() {
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
            password: Yup.string()
                .required('vui lòng nhập password')
                .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/, ' chưa đủ tiêu chí'),
            regPassword: Yup.string().required('vui lòng nhập lại password').oneOf([Yup.ref("password"),null],"Password phải trùng với nhau"),
        }),
        onSubmit: (values) => {
            handleRegister(values)
        },
    });
    const [handleEmailNumber, setHandleEmailNumber] = useState(true);

    const handleModal = () => {
        setHandleEmailNumber(!handleEmailNumber);
    };
    //const checkValue

    const handleRegister = async (inputData) => {
        const res = await userRegister({
            type: 'email',
            email: inputData.email,
            password: inputData.regPassword,
        });
        console.log('check api', res);
    };

    return (
        <div className={cx('menu-input')}>
            <div className={cx('menu-input-box')}>
                <h4 className={cx('menu-input-title')}>{handleEmailNumber ? 'Email ' : 'Điện thoại'} </h4>
                <span onClick={() => handleModal()} className={cx('menu-input-label')}>
                    {handleEmailNumber ? 'Đăng ký bằng số điện thoại' : 'Email '}
                </span>
            </div>
            {handleEmailNumber ? (
                <form>
                    <input
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        type="email"
                        className={cx('menu-input-item', formik.errors.email && 'active')}
                        placeholder="Địa chỉ Email"
                    />
                    {formik.errors.email && <p className={cx('menu-input-errmess')}>{formik.errors.email}</p>}
                    <input
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        type="password"
                        className={cx('menu-input-item', formik.errors.password && 'active')}
                        placeholder="Mật khẩu"
                    />
                    {formik.errors.password && (
                        <p className={cx('menu-input-errmess')}>
                            <p>Mật khẩu của bạn phải bao gồm :</p>
                            <li>Chứa ít nhất 8 ký tự</li>
                            <li>chứa ít nhất 1 số</li>
                            <li>chứa ít nhất 1 ký tự viết thường (az)</li>
                            <li>chứa ít nhất 1 ký tự viết hoa (AZ)</li>
                            <li>chỉ chứa 0-9a-zA-Z</li>
                        </p>
                    )}
                    <input
                        id="regPassword"
                        value={formik.values.regPassword}
                        onChange={formik.handleChange}
                        type="password"
                        className={cx('menu-input-item')}
                        placeholder="Nhập lại mật khẩu"
                    />
                      {formik.errors.email && <p className={cx('menu-input-errmess')}>{formik.errors.regPassword}</p>}
                    <div className={cx('menu-input-checkbox')}>
                        <div className={cx('menu-checkbox-icon')}>
                            <IconCheckBox />
                        </div>
                        <p className={cx('menu-checkbox-label')}>
                            Nhận nội dung thịnh hành, bản tin, khuyến mại, đề xuất và thông tin cập nhật tài khoản được
                            gửi đến email của bạn
                        </p>
                    </div>
                </form>
            ) : (
                <MenuLoginForm />
            )}

            <div className={cx('menu-button')}>
                <button type="submit" onClick={formik.handleSubmit} className={cx('menu-button')}>
                    Tiếp
                </button>
            </div>
        </div>
    );
}

export default MenuInput;
