import data from './Data';
import Profile from './components/Profile';

function App() {
  return (
    <>
      <Profile userData={data} />
    </>
  );
}

export default App;
