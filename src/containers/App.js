import TodoList from '../components/TodoList';
import Title from '../components/Title';
function App() {
  return (
    <div className='wrap'>
      <div className='todoListDiv'>
          <Title name="일정관리"></Title>
          <TodoList></TodoList>
          <div>
          </div>
      </div>
    </div>
  );
}

export default App;
