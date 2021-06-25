import { useStyles } from './ButtonStyle';
import FlexBox from '../Box/FlexBox';

const Buttons = ({ buttonSize }) => {
  const classes = useStyles(buttonSize);

  const clickHandler = e => console.log(e.target);

  return (
    <FlexBox width={500}>
      <button
        className={[classes.Button__size, classes.Button].join(' ')}
        onClick={clickHandler}
      >
        {buttonSize}
      </button>
      {/* <button
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
      </button> */}
    </FlexBox>
  );
};

Buttons.defaultProps = {
  buttonSize: 'medium',
};

export default Buttons;
