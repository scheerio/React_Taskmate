
import React from 'react';
import Todo from './Todo';

function TodoList({tasks, handleToggle}) {
  return (
    <div>
    {tasks && tasks.map((task)=>
        <Todo key={task.id} name={task.name} id={task.id} complete={task.complete} handleToggle={handleToggle}/>
    )}
    </div>
  );
}

export default TodoList;


