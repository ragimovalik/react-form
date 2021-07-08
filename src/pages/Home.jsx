import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import FontSizeContext from '../FontSizeContext';
import PageBox from '../components/Box/PageBox';

const useStyles = createUseStyles({
  Title: {
    'font-size': props => props * 1.3 + 'rem',
    marginBottom: 10,
  },
  Paragraph: {
    'font-size': props => props + 'rem',
  },
});

const HomePage = () => {
  const fontSize = useContext(FontSizeContext);
  const classes = useStyles(fontSize);

  return (
    <PageBox>
      <h2 className={classes.Title}>Welcome to my Page</h2>
      <p className={classes.Paragraph}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        accusantium, ducimus officiis debitis, nostrum hic quasi quam? Nobis
        nulla eveniet id quod dolorem unde, ut at sunt veritatis, perferendis
        nihil.
      </p>
    </PageBox>
  );
};

export default HomePage;
