import React from 'react'

const todo = ({todo, removetodo, completetodo}) => {
    console.log('removetodo:', removetodo)
  return (
<div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
    <div className="content">
        <p>{todo.text}</p>
            <p className='category'>{todo.category}</p>
    </div>
    <div>
        <button className='complete' onClick={() => completetodo(todo.id)}>Completar</button>
        <button className='remove' onClick={() => removetodo(todo.id)}>x</button>
        </div>
</div>
  )
}

export default todo
