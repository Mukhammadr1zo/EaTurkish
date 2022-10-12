import React, { useEffect, useRef, useState } from 'react';
import Loader from '../../Loader';

import { host } from '../../../constants';

import style from '../FoodUpload/FoodUpload.module.scss'

const FoodUpload = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [category, setCategory] = useState([])
  


    useEffect(() => {
        fetch(`${host}/categories`)
            .then(res => res.json())
            .then(res => setCategory(res.data))
            .catch(err => alert(err))
    }, []);

    const sendForm = async (e) => {
        e.preventDefault()

        const form = formRef.current
        const fd = new FormData()

        fd.append('category_name', form.name.value)

        const options = { method: 'POST', body: fd }


        let res = await fetch(`${host}/category`, options)
        setLoading(true)

        res = await res.json()

        setLoading(false)
        if(res.status === 201){
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
           

            <div className={style.upload__inputs}>
                <form ref={formRef} onSubmit={sendForm}>
                    
                    <label>
                        Category name
                        <input type="text" name='name' defaultValue={category?.category_name || ''} placeholder='Category name' />
                    </label>


                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    );
}

export default FoodUpload;
