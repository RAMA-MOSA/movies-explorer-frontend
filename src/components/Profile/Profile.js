import React from 'react';

import useFormWithValidation from '../../hooks/useFormValidation';

function Profile({ currentUserData, onSignOut }) {

  const {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({ currentUserData });

  const WelcomeText = `Привет, ${currentUserData.name || ''}!`;

  const [isEdited, setIsEdited] = React.useState(false);

  const handleToggleEditableProfile = () => {
    setIsEdited(!isEdited);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.table(values);
    handleToggleEditableProfile();
    resetForm(values);
  };

  React.useEffect(() => {
    if (currentUserData) {
      resetForm(currentUserData);
    }
  }, [currentUserData, resetForm]);

  return (
    <main className='profile'>
        <form className='profile-form' onSubmit={handleSubmit} noValidate>
            <div className='profile-form__title'>
                <h1 className='profile-form__text'>{WelcomeText}</h1>
            </div>
            <fieldset className='profile-form__input-fieldset' disabled={!isEdited}>
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
              {isEdited ? (
                <>
                  <span
                    className='profile-form__update-error'
                    aria-live="polite"
                  >
                    При обновлении профиля произошла ошибка.
                  </span>
                  <button
                    className='profile-form__button-save'
                    disabled={!isValid}
                    type='submit'
                  >
                    Сохранить
                  </button>
                </>
              ) : (
                <>
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
}

export default Profile;
