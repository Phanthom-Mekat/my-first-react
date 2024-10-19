import Actor from './Actor';
import './App.css'
import Singers from './Singers';
import Todo from './Todo'
import PropTypes from 'prop-types';
function App() {
  const actors = ['John', 'keke', 'mike']

  const singers = [
    {name: 'John', roll: 10, address: 'Mumbai'},
    {name: 'keke', roll: 20, address: 'Delhi'},
    {name: 'mike', roll: 30, address: 'Chennai'},
    {name: 'mike', roll: 30, address: 'Chennai'},
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer => <Singers singers={singer} />)
      }
      {/* <Actor name="John" />
      {
        actors.map(actor => <Actor name={actor} />)
      } */}

      {/* <Student name="John" roll="10" address="Mumbai" />
      <Student name="keke" roll="20" address="Delhi" />
      <Todo right={true} task="Learn React" />
      <Todo right={false} task="Learn vue" /> */}
    </>
  )
}

function Student({name, roll, address}) {
  
  return(
    <>
      <div className='student'>
      <h1>Student</h1>
      <p>Name: {name}</p><p>Roll: {roll}</p><p>Address: {address}</p>
      </div>
    </>
    
  )

}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  roll: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};


export default App
