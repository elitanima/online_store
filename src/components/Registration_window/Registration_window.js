
//Singup регистрация пользователя

import style from './style.module.css';

import { useNavigate } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";


export function Registration_window() {

    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ email: "", password: "", group: ""}}
            onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
        
            }}
>
            <div className={style.hidden}>
                <div className={style.end_modal_registration}>  
                    <div className={style.modal}>
                        <Form className={style.form_avtorization} >
                                <Field className={style.form_data} name="email"  type="email" placeholder="Email"/>
                                <Field className={style.form_data} name="password" type="password" placeholder="Придумайте пароль" />
                                <Field className={style.form_data} name="group" type="text" placeholder="Группа" />
                                <button className={style.form_data} type="submit">Регистрация</button>
                                <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate(-1)}>Отмена</span>
                        </Form>
                    </div>
                </div>
            </div>

        </Formik>
    )   
}

