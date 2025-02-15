import { Routes, Route, Link, Navigate } from 'react-router-dom';
import List from '../pages/List';
import Form from '../pages/Form';
import Item from '../pages/Item';
import { useNavigate } from 'react-router-dom';
import './App.css'

function App() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Avito Clone App</h1>
      <Routes>
        <Route path="/list" element={<List />}/>
        <Route path="/form" element={<Form />}/>
        <Route path="/item" element={<Item />}/>
      </Routes>
      <div>
        <button onClick={() => navigate("/list")}>List</button>
        <button onClick={() => navigate("/form")}>Form</button>
        <button onClick={() => navigate("/item")}>Item</button>
      </div>  
    </>
  )
}

export default App
