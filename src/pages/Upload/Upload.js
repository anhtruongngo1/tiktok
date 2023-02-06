import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

import upload from '~/assets/images/upload.svg';
import setting from '~/assets/images/settting.svg';
import Button from '~/components/Button';
import { useState } from 'react';
import { IconWarn } from '~/components/Icons/Icons';
import demoVideo from "~/assets/images/image.png"
import { createVideo } from '~/Services/userServices';

const cx = classNames.bind(styles);

function Upload() {

    const [onSwitch , setSwitch] = useState(false) ;
    const [videoUpload , setVideo] = useState(false)
    const [videoData , setVideoData] = useState('')
    const [fileVideo , setFileVideo] = useState()
    const [music , setMusic] = useState('')
    const [description , setDescription] = useState('')


    const handleChecked = () =>{
        var checkBox = document.getElementById("myCheck");
        if(checkBox.checked){
            setSwitch(true)
        }
        else{
            setSwitch(false)
        }
     
    }
    const handleChangeVideo = (e) =>{
        let data = e.target.files ;
        let file = data[0]
      
        setFileVideo(file)
        if(file){
            setVideo(true)
            let objectUrl = URL.createObjectURL(file);
            setVideoData(objectUrl)

        }
    }
    const handleCreateVideo = async ()=>{
        console.log('123344',fileVideo);
       const res =   await createVideo({
                description : description ,
                music : music ,
                upload_file : fileVideo ,
                thumbnail_time : 5 ,
                viewable : 'public' 

            }
        )
    }
    console.log('chekk' , fileVideo);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('box')}>
                    <h3 className={cx('box-title')}>Tải video lên</h3>
                    <p className={cx('box-detais')}>Đăng video vào tài khoản của bạn</p>
                    <div className={cx('file')}>
                        <input 
                        type="file"
                        onChange={(e) => handleChangeVideo(e)}
                         id="previewFile" hidden />
                        <label htmlFor="previewFile" className={cx('file-box')}>
                            {
                                videoUpload ?
                            <div className={cx('file-box-video')}>
                                <img src={demoVideo} />

                            </div>
                            :
                           <div className={cx('file-box')}>
                            <div className={cx('image')}>
                                <img src={upload} />
                            </div>
                            <h4> Chọn video để tải lên</h4>
                            <p>Hoặc kéo và thả tập tin</p>
                            <p>MP4 hoặc WebM</p>
                            <p>Độ phân giải 720x1280 trở lên</p>
                            <p>Tối đa 30 phút</p>
                            <p>Nhỏ hơn 2 GB</p>
                            <Button primary>Chọn tập tin</Button>

                            </div> 

                            }
                        </label>
                    </div>
                </div>
                <div className={cx('infomation')}>
                    <div className={cx('setting')}>
                        <div className={cx('setting-icon')}>
                            <img className={cx('setting-img')} src={setting} />
                        </div>
                        <div className={cx('setting-box')}>
                            <h4>Chia sẽ và chĩnh sửa video</h4>
                            <p className={cx('setting-des')}>
                                Bạn có thể nhanh chóng phân chia video thành nhiều phần, loại bỏ các phần thừa và chuyển
                                video ngang thành video dọc
                            </p>
                        </div>
                        <div className={cx('setting-btn')}>
                            <Button primary className={cx('setting-btn-btn')}>
                                {' '}
                                Chĩnh sửa
                            </Button>
                        </div>
                    </div>
                    <div className={cx('note')}>
                        <h4>Chú thích</h4>
                        <p>0/15</p>
                    </div>
                    <div className={cx('note-input')}>
                        <input className={cx('note-input-text')} type="text" />
                        <div className={cx('note-input-note')}>
                            <p>@</p>
                            <p>#</p>
                        </div>
                    </div>
                    <div className={cx('note')}>
                        <h4>Âm nhạc</h4>
                        <p>0/15</p>
                    </div>
                    <div className={cx('note-input')}>
                        <input className={cx('note-input-text')} type="text" />
                        <div className={cx('note-input-note')}>
                            <p>♫</p>
                          
                        </div>
                    </div>
                    <div className={cx('note')}>
                        <h4> Ảnh bìa</h4>
                    </div>
                    <div className={cx('note-input')}>
                        <textarea disabled value="" className={cx('note-input-img')} type="text" />
                    </div>
                    <div className={cx('note')}>
                        <h4>Ai có thể xem video này</h4>
                    </div>
                    <div className={cx('note-input')}>
                        <select className={cx('note-input-select')} name="cars" id="cars">
                            <option className={cx('note-input-option')} value="volvo">
                                Công khai
                            </option>
                            <option className={cx('note-input-option')} value="saab">
                                Bạn bè
                            </option>
                            <option className={cx('note-input-option')} value="mercedes">
                                Riêng tư
                            </option>
                        </select>
                    </div>
                    <div className={cx('note')}>
                        <h4>Cho phép người dùng:</h4>
                    </div>
                    <div className={cx('note-input')}>
                        <div className={cx('note-input-checkbox')}>
                            <input className={cx('input-checkbox')} type="checkbox" defaultChecked={true} />
                            <label>Bình luận</label>
                        </div>
                        <div className={cx('note-input-checkbox')}>
                            <input className={cx('input-checkbox')} type="checkbox" defaultChecked={true} />
                            <label>Duet</label>
                        </div>
                        <div className={cx('note-input-checkbox')}>
                            <input className={cx('input-checkbox')} type="checkbox" defaultChecked={true} />
                            <label>Stitch</label>
                        </div>
                    </div>
                    <div className={cx('note')}>
                        <h4>Chạy quy trình kiểm tra bản quyền</h4>
                        <div className={cx('switch')}>
                            <input type="checkbox" id="myCheck"
                            onClick={() =>handleChecked()}

                             className={cx('switch-toggle')} />
                        </div>
                    </div>

                    {
                        onSwitch ? 
                   
                    <div className={cx('details-note')}>
                        <IconWarn />
                        <p>Kiểm tra bản quyền chỉ bắt đầu sau khi bạn tải video của mình lên.</p>

                    </div>
                     :
                        <div className={cx('details')}>
                        <p>
                            Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản quyền hay không. Nếu
                            chúng tôi phát hiện có vi phạm, bạn có thể chỉnh sửa video trước khi đăng.Tìm hiểu thêm
                        </p>
                    </div>
                    }

                    <div className={cx('button')}>
                        <button
                    
                         className={cx('button-cancle')}>Hủy bỏ</button>
                       <Button
                           onClick={()=> handleCreateVideo()}
                       primary className={cx('button-save')} >Đăng</Button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
