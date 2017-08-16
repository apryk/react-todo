var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it ('should exist', () => {
        expect(TodoApp).toExist();
    });

    it ('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'test text';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

        todoApp.setState({todos: []});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe(todoText);

        // expect createdAt to be a number
        expect(todoApp.state.todos[0].createdAt).toBeA('number');
    });

    it('should toggle completed value when handleToggle called', () => {
        const todoData = {
            id: 11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completedAt: undefined
        };
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that todos first item has completed cvalue of false
        expect(todoApp.state.todos[0].completed).toBe(false);
        // call handleToggle with
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(true);
        // expect completedAt to be a number

        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });

    // teset that when toggle from true to false completedAt get removed
    it('should toggle todo from completed to incomplete', () => {
        const todoData = {
            id: 11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completedAt: 123
        };
        const todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        todoApp.setState({todos: [todoData]});

        // check that todos first item has completed cvalue of false
        expect(todoApp.state.todos[0].completed).toBe(true);
        // call handleToggle with
        todoApp.handleToggle(11);
        // verify that value changed
        expect(todoApp.state.todos[0].completed).toBe(false);
        // expect completedAt to be a number

        expect(todoApp.state.todos[0].completedAt).toNotExist();
    });
})