 import React from 'react';
import { Button } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import TodoList from './TodoList';
import _ from 'underscore';
import FilterButton from './FilterButton';
import { Crearfix } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import styles from './style.css';


export default class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.handleText   = this.handleText.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFilterButtonClick = this.handleFilterButtonClick.bind(this);
		this.getFilterButtons = this.getFilterButtons.bind(this);
		this.state = { items: JSON.parse(localStorage.getItem("todoList")) || [], statusFilter: null};

	}
	//Выводит текст в инпут
	handleText(e){
		this.setState({ text: e.target.value });
	};
	//Создает массив айтемов с другим статусом
	handleChange(item) {
		const newItems = this.state.items.map(function(currentItem) {
			return item.id == currentItem.id ? ({...item, checked: !item.checked}) : currentItem
		});
		localStorage.setItem("todoList", JSON.stringify(newItems));
		this.setState({ items: newItems });		
	};
	// Обработчик фильтр-кнопок сравнивает значение кнопки
	handleFilterButtonClick(filterValue) {	
		this.setState({
			statusFilter: filterValue 
		})
	};
	//Значение фильтр кнопки
	getFilterButtons() {
		return [{
			key: 'all', 
			filterValue: null
		}, {
			key: 'active', 
			filterValue: false
		}, {
			key: 'completed',
			filterValue: true
		}];
	}
	//Обработчик отправки
	handleSubmit(e) {
		e.preventDefault();
		const newItem = {
			text: this.state.text,
			id: Date.now(),
			checked: false,
		};
		const newItems  = [...this.state.items, newItem];
		localStorage.setItem("todoList", JSON.stringify(newItems));
		this.setState((prevState) => ({
			items: [...this.state.items, newItem],		
			text: ''
		}));
	}
	render() {
		const { items, statusFilter } =  this.state;
		const filterButtons = this.getFilterButtons();
		const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
		return (
			 <div className="well" style={wellStyles}>
				<h3 
					style={{margin:'0px 30px'}}>
					TODO:  {this.state.items.filter(function(item) 
					{return !item.checked; }).length } 
				</h3>
				<TodoList 
					items={ items } 
					onItemClick={ this.handleChange } 
					statusFilter={ statusFilter }
				/>
				<Form 
					inline onSubmit={ this.handleSubmit }>
					<input 
						className="form-control" 
						style={{border: '1px solid #000' , margin: '10px'}} 
					 	onChange={ this.handleText } 
					 	value={ this.state.text }  
					/>
					<Button type="submit"
					 	bsStyle="primary">
						{'Add #' + (this.state.items.length + 1)}
					</Button>
				</Form>
				<div> 
					{filterButtons.map((Button) =>
						<FilterButton
							key={ Button.key } 
							text={ Button.key }
							filterValue={ Button.filterValue }
							handleFilterButtonClick={ this.handleFilterButtonClick }		
						/>
					)}
				</div>
			</div>
		);
	}
};

			 
			







	