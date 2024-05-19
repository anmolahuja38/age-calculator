
import './App.css';
import { AgeCalculator } from './AgeCalculator';
import { AdsComponent } from './AdsComponent';

function App() {
  return (
    <div className="App">
      <AgeCalculator></AgeCalculator>
      <h1>Place To show Google AdSense</h1>
      <AdsComponent dataAdSlot='6734630747' />

    </div>
  );
}

export default App;
