import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  Box: {
    padding: 10,
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    border: ['1px', 'solid', 'grey'],
  },
  DynamicValues: props => ({
    width: props.width || 450,
  }),
});

const FlexBox = ({ children, ...props }) => {
  const classes = useStyles(props);

  return (
    <div className={[classes.Box, classes.DynamicValues].join(' ')}>
      {children}
    </div>
  );
};

export default FlexBox;
