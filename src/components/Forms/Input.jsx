import { useStyles } from './InputStyles';

const Input = ({ id, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.Form__input__wrap}>
      <label className={classes.Form__label} htmlFor={id}>
        <span>{label}</span>
      </label>
      <input className={classes.Form__input} id={id} />
    </div>
  );
};

export default Input;

/*
  htmlFor,
  type,
  id,
  name,
  title,
  pattern,
  placeholder,
  required,
  value,
  labelText,
  onChange,
*/
