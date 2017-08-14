var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
    
    it ('should exist', () => {
        expect(TodoList).toExist();
    });


    it('should render one Todo component for each todo item', () => {
        let todos = [{id: 1, text: 'Do smth'},{id: 2, text: 'Check mail'}];
        let todosList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
        let todosComponents = TestUtils.scryRenderedComponentsWithType(todosList, Todo);
        
        expect(todosComponents.length).toBe(todos.length);
    });

})