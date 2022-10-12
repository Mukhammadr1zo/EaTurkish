import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import imgIcon from '../../../assets/file.png'
import { host } from '../../../constants';
import Loader from '../../Loader';

import style from './FoodUpload.module.scss'

const FoodUpload = () => {
    const { food_id } = useParams()
    const formRef = useRef()
    const imgRef = useRef()
    const [food, setFood] = useState([])
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [img, setImage] = useState(food?.food_img || false)

    useEffect(() => {
        if (food_id) {
            fetch(`${host}/food/${food_id}`)
                .then(res => res.json())
                .then(res => setFood(res.data[0]))
                .catch(err => alert(err))
        }
    }, [food_id]);

    useEffect(() => {
        fetch(`${host}/categories`)
            .then(res => res.json())
            .then(res => setCategories(res.data))
            .catch(err => alert(err))
    }, []);

    const sendForm = async (e) => {
        e.preventDefault()

        const form = formRef.current
        const fd = new FormData()

        fd.append('img', imgRef.current.files[0])
        fd.append('food_name', form.name.value)
        fd.append('food_price', form.price.value)
        fd.append('food_category', form.category.value)

        const options = { method: 'POST', body: fd }

        setLoading(true)

        let res = await fetch(`${host}/food`, options)
        res = await res.json()

        setLoading(false)
        if(res.status === 201){
            form.price.value = ''
            form.name.value = ''
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
                    img || food?.food_img ? <img src={img ? URL.createObjectURL(img) : food?.food_img} alt="food_img" /> : <img src={imgIcon} alt="icon" />
                }
                {
                    !img && !food?.food_img ? <span>Upload profile image here <br /> (JPG, PNG)</span> : <></>
                }
                <label>
                    <input type="file" ref={imgRef} onChange={(e) => setImage(e.target.files[0])} accept='image/jpg, image/png' />
                    Choose file
                </label>
            </div>

            <div className={style.upload__inputs}>
                <form ref={formRef} onSubmit={sendForm}>
                    <label>
                        Category
                        <select defaultValue={categories[0]?.category_id} name='category'>
                            {
                                categories?.length > 0 && categories.map(ctg => <option selected={ctg.category_id === food?.food_category} value={ctg.category_id} key={ctg.category_id}>{ctg.category_name}</option>)
                            }
                        </select>
                    </label>

                    <label>
                        Food name
                        <input type="text" name='name' defaultValue={food?.food_name || ''} placeholder='Food name' />
                    </label>

                    <label>
                        Price
                        <input type="number" name='price' defaultValue={food?.food_price || ''} placeholder='$' />
                    </label>

                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default FoodUpload;
