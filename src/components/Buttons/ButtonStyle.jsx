import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
  Button__size: props => ({
    width: props === 'small' ? 50 : props === 'large' ? 130 : 80,
    height: props === 'small' ? 30 : props === 'large' ? 40 : 35,
    fontSize:
      props === 'small' ? '0.6rem' : props === 'large' ? '1.2rem' : '0.9rem',
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

    '&:hover, &:focus': {
      transform: 'scale(1.1)',
    },
  },
});
