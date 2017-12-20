import React, { Component } from "react";
import FlipMove from 'react-flip-move';
 
class TodoItems extends Component {
  constructor(props, context) {
    super(props, context);
 
    this.createTasks = this.createTasks.bind(this);
  }
  
  delete1(key) {
    this.props.delete1(key);
  }

  createTasks(item) {
    return <li onClick={() => this.delete1(item.key)} 
              key={item.key}>{item.text}</li>
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 
    return (
      <ul className="theList">
        <FlipMove duration={250} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
};
 
export default TodoItems;