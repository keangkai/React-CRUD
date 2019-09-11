import React, {Component} from 'react';
import List from './components/List';
import Input from './components/Input';
import uuid from 'uuid';
class App extends Component {
  state = {
    items:[],
    id:uuid(),
    item:"",
    editItem:false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItemfrominput = {
      id:this.state.id,
      name:this.state.item
    }
    const updateItem=[...this.state.items,newItemfrominput]
    this.setState({
      items:updateItem,
      item:"",
      id:uuid(),
      editItem:false
    })
  }
  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }
  clearList = () => {
    console.log("Clear data");
  }
  handleDelete = (e) => {
    console.log("Remove data");
  }
  handleEdit = (e) => {
    console.log("Edit data");
  }
  render() {
    return (
        <div className="container">
          <h2 align="center">TODO Application</h2>
          <div className="row">
            <Input 
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            editItem={this.state.editItem}
            />
          </div>
            <List 
            items={this.state.items}
            handleDelete={this.state.handleDelete}
            handleEdit={this.state.handleEdit}
            />
        </div>
    );
  }
}

export default App;
