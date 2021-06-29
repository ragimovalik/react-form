import { useField } from 'formik';
import { useStyles } from './FormStyles';

const FormikSelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();

  return (
    <div className={classes.Form__input__wrap}>
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
