



























import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
  const [InputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if(InputValue.trim().length <= 1) return
    onNewCategory(InputValue.trim())
    setInputValue('')
    
  };

  return (
    <form onSubmit={(e) => onSubmit(e)} aria-label="form">
      <input
        type="text"
        value={InputValue}
        placeholder="Buscar Gifts"
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
