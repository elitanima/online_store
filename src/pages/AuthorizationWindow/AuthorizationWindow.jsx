//signin авторизация

import style from './style.module.css'

import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { signin } from "../../api/user"

const SignInSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Хотя бы больше 1 символа!')
      .max(10, 'Не больше 10 символов!')
      .required('Введите пароль'),
    email: Yup.string().email('Неверный адрес').required('Введите почту'),
  });

export function AuthorizationWindow() {

    const navigate = useNavigate();

    return (
        <Formik
        initialValues={{ email: "", password: ""}}
        //Валидация формы авторизации и вывод ошибок сервера
        validationSchema={SignInSchema}
        onSubmit={async (values) => {
            try {
                    await signin(values);
                    navigate("/main")        
            } catch (error) {
                //Сделать вывод ошибок видимым пользователю!!!
                console.log(error);
            }
        }}
      >
            <div className={style.hidden}>
                <div className={style.end_modal_avtorization}>  
                    <div className={style.modal}>
                        <Form >
                                <Field  className={`${style.form_data}`} 
                                        name="email"  
                                        type="email" 
                                        placeholder="Email"/>
                                        <ErrorMessage name="email" />
                                <Field  className={`${style.form_data}`} 
                                        name="password" 
                                        type="password" 
                                        placeholder="Пароль" />
                                        <ErrorMessage name="password" />
                                <button className={style.form_data} 
                                        type="submit"
                                        >
                                            Войти
                                </button>
                                <span   className={style.form_data} 
                                        onClick={() => navigate("/")}
                                        >
                                            Отмена
                                </span>
                                <p>У вас ещё нет аккаута? <Link to={"/signup"} className={style.btn}>Зарегистрироваться</Link> </p>
                        </Form >
                    </div>
                </div>
            </div>

      </Formik>
    )   
}

