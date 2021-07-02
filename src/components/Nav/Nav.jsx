import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { routes } from '../../routes';

const useStyles = createUseStyles({
  Header__box: {
    width: '100%',
    minHeight: 40,
    backgroundColor: 'lightgray',
    padding: 5,
  },
  Nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Nav__links: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    margin: [0, 'auto'],
  },
  'Nav__item--active': {
    backgroundColor: 'purple',
    color: '#FFFFFF',
  },
});

const Nav = ({ children }) => {
  const classes = useStyles();

  return (
    <header className={classes.Header__box}>
      <nav className={classes.Nav}>
        <ul className={classes.Nav__links}>
          {routes.map(link => {
            return (
              <li key={link.title}>
                <NavLink
                  className={classes.Nav__item}
                  activeClassName={classes['Nav__item--active']}
                  to={link.path}
                  exact={link.exact}
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {children}
      </nav>
    </header>
  );
};

export default Nav;
