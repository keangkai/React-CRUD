import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    
  render() {
    const {items,handleDelete,handleEdit} = this.props
    return (
      <ul className="list-group my-3">
        <h3>List</h3>
        {items.map(item=>{
          return(
            <Item key={item.id} 
            name={item.name} 
            handleDelete={handleDelete} 
            handleEdit={handleEdit}/>
          )
        })}
      </ul>
      
    )
  }
}
