import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <PersonCard
        fullName={"Doe, Jane"}
        age={45}
        hairColor ={"Black"}/>
        <PersonCard
        fullName={"Smith, John"}
        age={88}
        hairColor ={"Brown"}/>
        <PersonCard
        fullName={"Fillmore, Millard"}
        age={50}
        hairColor ={"Brown"}/>
        <PersonCard
        fullName={"Smith, Maria"}
        age={62}
        hairColor ={"Brown"}/>
      </div>
    </div>
  );
}

export default App;
