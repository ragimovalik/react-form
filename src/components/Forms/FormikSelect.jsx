import { useField } from 'formik';
import { useStyles } from './FormStyles';
import fontSizeContext from '../../FontSizeContext';
import { useContext } from 'react';

const FormikSelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  const fontSize = useContext(fontSizeContext);
  const classes = useStyles(fontSize);

  return (
    <div
      className={[classes.Form__input__wrap, classes.DynamicValues].join(' ')}
    >
      <label className={classes.Form__label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <select className={classes.Form__input} {...field} {...props}>
        {children}
      </select>
      {meta.touched && meta.error ? (
        <div className={classes.ErrorStyle}> {meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikSelect;
