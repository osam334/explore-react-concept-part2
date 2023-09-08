import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './User';
import Friends from './Friends';


function App() {
  function handleClick(){
    alert('button Clicked');
  }
  const baap = () => {
    alert('button Clicked 2');
    }


    const addToFive = (num) => {
      alert(num+5)
    }
  return (
    <>
       <Users></Users>
       <Friends></Friends>

      <Team></Team>
      <Counter></Counter>
     
     
      <h1>React Core Concepts-2</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={baap}>Click-2</button>
      <button onClick={() => {alert('third Clicked')}}>third</button>
      <button onClick={() => addToFive(5) }>Click</button>

    
    </>
  )
}

export default App
