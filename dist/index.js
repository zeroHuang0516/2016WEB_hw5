'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

var TodoApp = function (_React$Component) {
	_inherits(TodoApp, _React$Component);

	function TodoApp(props) {
		_classCallCheck(this, TodoApp);

		var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props));

		_this.state = {
			count: 0,
			todos: [{
				value: '',
				completed: false
			}],
			text: ''
		};
		_this.handleEnter = _this.handleEnter.bind(_this);
		_this.updateValue = _this.updateValue.bind(_this);
		return _this;
	}

	_createClass(TodoApp, [{
		key: 'handleEnter',
		value: function handleEnter(ele) {
			if (ele.keyCode === 13 && ele.target.value !== '') {
				this.setState({
					count: this.state.count + 1,
					todos: this.state.todos.concsat([{
						value: this.state.text.trim(),
						completed: false
					}])
				});
				this.updateValue('');
				console.log("enter on");
			}
		}
	}, {
		key: 'updateValue',
		value: function updateValue(e) {
			this.setState({
				value: e.target.value
			});
		}
	}, {
		key: 'render',
		value: function render() {
			for (var i = 0; i < this.state.todos.length; i += 1) {
				if (!this.state.todos[i].completed) {
					this.setState({
						count: this.state.count += 1
					});
				}
			}
			return React.createElement(
				'section',
				{ className: 'todoapp' },
				React.createElement(
					'header',
					{ className: 'header' },
					React.createElement(
						'h1',
						null,
						'todos'
					),
					React.createElement('input', { 'class': 'new-todo', placeholder: 'What needs to be done?', autofocus: true,
						onKeyPress: this.handleEnter,
						onChange: this.updateValue,
						value: this.state.text })
				),
				React.createElement(
					'section',
					{ 'class': 'main' },
					React.createElement('input', { className: 'toggle-all', type: 'checkbox' }),
					React.createElement(
						'label',
						{ htmlFor: 'toggle-all' },
						'Mark all as complete'
					),
					React.createElement(
						'ul',
						{ 'class': 'todo-list' },
						this.state.todos.map(function (todo, index) {
							return React.createElement(TodoItem, { value: todo.value,
								completed: todo.completed });
						})
					)
				),
				React.createElement(CountDisplay, { count: this.state.count })
			);
		}
	}]);

	return TodoApp;
}(React.Component);

var CountDisplay = function (_Component) {
	_inherits(CountDisplay, _Component);

	function CountDisplay() {
		_classCallCheck(this, CountDisplay);

		return _possibleConstructorReturn(this, (CountDisplay.__proto__ || Object.getPrototypeOf(CountDisplay)).apply(this, arguments));
	}

	_createClass(CountDisplay, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'span',
				{ className: 'todo-count' },
				this.props.count
			);
		}
	}]);

	return CountDisplay;
}(Component);

var FOOTER = function (_Component2) {
	_inherits(FOOTER, _Component2);

	function FOOTER() {
		_classCallCheck(this, FOOTER);

		return _possibleConstructorReturn(this, (FOOTER.__proto__ || Object.getPrototypeOf(FOOTER)).apply(this, arguments));
	}

	_createClass(FOOTER, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'footer',
				{ className: 'footer' },
				React.createElement(CountDisplay, { count: this.props.count }),
				React.createElement(
					'button',
					{ className: 'clear-completed' },
					'Clear completed'
				)
			);
		}
	}]);

	return FOOTER;
}(Component);

var TodoItem = function (_Component3) {
	_inherits(TodoItem, _Component3);

	function TodoItem() {
		_classCallCheck(this, TodoItem);

		return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
	}

	_createClass(TodoItem, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'div',
				{ className: 'view' },
				React.createElement(
					'label',
					null,
					this.props.Value
				)
			);
		}
	}]);

	return TodoItem;
}(Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));