//signin авторизация

import style from './style.module.css'

import React from "react";

import { Formik, Field, Form } from "formik";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { signin } from "../../api_user/api_user"


export function Authorization_window() {

    const navigate = useNavigate();

    const [valid, setValid] = useState(false);

     // После авторизации отрываем главную страницу
    const goToMain = () => {
        return navigate("/main")
    }

    // Анимация валидации
    function validAnim() {
        setValid(!valid)
    }
    function animaForm() {
        setTimeout(validAnim, 100);
    }
    // --END--
   
    return (
        <Formik
        initialValues={{ email: "", password: ""}}
        //Валидация формы авторизации и вывод ошибок сервера
        onSubmit={async (values) => {
            try {
                if (values.email && values.password){
                    await signin(values);
                    goToMain();
                    
                } else {
                    animaForm();
                }
            } catch (error) {
                //Сделать вывод ошибок видимым пользователю!!!
                console.log(error);
            }
           
            
        }}
      >
            <div className={style.hidden}>
                <div className={style.end_modal_avtorization}>  
                    <div className={style.modal}>
                        <Form className={style.form_avtorization} >
                                <Field className={`${style.form_data} ${valid ? style.error : ''}`} name="email"  type="email" placeholder="Email"/>
                                <Field className={`${style.form_data} ${valid ? style.error : ''}`} name="password" type="password" placeholder="Пароль" />
                                <button className={style.form_data} type="submit" onClick={() =>setValid(!valid)}>Войти</button>
                                <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate("/")}>Отмена</span>
                        </Form>
                    </div>
                </div>
            </div>

      </Formik>
    )   
}

