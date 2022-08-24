import '../styles.css';
import propTypes from 'prop-types';

export const Button = ({ onClick }) => {
  return (
    <div className="button-wrap">
      <button className="Button" type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
}