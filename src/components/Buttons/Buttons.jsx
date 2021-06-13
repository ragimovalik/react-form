import { useStyles } from './ButtonStyle';

const Buttons = ({ buttonSize }) => {
  const classes = useStyles(buttonSize);

  const clickHandler = e => console.log(e.target);

  return (
    <div className={classes.Box}>
      <button
        className={[classes.Button__size, classes.Button].join(' ')}
        onClick={clickHandler}
      >
        {buttonSize}
      </button>
      <button
        className={[classes.Button__size, classes.Button].join(' ')}
        onClick={clickHandler}
      >
        {buttonSize}
      </button>
      <button
        className={[classes.Button__size, classes.Button].join(' ')}
        onClick={clickHandler}
      >
        {buttonSize}
      </button>
    </div>
  );
};

Buttons.defaultProps = {
  buttonSize: 'medium',
};

export default Buttons;
