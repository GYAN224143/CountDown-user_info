import "./App.css";
import CountdownTimer from "./counter/CountdownTimer";
import User from "./user_info/User";
import Header from "./componets/header/Header";
import { BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={
            <CountdownTimer />}/>
          <Route path="user" element={
            
            <User />

          }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
