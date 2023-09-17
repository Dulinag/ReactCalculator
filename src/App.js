
import { useState } from 'react';
import styled from 'styled-components';
import { pageInfo } from './numbers';
import { operations } from './numbers';
import { equals } from './numbers';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeConatiner = styled.div`

font-size: 70px;
text-align: center;
border: 3px solid green;
background-color: #efe1ce;

`

const Todocontainer = styled.div`

font-size: 40px;
text-align: center;
background-color: #efe1ce;
`


function App() {

   
  const [count, setCount] = useState([]);


  const [operator, setOperator] = useState('');

console.log(count)

  const handleChange = (input) => {
    console.log(input)
    setCount([...count,
      input
    ])
  }
  
  // const handleSubmit = (e) => {
  //   setTodos([
  //     ...todos,
  //     count
  //   ])
  // }



  const handleOperator = (op) => {
    console.log(op)
    console.log(count)
    setCount([...count,
      op
    ])

  //const newInput = `${op} + ${count}`
  }

  const handleSubmit = () => {
    
  const result = eval(count.join(''));
     setCount([result.toString()]);
   

  }

return (
<>

<HomeConatiner>Calculator</HomeConatiner>
<Todocontainer>


       {count}
       {operator}
      


<br></br>

{pageInfo.map((item) => {
  
  return(
<button class ="btn btn-secondary btn-lg" value={item} onClick={(e) => handleChange(e.target.value)}>{item} 
</button>
)

})} 


<br></br>
{operations.map((item) => {
  
  return(

<button value={item.value}  onClick={(e) => handleOperator(e.target.value)} >{item.value}


</button>

)

})} 


{equals.map((item) => {
  
  return(

<button value={item.value}  onClick={(e) => handleSubmit(e.target.value)} >{item.value}


</button>

)

})} 



{/* 

<p>{count} </p>
      <button onClick={() => setCount(1)}>
        1
      </button>
      <button onClick={() => setCount(2)}>
        2
      </button>
      <button onClick={() => setCount(3)}>
        3
    </button>
    <button onClick={() => setCount(4)}>
        4
      </button>
      <button onClick={() => setCount(5)}>
        5
      </button>
      <button onClick={() => setCount(6)}>
        6
    </button>
    <button onClick={() => setCount(7)}>
        7
      </button>
      <button onClick={() => setCount(8)}>
        8
      </button>
      <button onClick={() => setCount(9)}>
        9
    </button>

    <p>{op}</p>
      <button onClick={() => setOperator(1)}>
        1
      </button>
      <button onClick={() => setOperator(2)}>
        2
      </button>
      <button onClick={() => setOperator(3)}>
        3
    </button>
    <button onClick={() => setOperator(4)}>
        4
      </button>
      <button onClick={() => setOperator(5)}>
        5
      </button>
      <button onClick={() => setOperator(6)}>
        6
    </button>
    <button onClick={() => setOperator(7)}>
        7
      </button>
      <button onClick={() => setOperator(8)}>
        8
      </button>
      <button onClick={() => setOperator(9)}>
        9
    </button>

    
<button onClick={() => setCount(count + op)}>
        +
      </button>


      <button onClick={() => setCount(count-op)}>
        -
      </button> */}
</Todocontainer>


</>

  )


}

export default App;
