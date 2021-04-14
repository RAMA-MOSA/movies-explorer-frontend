import React from 'react';

import useFormWithValidation from '../../hooks/useFormValidation';

import Logo from '../Logo/Logo';
import Preloader from '../Preloader/Preloader';

function Login({ onSignin, authResStatus, tokenResStatus, isLoadingSignin }) {

  const [isAuthError, setIsAuthError] = React.useState(false);
  const [authErrorText, setAuthErrorText] = React.useState(null);
    
  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignin(values);
  };

  const errorHandler = () => {
    if (tokenResStatus) {
      switch (tokenResStatus) {
        case 400:
          setIsAuthError(true);
          setAuthErrorText('Вы ввели неправильный логин или пароль');
          break;
        case 401:
          setIsAuthError(true);
          setAuthErrorText('При авторизации произошла ошибка, переданный токен некорректен');
          break;
        case 500:
          setIsAuthError(true);
          setAuthErrorText('На сервере произошла ошибка');
          break;
        case 200:
          setIsAuthError(false);
          setAuthErrorText('');
          resetForm();
          break;
        default:
          setIsAuthError(true);
          setAuthErrorText('При авторизации произошла ошибка, токен не передан или передан не в том формате');
          break;
      };
    }

    if (authResStatus) {
      switch (authResStatus) {
        case 400:
        case 401:
          setIsAuthError(true);
          setAuthErrorText('Вы ввели неправильный логин или пароль');
          break;
        case 500:
          setIsAuthError(true);
          setAuthErrorText('На сервере произошла ошибка');
          break;
        case 200:
          setIsAuthError(false);
          setAuthErrorText('');
          resetForm();
          break;
        default:
          setIsAuthError(true);
          setAuthErrorText('Вы ввели неправильный логин или пароль');
          break;
      };
    };
  };

  React.useEffect(() => {
    errorHandler();
  }, [authResStatus, tokenResStatus]);

  return (
    <main className='login'>
        <form className='login-form' onSubmit={handleSubmit} noValidate>
            <div className='login-form__title'>
                <Logo />
                <h1 className='login-form__text'>Рады видеть!</h1>
            </div>
            <fieldset className='login-form__input-fieldset' disabled={isLoadingSignin}>
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
                {isAuthError && (
                  <span className='login-form__error' aria-live="polite">
                    {authErrorText}
                  </span>
                )}
            </fieldset>
            <button className='login-form__button' disabled={!isValid || isLoadingSignin} type='submit'>Войти</button>
            <p className='login-form__subtitle'>Ещё не зарегистрированы?<a className='register-link' href='/signup'>Регистрация</a></p>
        </form>
        {isLoadingSignin && (<Preloader />)}
    </main>
  );
};

export default Login;
