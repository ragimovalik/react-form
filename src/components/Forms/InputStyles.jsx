import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
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
    width: 70,
    marginRight: 10,
    textAlign: 'start',
    // fontSize: '0.8rem',
    // fontStyle: 'italic',
    // fontWeight: 400,
    // lineHeight: 1.2,
    // fontFamily: 'inherit',
    // font: 'italic 400 0.8rem/1.2 system-ui',
  },
});
