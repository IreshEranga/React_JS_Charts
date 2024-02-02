
import { useState } from 'react';
import './App.css';
import { BarChart } from './components/BarChart';
import {UserData} from './data';
import { LineChart } from './components/LineChart';
import { PieChart } from './components/PieChart';

function App() {

const [userData, setUserData] = useState({
  labels: UserData.map((data)=>data.year) ,
  datasets: [{
    label:"Users Gained",
    data:UserData.map((data)=>data.userGain),
    //backgroundColor:["red","green","blue"]
    
  }]
});

  return (
    <div className="App" style={{width:'700px'}}>
      <BarChart chartData={userData}/>
      <LineChart chartData={userData}/>
      <PieChart chartData={userData}/>
    </div>
  );
}

export default App;
