import '../css/App.css';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <div className="Authentication-Content">
        <h1>Movie Provider Front-End!</h1>
        <p>Authenticate first to get in the app.</p>
      </div>

      <div className="Content">
        <h1>Now this is where the Homepage start.</h1>
        <Home />
      </div>      
    </div>
  );
}

export default App;
