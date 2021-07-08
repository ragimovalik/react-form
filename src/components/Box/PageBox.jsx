import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import FontContext from '../../FontSizeContext';

const useStyles = createUseStyles({
  PageBox: {
    width: 400,
    height: 250,
    margin: '10px auto',
    textAlign: 'center',
    fontSize: props => props + 'rem',
  },
});

const PageBox = ({ children }) => {
  const fontSize = useContext(FontContext);
  const classes = useStyles(fontSize);

  return <div className={classes.PageBox}>{children}</div>;
};

export default PageBox;
