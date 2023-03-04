//signin авторизация

import style from './style.module.css'

import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";

import { useNavigate } from "react-router-dom";


export function Authorization_window() {

    const navigate = useNavigate();
   
    return (
        <Formik
        initialValues={{ email: "", password: ""}}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
            <div className={style.hidden}>
                <div className={style.end_modal_avtorization}>  
                    <div className={style.modal}>
                        <Form className={style.form_avtorization} >
                                <Field className={style.form_data} name="email"  type="email" placeholder="Email"/>
                                <Field className={style.form_data} name="password" type="password" placeholder="Пароль" />
                                <button className={style.form_data} type="submit">Войти</button>
                                <span className={style.form_data} data-btn="formAutorizationClose" onClick={() => navigate("/")}>Отмена</span>
                        </Form>
                    </div>
                </div>
            </div>

      </Formik>
    )   
}

