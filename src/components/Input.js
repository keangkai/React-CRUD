import React, { Component } from 'react'

export default class Input extends Component {
    
    render() {
        const {handleSubmit,item,handleChange,editItem} = this.props;
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
}
