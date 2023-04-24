
import './App.css';

function App() {
  return (
    <div>
      <label>Bill Total</label>
      <input type="text" placeholder={'0.00'}/>
      <label>Tip</label>
      <input type="text" placeholder={'0.00'}/>
        <div className="summary">
            <div className="spilt"></div>
            <div className="result">
                <label>Split Total</label>
                <span>175</span>
            </div>
        </div>
    </div>
  );
}

export default App;
