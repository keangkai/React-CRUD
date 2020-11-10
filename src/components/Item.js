import React, { Component } from 'react'

export default class Item extends Component {
    getStyle = () => {
        return {
          backgroundColor: "#f4f4f4",
          padding: "10px",
          borderBottom: "1px #cc dotted",
          textDecoration: this.props.item.completed ? "line-through" : "none",
        }
      }

    render() {
        const {name,handleEdit,handleDelete, handleCheck}=this.props;
        return (
            <>
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" style={{textDecoration: this.props.completed ? "line-through" : "none",}}>
                <div className="form-check">
                    <input className="form-check-input" onClick={handleCheck} type="checkbox" value="" id="defaultCheck1" /> 
                    <h6>{name}</h6>
                </div>
                <div>
                    <span className="mx-2 text-primary" onClick={handleEdit}><i className="fas fa-edit"></i></span>
                    <span className="mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash-alt"></i></span>
                </div>
            </li>
            </>
        )
    }
}
