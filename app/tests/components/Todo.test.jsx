var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');

describe('Todo', () => {
    it ('should exist', () => {
        expect(Todo).toExist();
    });

        it('should call onToggle prop with id on click', () => {
        const todoData = {
            id: 199,
            text: 'Write todo.test.jsx test',
            completed: true
        };
        const spy = expect.createSpy();
        const todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy} />);
        const $el = $(ReactDOM.findDOMNode(todo));
        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(199);

        // todoApp.setState({todos: [todoData]});

        // // check that todos first item has completed cvalue of false
        // expect(todoApp.state.todos[0].completed).toBe(false);
        // // call handleToggle with
        // todoApp.handleToggle(11);
        // // verify that value changed
        // expect(todoApp.state.todos[0].completed).toBe(true);
    });
})