import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div className="d-flex flex-row bd-highlight mb-3">
          <div className="w-25"> </div>
          <div className="ps-3"> Content in this div</div>
        </div>
      </div>
    </>
  );
}

export default App;
