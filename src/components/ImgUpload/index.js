import { useState, useRef } from 'react';
import { Button } from 'antd';
import { MdCloudUpload, MdOutlineClose } from 'react-icons/md'
import ImgPlaceholder from '../../assets/images/img_placeholder.png';

const ImgUpload = ({ image, onChange }) => {
    const [checked, setChecked] = useState(false);
    const image_file_input = useRef(null);

    const _handleImageChange = (e) => {
        e.preventDefault();
        try {
            let reader = new FileReader();
            let file = e.target.files[0];

            reader.onloadend = () => {
                onChange({
                    type: 'file', url: reader.result, file: file
                })
            }

            reader.readAsDataURL(file)
        }
        catch (err) {
            console.log('handle image error', err);
        }
    }

    return (
        <div className={'flex flex-col justify-center items-center relative pl-6'} onClick={() => setChecked(!checked)}>
            <img className=' w-[220px] h-[220px] max-w-[100%] bg-gray-300' style={{ objectFit: 'contain' }} src={image == null ? ImgPlaceholder : image.url} />
            <div
                className='flex flex-row justify-center items-center mt-2 cursor-pointer text-14 underline text-blue-500'
                onClick={() => {
                    image_file_input.current?.click();
                }}
            >
                <MdCloudUpload />
                <span className={"pl-2"}>Upload</span>
            </div>
            {
                image != null &&
                <Button
                    shape='circle'
                    type='primary'
                    icon={<MdOutlineClose size={20} color='#fff'  />}
                    className='flex flex-col justify-center items-center'
                    style={{ position: 'absolute', right: -10, top: -10, backgroundColor: '#44e' }}
                    onClick={() => {
                        onChange(null);
                        image_file_input.current.value = '';
                    }}
                />
            }
            <input
                hidden={true}
                ref={image_file_input}
                type="file"
                accept="image/*"
                onChange={_handleImageChange}
            />
        </div>
    )
}

export default ImgUpload;