import { ButtonMore } from './Button.styled';
import PropTypes from 'prop-types';
export const Button = ({ counterPage }) => {
  return (
    <ButtonMore type="button" onClick={counterPage}>
      Load More
    </ButtonMore>
  );
};
Button.propTypes = {
  counterPage: PropTypes.func.isRequired,
};
