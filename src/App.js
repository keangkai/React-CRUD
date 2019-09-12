import React, {Component} from 'react';
import List from './components/List';
import Input from './components/Input';
import uuid from 'uuid';
class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem:false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const newItemfrominput = {
      id: this.state.id,
      name: this.state.item
    }
    const updateItem = [...this.state.items, newItemfrominput]
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false
    })
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  clearList = (e) => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filterItems = this.state.items.filter(item =>item.id !== id)
    this.setState({
      items:filterItems
    })
    // console.log(id);
  }
  handleEdit = (id) => {
    // console.log("Edit data", id);
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectItems = this.state.items.find(item=>item.id === id)
    this.setState({
      items:filterItems,
      item:selectItems.name,
      id:id,
      editItem:true,
    })
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
              clearList={this.clearList}
            />
          </div>
            <List 
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              clearList={this.clearList}
            />
        </div>
    );
  }
}

export default App;
