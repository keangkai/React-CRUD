import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    
  render() {
    const {items,handleDelete,handleEdit,handleCheck, showData} = this.props
    return (
      <ul className="list-group my-3">
        <h3>List</h3>
        {showData.map( (item,index) =>{
          return(
            <Item key={item.id} 
            name={item.name}
            index={index}
            completed={item.completed}
            handleDelete={()=>handleDelete(item.id)} 
            handleEdit={()=>handleEdit(item.id)}
            handleCheck={() => handleCheck(item.id)}
            />
          )
        })}
      </ul>
      
    )
  }
}
