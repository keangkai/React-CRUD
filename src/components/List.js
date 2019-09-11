import React from 'react'
import Item from './Item'

const List = (props) => {
  const { items, handleDelete, handleEdit } = props
  return (
    <ul className="list-group my-3">
      <h3>List</h3>
      {items.map(item=>{
        return(
          <Item key={item.id}
          id={item.id}
          name={item.name} 
          handleDelete={handleDelete} 
          handleEdit={handleEdit}/>
        )
      })}
    </ul>
    
  )
}

export default List;
