import React from 'react';
import PageTitle from './components/PageTitle/PageTitle';
import MyForm from './components/Forms/';
// import Buttons from './components/Buttons';

import FontSizeContext from './FontSizeContext';

function App() {
  const [fontSize, setFontSize] = React.useState('1rem');

  const handleChange = event => {
    setFontSize(event.target.value);
  };

  return (
    <FontSizeContext.Provider value={fontSize}>
      <PageTitle title="New App File" />
      <div
        style={{
          width: 200,
          textAlign: 'center',
          margin: '0 auto',
          padding: 10,
          fontSize: '0.6rem',
        }}
      >
        <fieldset
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <legend> FontSize </legend>

          <label>
            <span>Little</span>
            <input
              type="radio"
              value="0.8rem"
              name="fontSize"
              checked={fontSize === '0.8rem'}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Middle</span>
            <input
              type="radio"
              value="1rem"
              name="fontSize"
              checked={fontSize === '1rem'}
              onChange={handleChange}
            />
          </label>

          <label>
            <span>Large</span>
            <input
              type="radio"
              value="1.2rem"
              name="fontSize"
              checked={fontSize === '1.2rem'}
              onChange={handleChange}
            />
          </label>
        </fieldset>
      </div>

      <MyForm />
      {/* <Buttons buttonSize={'large'} /> */}
      {/* <Buttons /> */}
      {/* <Buttons buttonSize={'small'} /> */}
    </FontSizeContext.Provider>
  );
}

export default App;
