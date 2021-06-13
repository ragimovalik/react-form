import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  Box: {
    padding: 10,
    margin: 10,
    width: 450,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    border: ['1px', 'solid', 'grey'],
  },

  Button__size: props => ({
    width: props === 'small' ? 50 : props === 'large' ? 130 : 80,
    height: props === 'small' ? 30 : props === 'large' ? 40 : 35,
    fontSize:
      props === 'small' ? '0.6rem' : props === 'large' ? '1.2rem' : '1rem',
    fontWeight: props === 'small' ? 400 : props === 'large' ? 700 : 500,
  }),

  Button: {
    // height: 40,
    padding: '0.25rem',
    border: [3, 'solid', '#e0e8e5'],
    borderRadius: 8,
    outline: 'none',

    textTransform: 'uppercase',
    // fontWeight: 700,
    color: '#FFFFFF',
    backgroundColor: '#597387',
    cursor: 'pointer',
    overflow: 'hidden',

    transition: 'transform 250ms linear',

    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
});

/*
.Form__btn {
  width: 150px;
  height: 40px;

  background-color: darkened;
  cursor: pointer;
  overflow: hidden;

  transition: transform 250ms linear;
}

.Form__btn:hover,
.Form__btn:focus {
  transform: scale(1.1);
}

//===============================


@value bgcPrimary: #e0e8e5;
@value darkened: #597387;
@value lightened: #f6fafb;
@value text: #252b31;

@value white: #ffffff;
@value red: #ff0000;

*/
