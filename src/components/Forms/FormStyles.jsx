import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  Form__box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 450,
    margin: [5, 'auto'],
    padding: 10,
    border: [2, 'solid', '#e0e8e5'],
    borderRadius: 8,
    backgroundColor: '#f6fafb',
  },
  Form__input__wrap: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    marginBottom: 10,
    padding: [0, 10],
    textAlign: 'center',

    fontStyle: 'italic',
    fontWeight: 400,
    lineHeight: 1.2,
    fontFamily: 'inherit',
    fontSize: '0.8rem',
  },
  Item: {
    marginBottom: 5,
    padding: 5,
  },
  Form__input: {
    width: '100%',
    height: '1.2rem',
    outline: 'none',
    border: [2, 'solid', '#e0e8e5' /*'#597387'*/],
    borderRadius: 4,
    paddingLeft: 8,

    transition: 'all 250ms linear',
    '&:hover, &:focus': {
      border: [2, 'solid', '#a8beb6' /*'#597387'*/],
    },
  },
  Form__label: {
    marginRight: 10,
    // fontSize: '0.8rem',
    // fontStyle: 'italic',
    // fontWeight: 400,
    // lineHeight: 1.2,
    // fontFamily: 'inherit',
    // font: 'italic 400 0.8rem/1.2 system-ui',
  },
  Form__submit: {
    width: '100%',
    height: 35,
    // margin: [0, 5],
    padding: '0.25rem',
    border: [3, 'solid', '#e0e8e5'],
    borderRadius: 8,
    outline: 'none',

    fontSize: '0.9rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    color: '#FFFFFF',
    backgroundColor: '#597387',
    cursor: 'pointer',
    overflow: 'hidden',

    transition: 'transform 250ms linear',

    '&:hover, &:focus': {
      transform: 'scale(1.02)',
    },
  },
});
