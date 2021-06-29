import PropTypes from 'prop-types';
import { useStyles } from './FormStyles';
import { useFormikContext } from 'formik';

const InputButton = ({ value }) => {
  const classes = useStyles();
  const { values } = useFormikContext();
  console.log(values);

  return (
    <div className={classes.Form__input__wrap}>
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
