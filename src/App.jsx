import './App.css'

function App() {

  return (
    <>
      <h1>Vite + React</h1>

      <Student name="John" roll="10" address="Mumbai" />
      <Student name="keke" roll="20" address="Delhi" />

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




export default App
