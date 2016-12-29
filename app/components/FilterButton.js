import React, {PropTypes, Component} from 'react';
import TodoApp from './TodoApp';
import TodoList from './TodoList';
import styles from './style.css';
import { Button } from 'react-bootstrap';

export default class FilterButton extends Component {
	static propTypes = {
		filterValue: PropTypes.bool.isRequired,
		text:        PropTypes.string.isRequired,
	}	
	handleClick = () => {
			const {handleFilterButtonClick, filterValue} = this.props; 
			handleFilterButtonClick(filterValue)		
	}
	render() {
		const { text } = this.props; 
		return (
			<Button
				style={{marginLeft: '10px' }}
				onClick={this.handleClick}>
				{ text }
			</Button>   
		);
	}
};



