import { useState } from 'react';
import { Formik, Form } from 'formik';
import { useStyles } from './FormStyles';
import * as Yup from 'yup';
// import Input from './Input';

import FormikInput from './FormikInput';
import FormikCheckbox from './FormikCheckbox';
import FormikSelect from './FormikSelect';

const MyForm = () => {
  const [myName, setMyName] = useState('');
  const classes = useStyles();

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>Forms by Formik</h3>

      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          messenger: 'yourMessenger',
          accept: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Name should be longer')
            .max(15, 'Maximum 15 characters')
            .required('Required'),
          surname: Yup.string()
            .min(2, 'Name should be longer')
            .max(15, 'Maximum 15 characters')
            .required('Required'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          messenger: Yup.string()
            .oneOf(
              ['viber', 'whatsapp', 'telegram', 'other'],
              'Please select your messenger',
            )
            .required('Required'),
          accept: Yup.boolean()
            .oneOf([true], 'You shoud accept the terms')
            .required('You should accept the term'),
        })}
        onSubmit={(values, { onSubmitting }) => setMyName(values)}
      >
        <Form className={classes.Form__box}>
          <FormikInput
            label="Name"
            name="name"
            // type="text"
            // placeholder="Name"
            // title="name"
          />
          <FormikInput
            label="Surname"
            name="surname"
            // type="text"
            // placeholder="Name"
            // title="name"
          />
          <FormikInput
            label="Email"
            name="email"
            type="email"
            placeholder="test@test.com"
          />
          <FormikSelect label="Messenger" name="messenger">
            <option value=""></option>
            <option value="viber">Viber</option>
            <option value="whatsapp">WhatsApp</option>
            <option value="telegram">Telegram</option>
            <option value="other">Other</option>
          </FormikSelect>

          <FormikCheckbox name="accept">
            I accept the terms and conditions
          </FormikCheckbox>
          <div className={classes.Form__input__wrap}>
            <input className={classes.Form__submit} type="submit" />
          </div>
        </Form>
      </Formik>

      <br />
      <pre>
        <p>{JSON.stringify(myName)}</p>
      </pre>
    </>
  );
};

export default MyForm;

/*
<Input id={'test1'} label={'Name'} defaultValue="test" />
<Input id={'test2'} label={'Surname'} />

*/
