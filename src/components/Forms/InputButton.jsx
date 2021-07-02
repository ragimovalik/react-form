import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './FormStyles';

import FontSizeContext from '../../FontSizeContext';

const InputButton = ({ value }) => {
  const fontSize = useContext(FontSizeContext);
  const classes = useStyles(fontSize);

  return (
    <div
      className={[classes.Form__input__wrap, classes.DynamicValues].join(' ')}
    >
      <input value={value} className={classes.Form__submit} type="submit" />
    </div>
  );
};

InputButton.defaultProps = {
  disabled: false,
  value: 'submit',
  name: 'submit',
};

InputButton.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  name: PropTypes.string,
};

export default InputButton;
