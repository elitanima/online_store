
//Signup регистрация пользователя

import style from './style.module.css';

import { useNavigate } from "react-router-dom";

import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { signup } from "../../api_user/api_user"


export function Registration_window() {

    const navigate = useNavigate();

    const [valid, setValid] = useState(false);

    // После регистрации отрываем страницу авторизации
    const goToSignIn = () => {
        return navigate("/signin")
    }
    // --END--

     // Анимация валидации
     function validAnim() {
        setValid(!valid)
    }
    function animaForm() {
        setTimeout(validAnim, 500);
    }
    // --END--

    return (
        <Formik
            initialValues={{ email: "", password: "", group: ""}}
            onSubmit={async (values) => {
                // проверка на пустоту формы
                if (values.email && values.password && values.group){
                    await signup(values);
                    goToSignIn();
                } else {
                    animaForm()
                }
            }}>
            <div className={style.hidden}>
                <div className={style.end_modal_registration}>  
                    <div className={style.modal}>
                        <Form className={style.form_avtorization} >
                                <Field className={`${style.form_data} ${valid ? style.error : ''}`} name="email"  type="email" placeholder="Email"/>
                                <Field className={`${style.form_data} ${valid ? style.error : ''}`} name="password" type="password" placeholder="Придумайте пароль" />
                                <Field className={`${style.form_data} ${valid ? style.error : ''}`} name="group" type="text" placeholder="Группа" />
                                <button className={style.form_data} type="submit" onClick={() =>setValid(!valid)}>Регистрация</button>
                                <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate(-1)}>Отмена</span>
                        </Form>
                    </div>
                </div>
            </div>

        </Formik>
    )   
}

