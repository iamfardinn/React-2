
import './App.css'
import Friends from './Friends';
import Users from './Users';

import Team from './team'

function App() {

  function handleClick(){
    alert('Button clicked');
  }

  const handleClick2 =() =>{
    alert('Button clicked');
  }

  const addToFive = (num) =>{
    alert(num +5);
  }
 

  return (
    <>
    <Friends></Friends>

   <Users></Users>

    <Team> </Team>
      
      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>First</button>
      <button onClick={handleClick2}>Second</button>
      <button onClick={() =>{alert('Third Clicked')}}>Third</button>

      <button onClick={() => addToFive(3)}>Fourth</button>
    </>
  )
}

export default App
