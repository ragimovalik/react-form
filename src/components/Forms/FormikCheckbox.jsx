import { useField } from 'formik';

import { useStyles } from './FormStyles';

/*
React treats radios and checkbox inputs
differently other input types, select, and textarea.
Formik does this too! When you specify
type` to useField(), it will
return the correct bag of props for you -- a
checked` prop will be included
in `field` alongside `name`, `value`,
onChange`, and `onBlur`
*/

const FormikCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props, { type: 'checkbox' });
  const classes = useStyles();

  return (
    <div
      className={[classes.Form__input__wrap, classes.DynamicValues].join(' ')}
    >
      <label className={classes.Flex}>
        <input
          style={{ marginRight: 5 }}
          type="checkbox"
          {...field}
          {...props}
        />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className={classes.ErrorStyle}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormikCheckbox;
