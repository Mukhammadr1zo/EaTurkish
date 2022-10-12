import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import imgIcon from '../../../assets/file.png'
import { host } from '../../../constants';
import Loader from '../../Loader';

import style from './NewsUpload.module.scss'

const NewsUpload = () => {
    const { news_id } = useParams()
    const imgRef = useRef()
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [news, setNews] = useState([])
    const [img, setImage] = useState(news?.news_img || false)

    useEffect(() => {
        if (news_id) {
            fetch(`${host}/news/${news_id}`)
                .then(res => res.json())
                .then(res => setNews(res.data[0]))
                .catch(err => alert(err))
        }
    }, [news_id]);

    const sendForm = async (e) => {
        e.preventDefault()

        const form = formRef.current
        const fd = new FormData()

        fd.append('img', imgRef.current.files[0])
        fd.append('news_title', form.title.value)
        fd.append('news_desc', form.desc.value)

        const options = { method: 'POST', body: fd }

        setLoading(true)

        let res = await fetch(`${host}/news`, options)
        res = await res.json()

        setLoading(false)
        if(res.status === 201){
            form.title.value = ''
            form.desc.value = ''
        } else {
            alert(res.message || res.error)
        }
    }

    if(loading) {
        return <Loader />
    }

    return (
        <div className={style.upload}>
            <div className={style.upload__file}>
                {
                    img || news.news_img ? <img src={img ? URL.createObjectURL(img) : news?.news_img} alt="news_img" /> : <img src={imgIcon} alt="icon" />
                }
                {
                    !img && !news?.news_img ? <span>Upload profile image here <br /> (JPG, PNG)</span> : <></>
                }
                <label>
                    <input type="file" ref={imgRef} onChange={(e) => setImage(e.target.files[0])} accept='image/jpg, image/png' />
                    Choose file
                </label>
            </div>

            <div className={style.upload__inputs}>
                <form ref={formRef} onSubmit={sendForm}>
                    <label>
                        Title
                        <input type="text" name='title' defaultValue={news?.news_title || ''} placeholder='Title' />
                    </label>

                    <label>
                        Description
                        <textarea name='desc' defaultValue={news?.news_desc || ''} placeholder='Description' />
                    </label>

                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default NewsUpload;
