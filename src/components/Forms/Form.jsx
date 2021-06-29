import { useState, useContext } from 'react';
import { Formik, Form } from 'formik';
import { useStyles } from './FormStyles';
import * as Yup from 'yup';

import FormikInput from './FormikInput';
import FormikCheckbox from './FormikCheckbox';
import FormikSelect from './FormikSelect';
import InputButton from './InputButton';

import fontSizeContext from '../../FontSizeContext';

const MyForm = () => {
  const [myName, setMyName] = useState('');
  const fontSize = useContext(fontSizeContext);
  const classes = useStyles(fontSize);

  return (
    <div>
      <h3 style={{ textAlign: 'center' }}>Forms by Formik</h3>

      <Formik
        initialValues={{
          name: '',
          surname: '',
          email: '',
          messenger: '',
          accept: false,
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Name should be longer')
            .max(15, 'Maximum 15 characters')
            .required('Required'),
          surname: Yup.string()
            .min(2, 'Name should be longer')
            .max(15, 'Maximum 20 characters')
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
            .oneOf([true], 'You should accept the terms')
            .required('You should accept the terms'),
        })}
        onSubmit={(values, { onSubmitting }) => setMyName(values)}
      >
        <Form className={classes.Form__box}>
          <FormikInput
            label="Name"
            name="name"
            placeholder="John"
            // type="text"
            // title="name"
          />
          <FormikInput
            label="Surname"
            name="surname"
            placeholder="Doe"
            // type="text"
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

          <InputButton />
        </Form>
      </Formik>

      <br />
      <pre>
        <p>{JSON.stringify(myName)}</p>
      </pre>
    </div>
  );
};

export default MyForm;

/*
<Input id={'test1'} label={'Name'} defaultValue="test" />
<Input id={'test2'} label={'Surname'} />

*/
