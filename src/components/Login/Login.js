import React from 'react';

import useFormWithValidation from '../../hooks/useFormValidation';

import Logo from '../Logo/Logo';

function Login() {
    
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.table(values);
    resetForm();
  };

  return (
    <main className='login'>
        <form className='login-form' onSubmit={handleSubmit} noValidate>
            <div className='login-form__title'>
                <Logo />
                <h1 className='login-form__text'>Рады видеть!</h1>
            </div>
            <fieldset className='login-form__input-fieldset'>
                <div className='login-form__input-box'>
                    <label className='login-form__input-label'>
                        E-mail
                        <input
                            className='login-form__input'
                            type='email'
                            id='email'
                            placeholder='E-mail'
                            name='email'
                            required={true}
                            onChange={handleChange}
                            value={values.email || ''}
                        />
                    </label>
                    <span className='login-form__input-error' aria-live='polite'>
                        {errors.email}
                    </span>
                </div>
                <div className='login-form__input-box'>
                    <label className='login-form__input-label'>
                        Пароль
                        <input
                            className='login-form__input'
                            type='password'
                            id='password'
                            placeholder='Пароль'
                            name='password'
                            required={true}
                            minLength='8'
                            onChange={handleChange}
                            value={values.password || ''}
                        />
                    </label>
                    <span className='login-form__input-error' aria-live='polite'>
                        {errors.password}
                    </span>
                </div>
            </fieldset>
            <button className='login-form__button' disabled={!isValid} type='submit'>Войти</button>
            <p className='login-form__subtitle'>Ещё не зарегистрированы?<a className='register-link' href='/signup'>Регистрация</a></p>
        </form>
    </main>
  );
}

export default Login;
