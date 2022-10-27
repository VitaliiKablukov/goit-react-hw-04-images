import {
  Wrapper,
  SearchForm,
  SearchFormButton,
  Input,
} from './Searchbar.styled';
import { AiOutlineEye } from 'react-icons/ai';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const onChangeInput = e => {
    const textInput = e.target.value;
    setInputText(() => textInput);
  };
  const onSubmitForm = e => {
    e.preventDefault();
    if (inputText === '') {
      alert('Введіть імя картинок які ви хочете отримати');
    } else {
      onSubmit(inputText);
    }
  };
  return (
    <Wrapper>
      <SearchForm onSubmit={onSubmitForm}>
        <SearchFormButton type="submit">
          <AiOutlineEye
            style={{
              height: '40px',
              fontSize: '40px',
            }}
          />
        </SearchFormButton>

        <Input
          onChange={onChangeInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Wrapper>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
