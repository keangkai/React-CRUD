import React from 'react'

const Input = (props) => {
    const { handleSubmit, item, handleChange } = props;
    return (
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Todo</label>
                    <input type="text" className="form-control" value={item} onChange={handleChange}/>
                </div>
                    <input type="submit" className="btn btn-primary" value="ADD"/>    
            </form>
        </div>
    )
}

export default Input;
