// import Form from './components/Forms';
import Buttons from './components/Buttons';

function App() {
  return (
    <div>
      <h1 style={{ color: 'purple', margin: 10 }}> New App File</h1>

      <Buttons buttonSize={'large'} />
      <Buttons />
      <Buttons buttonSize={'small'} />
    </div>
  );
}

export default App;
