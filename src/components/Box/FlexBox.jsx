import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Box: {
    padding: 10,
    margin: 10,
    width: 450,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    border: ['1px', 'solid', 'grey'],
  },
});

const FlexBox = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.Box}> {children} </div>;
};

export default FlexBox;
