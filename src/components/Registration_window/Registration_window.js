
//SingUp регистрация пользователя

import style from './style.module.css';
import { useFormik } from 'formik'; //форма
// import { useNavigate } from 'react-router-dom'; //навигация по страницам
// import * as Yup from 'yup'; //валидация формы
// import { useContext } from 'react';

//тема валидации
// const autorizationValidateSchema = Yup.object({
//     email: Yup.string().reguired('Введите почту'),
//     password: Yup.string().reguired('Введите пароль'),
// })


export function Registration_window() {

    // const navigate = useNavigate();
    // const clickToMain = () => {
    //     return navigate('/main')
    // }

    // const { mutateAsync, isError, error, isLoading } = useMutation({
    //     mutationFn: async (valuesSignIn) => {
    //         console.log(valuesSignIn);
    //         // await signin(valuesSignIn)
    //         // await refetchAuth()
    //         // clickToMain()
    //     }
    // })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        // autorizationValidateSchema: autorizationValidateSchema,
        // onSubmit: async (values) => {
        //     await mutateAsync(values)

        // },
    });

    return (
        // <form onSubmit={formik.handleSubmit} className={style.form_avtorization}>
                      
        //                 <input className={style.form_data}
        //                     id="email"
        //                     name="email"
        //                     label="email"
        //                     type='email'
        //                     value={formik.values.email}
        //                     onChange={formik.handleChange}
        //                     error={formik.touched.email && Boolean(formik.errors.email)}
        //                     helperText={formik.touched.email && formik.errors.email}
        //                 />
        //                 <input className={style.form_data}
        //                     id="password"
        //                     name="password"
        //                     label="password"
        //                     type='password'
        //                     value={formik.values.password}
        //                     onChange={formik.handleChange}
        //                     error={formik.touched.password && Boolean(formik.errors.password)}
        //                     helperText={formik.touched.password && formik.errors.password}
        //                 />
        //                 <button type='submit' className={style.form_data} data-btn="entry">Регистрация</button>
        //                 <span className={style.form_data} data-btn="formAutorizationClose">Отмена</span>
        // </form>

        <div className={style.hidden} data-modal="id_modal_add_god">
        <div className={style.end_modal_registration}>  
            <div className={style.modal}>
                <form className={style.form_avtorization} name="form_add_god" id="formAddGod"> 
                    <input className={style.form_data} type="email" name="email" id="email" placeholder="Email"></input>
                    <input className={style.form_data} type = "password" name="userPassword" id="userPassword" placeholder="Придумайте пароль" min="1"></input>
                    <input className={style.form_data} type="text" name="group" id="group" placeholder="Группа"></input>
                    <button className={style.form_data} data-btn="entry">Регистрация</button>
                    <span className={style.form_data} data-btn="formAutorizationClose">Отмена</span>
                </form>
            </div>
        </div>
        </div>
    )   
}

