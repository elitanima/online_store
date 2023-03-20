//signin авторизация

import style from './style.module.css'

import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { signin } from "../../api/user"
import { useMutation } from '@tanstack/react-query';

const SignInSchema = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Хотя бы больше 1 символа!')
      .max(10, 'Не больше 10 символов!')
      .required('Введите пароль'),
    email: Yup.string().email('Неверный адрес').required('Введите почту'),
  });

export function AuthorizationWindow() {

    const navigate = useNavigate();

    const { mutateAsync } = useMutation({
        mutationFn: async (values) => {
            await signin(values)
            navigate("/main")
        },
      })

      const onSubmit = async (values) => {
            await mutateAsync(values)   
         }

    return (
        <Formik
        initialValues={{ email: "", password: ""}}
        validationSchema={SignInSchema}
        onSubmit={onSubmit}
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
                                <p>У вас ещё нет аккаута? <Link to={"/signup"} className={style.btn_registration}>Зарегистрироваться</Link> </p>
                        </Form >
                    </div>
                </div>
            </div>

      </Formik>
    )   
}

