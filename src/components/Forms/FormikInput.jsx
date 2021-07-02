import { useField } from 'formik';
import PropTypes from 'prop-types';
import { useStyles } from './FormStyles';

import FontSizeContext from '../../FontSizeContext';
import { useContext } from 'react';
/*
  useField() returns
  [formik.getFieldProps(), formik.getFieldMeta()]
  which we can spread on <input>.
  We can use field meta to show error
  message if the field is invalid and
  it has been touched (i.e. visited)
*/

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const fontSize = useContext(FontSizeContext);
  const classes = useStyles(fontSize);

  return (
    <div
      className={[classes.Form__input__wrap, classes.DynamicValues].join(' ')}
    >
      <label className={classes.Form__label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        id={props.id || props.name}
        className={classes.Form__input}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className={classes.ErrorStyle}> {meta.error} </div>
      ) : null}
    </div>
  );
};

FormikInput.defaultProps = {
  label: 'Label -->',
  type: 'text',
};

FormikInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default FormikInput;
