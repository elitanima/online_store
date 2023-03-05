//signin авторизация

import style from './style.module.css'

import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

import { signin } from "../../api_user/api_user"


export function Authorization_window() {

    const navigate = useNavigate();

    const [viewGrid, setViewGrid] = useState(false);

     // После авторизации отрываем главную страницу
     const goToMain = () => {
        return navigate("/main")
    }

    
   
    return (
        <Formik
        initialValues={{ email: "", password: ""}}
        onSubmit={async (values) => {
            
            if (values.email && values.password){
                signin(values);
                goToMain();
            } else {
                console.log('Ошибка');
            }
            
        }}
      >
            <div className={style.hidden}>
                <div className={style.end_modal_avtorization}>  
                    <div className={style.modal}>
                        <Form className={style.form_avtorization} >
                                <Field className={`${style.form_data} ${viewGrid ? style.error : ''}`} name="email"  type="email" placeholder="Email"/>
                                <Field className={`${style.form_data} ${viewGrid ? style.error : ''}`} name="password" type="password" placeholder="Пароль" />
                                <button className={style.form_data} type="submit" onClick={() =>setViewGrid(!viewGrid)}>Войти</button>
                                <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate("/")}>Отмена</span>
                        </Form>
                    </div>
                </div>
            </div>

      </Formik>
    )   
}

