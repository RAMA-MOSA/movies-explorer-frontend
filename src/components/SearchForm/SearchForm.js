import React from 'react';

import useFormWithValidation from '../../hooks/useFormValidation';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ onSubmit }) {
  const {
    values,
    isValid,
    handleChange,
    resetForm,
  } = useFormWithValidation({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(values);
    resetForm();
  };

  const checkbox_setting = {
    type: 'checkbox',
    id: 'filter-shortfilm',
    label: 'Короткометражки',
    name: 'shortfilm',
    required: false,
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-form__box">
            <input className="search-form__input" type="text" id="search-text" placeholder="Фильм" name="search" required={true} onChange={handleChange} value={values.search} minLength='1'></input>
            <button className="search-form__button" type="submit" disabled={!isValid}>Поиск</button>  //вопросики относительно дизабледа
        </div>
        <FilterCheckbox
          inputclassName='search-form__checkbox-input'
          labelclassName='search-form__checkbox-label'
          sliderclassName='search-form__checkbox-slider'
          settings={checkbox_setting}
          onChange={handleChange}
          value={values.shortfilm}
        />
        <div className='line'></div>
    </form>
  );
};

export default SearchForm;
