import React from 'react';

import useFormWithValidation from '../../hooks/useFormValidation';
import Preloader from '../Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ onSignOut, onUpdateCurrentUser, isLoadingUpdateCurrentUser, updUserResStatus }) {
  const currentUserData = React.useContext(CurrentUserContext);

  const [isUpdateUserProfileError, setIsUpdateUserProfileError] = React.useState(false);
  const [updateUserProfileErrorText, setUpdateUserProfileErrorText] = React.useState('');
  const [formIsValid, setFormIsValid] = React.useState(false);

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUpdateCurrentUser(values)
    handleToggleEditableProfile();
    resetForm(currentUserData);
  };

  const [isEdited, setIsEdited] = React.useState(false);

  const handleToggleEditableProfile = () => {
    setIsEdited(!isEdited);
    setIsUpdateUserProfileError(false);
    setUpdateUserProfileErrorText('');
  };
  
  const WelcomeText = `Привет, ${currentUserData.name || ''}!`;

  React.useEffect(() => {
    if (currentUserData) {
      resetForm(currentUserData);
    }
  }, [currentUserData, resetForm]);

  React.useEffect(() => {
    setFormIsValid(isValid);
  }, [isValid, values]);

  React.useEffect(() => {
    if (currentUserData.name === values.name && currentUserData.email === values.email) {
      setFormIsValid(false);
    }
  }, [currentUserData, values]);

  const errorHandler = () => {
    if (updUserResStatus) {
      switch (updUserResStatus) {
        case 400:
        case 404:
          setIsUpdateUserProfileError(true);
          setUpdateUserProfileErrorText('При обновлении профиля произошла ошибка');
          break;
        case 500:
          setIsUpdateUserProfileError(true);
          setUpdateUserProfileErrorText('Внутренняя ошибка сервера')
          break;
        case 200:
          setIsUpdateUserProfileError(false);
          setUpdateUserProfileErrorText('');
          break;
        default:
          setIsUpdateUserProfileError(true);
          setUpdateUserProfileErrorText('При обновлении профиля произошла ошибка');
          break;
      };
    };
  };

  React.useEffect(() => {
    errorHandler();
  });

  return (
    <main className='profile'>
        <form className='profile-form' onSubmit={handleSubmit} noValidate>
            <div className='profile-form__title'>
                <h1 className='profile-form__text'>{WelcomeText}</h1>
            </div>
            <fieldset className='profile-form__input-fieldset' disabled={!isEdited || isLoadingUpdateCurrentUser}>
                <div className='profile-form__input-box'>
                    <label className='profile-form__input-label'>
                        Имя
                        <input
                            className='profile-form__input'
                            type='text'
                            id='name'
                            placeholder='Имя'
                            name='name'
                            required={true}
                            onChange={handleChange}
                            value={values.name || ''}
                            pattern='[a-zA-Z -]{2,30}'
                            customErrorMessage = 'Поле name может содержать только латиницу, пробел или дефис: a-zA-Z -'
                        />
                    </label>
                    <span className='profile-form__input-error' aria-live='polite'>
                        {errors.name}
                    </span>
                </div>
                <div className='profile-form__input-box'>
                    <label className='profile-form__input-label'>
                        E-mail
                        <input
                            className='profile-form__input'
                            type='email'
                            id='email'
                            placeholder='E-mail'
                            name='email'
                            required={true}
                            onChange={handleChange}
                            value={values.email || ''}
                        />
                    </label>
                    <span className='profile-form__input-error' aria-live='polite'>
                        {errors.email}
                    </span>
                </div>
            </fieldset>
            <div className='profile-form__button-box'>

              {isUpdateUserProfileError && (
                <span
                className='profile-form__update-error'
                aria-live="polite"
              >
                {updateUserProfileErrorText}
              </span>
              )}
              {isEdited ? (
                <button
                className='profile-form__button-save'
                disabled={!formIsValid}
                type='submit'
              >
                Сохранить
              </button>
              ) : (
                <>
                  {isLoadingUpdateCurrentUser && (
                    <Preloader />
                  )}
                  <button
                    className='profile-form__button-edit'
                    onClick={handleToggleEditableProfile}
                  >
                    Редактировать
                  </button>
                  <button
                    className='profile-form__button-exit'
                    onClick={onSignOut}
                  >
                    Выйти из аккаунта
                  </button>
                </>
              )}
            </div>
        </form>
    </main>
  );
};

export default Profile;
