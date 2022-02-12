import Sidebar from './components/Sidebar';
import News from './components/News';
import './styles/app.css';

function App() {
  return (
    <div className='container'>
      <Sidebar/>
      <News/>
    </div>
  );
}

export default App;
