import React from 'react';

function Todo({id, name, complete, handleToggle}) {

  const handleCheckboxChange = () => {
    handleToggle(id);
  } 
  return (
    <div className="task-container">
        <input type="checkbox" checked={complete} onChange={handleCheckboxChange}/>
        <div>{name}</div>
    </div>
  );
}

export default Todo;

