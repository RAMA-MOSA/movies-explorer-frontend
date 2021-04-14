import React from 'react';

import useFormWithValidation from '../../hooks/useFormValidation';
import Logo from '../Logo/Logo';
import Preloader from '../Preloader/Preloader';

function Register({ onSignup, regResStatus, isLoadingSignup }) {
    const [isRegistrationError, setIsRegistrationError] = React.useState(false);
    const [registrationErrorText, setRegistrationErrorText] = React.useState('');
  
    const {
      values,
      errors,
      isValid,
      handleChange,
      resetForm
    } = useFormWithValidation({});
  
    const handleSubmit = (evt) => {
      evt.preventDefault();
      onSignup(values);
    };
  
    const errorHandler = () => {
      if (regResStatus) {
        switch (regResStatus) {
          case 409:
            setIsRegistrationError(true);
            setRegistrationErrorText('Пользователь с таким email уже существует');
            break;
          case 400:
            setIsRegistrationError(true);
            setRegistrationErrorText('При регистрации пользователя произошла ошибка');
            break;
          case 200:
            setIsRegistrationError(false);
            setRegistrationErrorText('');
            resetForm();
            break;
          default:
            setIsRegistrationError(true);
            setRegistrationErrorText('При регистрации пользователя произошла ошибка');
            break;
        };
      };
    };
  
    React.useEffect(() => {
      errorHandler();
    }, [regResStatus]);

  return (
    <main className='register'>
        <form className='login-form' onSubmit={handleSubmit} noValidate>
            <div className='login-form__title'>
                <Logo />
                <h1 className='login-form__text'>Добро пожаловать!</h1>
            </div>
            <fieldset className='login-form__input-fieldset' disabled={isLoadingSignup}>
                <div className='login-form__input-box'>
                    <label className='login-form__input-label'>
                        Имя
                        <input
                            className='login-form__input'
                            type='text'
                            id='name'
                            placeholder='Имя'
                            name='name'
                            required={true}
                            onChange={handleChange}
                            value={values.name || ''}
                            pattern='[a-zA-Z -]{2,30}'
                        />
                    </label>
                    <span className='login-form__input-error' aria-live='polite'>
                        {errors.name}
                    </span>
                </div>
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
                {isRegistrationError && (
                  <span
                    className='login-form__error'
                    aria-live="polite"
                  >
                    {registrationErrorText}
                  </span>
                )}
            </fieldset>
            <button className='login-form__button register-form__button' disabled={!isValid || isLoadingSignup} type='submit'>Зарегистрироваться</button>
            <p className='login-form__subtitle'>Уже зарегистрированы?<a className='register-link' href='/signin'>Войти</a></p>
            {isLoadingSignup && (<Preloader />)}
        </form>
    </main>
  );
};

export default Register;
