import './App.css';
import TodoList from './components/TodoList';
import UserDetail from './components/UserDetail';


function App() {
  
  return (
      <div style={{display:'flex',gap:'1rem',margin:'10px', minHeight:'100vh', maxWidth:"100%", }}>
        <TodoList />
        <UserDetail />
     </div>
  );
}

export default App;
