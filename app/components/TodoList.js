import React from 'react';
import _ from 'underscore';
import TodoApp from './TodoApp';

export default class TodoList extends React.Component {
  static propTypes = {
    onItemClick: React.PropTypes.func.isRequired,
    items: React.PropTypes.array.isRequired,
    statusFilter: React.PropTypes.bool.isRequired
  }
  render() {
    const { onItemClick, items, statusFilter } = this.props;
    var visibleItems = items.filter((item) => {
        if (statusFilter === null) {
          return true;
        }
        return statusFilter === item.checked;
    });
    return (
        <ul> {
          visibleItems.map((item) => 
            <li  
                style={{marginTop:'5px'}}  
                key={ item.id }>
              <input 
                  type='checkbox' 
                  checked={ item.checked }
                  onChange={ onItemClick.bind(null, item) }>
              </input>
              { item.text }
          </li> 
         )} 
      </ul>    
    );
  }
}; 

 