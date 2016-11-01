'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _React = React,
    Component = _React.Component;

var TodoApp = function (_Component) {
	_inherits(TodoApp, _Component);

	function TodoApp(props, context) {
		_classCallCheck(this, TodoApp);

		var _this = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this, props, context));

		_this.state = {
			todos: [{
				value: '',
				completed: false
			}],
			text: ''
		};
		_this.updateValue = _this.updateValue.bind(_this);
		_this.handleEnter = _this.handleEnter.bind(_this);
		_this.Destroy = _this.Destroy.bind(_this);
		_this.handleClick = _this.handleClick.bind(_this);
		_this.DisplayLeft = _this.DisplayLeft.bind(_this);
		_this.DisplaytodoItem = _this.DisplaytodoItem.bind(_this);
		return _this;
	}

	_createClass(TodoApp, [{
		key: 'updateValue',
		value: function updateValue(e) {
			this.setState({
				text: e.target.value
			});
		}
	}, {
		key: 'handleEnter',
		value: function handleEnter(ele) {
			if (ele.keyCode === 13 && this.state.text.trim() !== '') {
				this.setState({
					todos: [{ value: this.state.text,
						completed: false }].concat(_toConsumableArray(todos)),
					text: ''
				});
				console.log("enter on");
			};
		}
	}, {
		key: 'Destroy',
		value: function Destroy(idx) {
			this.setState({
				todos: this.state.todos.splice(idx, 1)
			});
		}
	}, {
		key: 'handleClick',
		value: function handleClick(idx) {
			var tmptodos = [].concat(_toConsumableArray(this.state.todos));
			tmptodos[idx].completed = !tmptodos[idx].completed;
			this.setState({ todos: tmptodos });
		}
	}, {
		key: 'DisplayLeft',
		value: function DisplayLeft() {
			var count;
			for (var i = 0; i < this.props.todos.length; i += 1) {
				if (this.props.todos[i].completed) {
					count += 1;
				}
			}
			if (count !== 1) {
				return React.createElement(
					'span',
					null,
					count,
					' items left'
				);
			} else if (count === 1) {
				return React.createElement(
					'span',
					null,
					'1 item left'
				);
			} else {
				return React.createElement(
					'span',
					null,
					'NO items'
				);
			}
		}
	}, {
		key: 'DisplaytodoItem',
		value: function DisplaytodoItem(lists, idx) {
			var _this2 = this;

			return React.createElement(TodoItem, {
				onCheckClick: function onCheckClick() {
					return _this2.handleClick(idx);
				},
				onCancel: function onCancel() {
					return _this2.Destroy(idx);
				},
				content: lists["value"],
				completed: lists["completed"],
				key: idx
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _state = this.state,
			    todos = _state.todos,
			    text = _state.text;

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
					React.createElement('input', { className: 'new-todo',
						value: text,
						onChange: this.updateValue,
						onKeyDown: this.handleEnter,
						placeholder: 'What needs to be done?',
						autofocus: true })
				),
				React.createElement(
					'ul',
					{ 'class': 'todo-list' },
					todos.map(function (list, idx) {
						return _this3.DisplaytodoItem(list, idx);
					})
				),
				React.createElement(CountDisplay, null)
			);
		}
	}]);

	return TodoApp;
}(Component);

var TodoItem = function (_React$Component) {
	_inherits(TodoItem, _React$Component);

	function TodoItem() {
		_classCallCheck(this, TodoItem);

		return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).apply(this, arguments));
	}

	_createClass(TodoItem, [{
		key: 'render',
		value: function render() {
			var _this5 = this;

			var completed = this.props.completed;

			return React.createElement(
				'li',
				{ className: completed ? "done" : "" },
				React.createElement('input', { className: 'toggle',
					type: 'checkbox',
					checked: completed,
					onChange: function onChange(e) {
						return _this5.props.handleClick();
					} }),
				React.createElement(
					'label',
					null,
					this.props.content
				),
				React.createElement('button', { className: 'delete',
					onChange: function onChange(e) {
						return _this5.props.Destroy();
					} })
			);
		}
	}]);

	return TodoItem;
}(React.Component);

var CountDisplay = function (_React$Component2) {
	_inherits(CountDisplay, _React$Component2);

	function CountDisplay() {
		_classCallCheck(this, CountDisplay);

		return _possibleConstructorReturn(this, (CountDisplay.__proto__ || Object.getPrototypeOf(CountDisplay)).apply(this, arguments));
	}

	_createClass(CountDisplay, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'footer',
				{ className: 'todo-count' },
				this.props.DisplayLeft()
			);
		}
	}]);

	return CountDisplay;
}(React.Component);

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById('root'));