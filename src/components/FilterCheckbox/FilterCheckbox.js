import React from 'react';

function FilterCheckbox(props) {
  return (
    <label
      className={props.labelclassName}
    >
      <input
        className={props.inputclassName}
        type={props.settings.type}
        id={props.settings.id}
        name={props.settings.name}
        required={props.settings.required}
        onChange={props.onChange}
        value={props.value}
        checked={props.value || ''}
      />
      <span
        className={props.sliderclassName}
      />
      {props.settings.label}
    </label>
  );
}

export default FilterCheckbox;
