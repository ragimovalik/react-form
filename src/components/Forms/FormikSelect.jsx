import { useField } from 'formik';

const FormikSelect = ({ children, label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        {children}
      </select>
      {meta.touched && meta.error ? <div> {meta.error}</div> : null}
    </div>
  );
};

export default FormikSelect;
