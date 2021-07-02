import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import MyForm from './components/Forms/';
// import Buttons from './components/Buttons';
import Radio from './components/Forms/Radio';
import Nav from './components/Nav/Nav';

import FontSizeContext from './FontSizeContext';

import { routes } from './routes';

const number = 0.9;

function App() {
  const [fontSize, setFontSize] = React.useState(number);

  const handleChange = event => {
    setFontSize(Number(event.target.value));
  };

  return (
    <FontSizeContext.Provider value={fontSize}>
      <Nav>
        <Radio handleChange={handleChange} fontSize={fontSize} />
      </Nav>

      <Switch>
        {routes.map(({ exact, path, component: Component, title }) => {
          return (
            <Route
              key={title}
              path={path}
              component={Component}
              title={title}
              exact={exact}
            />
          );
        })}
      </Switch>

      {/* <MyForm /> */}
    </FontSizeContext.Provider>
  );
}

export default App;

/*
<Buttons buttonSize={'large'} />
<Buttons />
<Buttons buttonSize={'small'} />
*/
