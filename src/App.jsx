import data from './Data';
import Profile from './components/Profile';

function App() {
  return (
    <div className='w-full h-full bg-gray-900 flex items-center justify-center md:h-screen'>
      <Profile userData={data} />
    </div>
  );
}

export default App;
