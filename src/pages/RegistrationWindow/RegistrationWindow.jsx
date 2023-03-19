
//Signup регистрация пользователя

import style from './style.module.css';

import { Link, useNavigate } from "react-router-dom";

import { useState } from 'react'
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { signup } from "../../api/user"
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Хотя бы больше 1 символа!')
      .max(10, 'Не больше 10 символов')
      .required('Придумайте пароль'),
    group: Yup.string()
      .min(2, 'Минимум 2 символа!')
      .max(10, 'Не больше 10 символов!')
      .required('Введите группу'),
    email: Yup.string().email('Неверный адрес').required('Введите почту'),
  });

export function RegistrationWindow() {

    const initialValues = {
        password: '',
        email: '',
        group: '9-gr'
      }

    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{ email: "", password: "", group: "9-gr"}}
            validationSchema={SignUpSchema}
            //Валидация формы регистрации и вывод ошибок сервера
            onSubmit={async (values) => {
                // проверка на пустоту формы
                try {
                        await signup(values);
                        navigate("/signin")
                   
                } catch (error) {
                     //Сделать вывод ошибок видимым пользователю!!!
                    console.log(error)
                }
               
            }}>
            <div className={style.hidden}>
                <div className={style.end_modal_registration}>  
                    <div className={style.modal}>
                        <Form className={style.FormAvtorization} >
                                <Field  className={`${style.form_data}`} 
                                        name="email"  
                                        type="email" 
                                        placeholder="Email"/>
                                    <ErrorMessage name="email" />
                                <Field  className={`${style.form_data}`} 
                                        name="password" 
                                        type="password" 
                                        placeholder="Придумайте пароль" />
                                    <ErrorMessage name="password" />
                                <Field  className={`${style.form_data}`} 
                                        name="group" 
                                        type="text" 
                                        placeholder="Группа" />
                                    <ErrorMessage name="group" />
                                <button className={style.form_btn} 
                                        type="submit"
                                        >
                                            Регистрация
                                </button>
                                <span   className={style.form_btn} 
                                        onClick={() => navigate('/')}
                                        >
                                            Отмена
                                </span>
                                <p>Есть аккаут? <Link to={"/signin"} className={style.btn_authorization} >Войти</Link> </p>
                        </Form>
                    </div>
                </div>
            </div>

        </Formik>
    )   
}

