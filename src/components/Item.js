import React from 'react'

const Item = (props) => {
    const { id, name, handleEdit, handleDelete } = props;
    return (
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <h6>{name}</h6>
            <div>
                <span onClick={() => handleEdit(id)}><i className="fas fa-edit"></i></span>
                <span onClick={() => handleDelete(id)}><i className="fas fa-trash-alt"></i></span>
            </div>
        </li>
    )
}

export default Item;
