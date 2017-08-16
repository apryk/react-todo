var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });

    it('should exist', () => {
        expect(TodoAPI).toExist();
    })

    describe('setTodos', () => {
        it('should set valid todos array', () => {
            let todos = [{
                id: 23,
                text: 'Test all file',
                completed: false
            }];
            TodoAPI.setTodos(todos);

            let actualTodos = JSON.parse(localStorage.getItem('todos'));

            expect(actualTodos).toEqual(todos);
        });
        it('should not set invalid todos array', () => {
            var badTodos = {a: 'b'};
            TodoAPI.setTodos(badTodos);
            expect(localStorage.getItem('todos')).toBe(null);
        });
    });

    describe('getTodos', () => {
        it('should return empty array for bad localstorage data', () => {
            let actualTodos = TodoAPI.getTodos();
            expect(actualTodos).toEqual([]);
        });

        it('should return todos if valid array in local storage', () => {
            let todos = [{
                id: 23,
                text: 'Test all file',
                completed: false
            }];
            localStorage.setItem('todos', JSON.stringify(todos));
            let actualTodos = TodoAPI.getTodos();

            expect(actualTodos).toEqual(todos);
        });
    });

    describe('filterTodos', () => {
        var todos = [
            {
                id: 1,
                text: 'Some text',
                completed: true
            },
            {
                id: 2,
                text: 'Some text false',
                completed: false
            },
            {
                id: 3,
                text: 'AAA Some text',
                completed: true
            }
        ];

        it('should return all items if showCOmpleted is true', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true,'');
            expect(filteredTodos.length).toBe(3);
        });

        it('should return non completed todos when showCOmpleted is false', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, false,'');
            expect(filteredTodos.length).toBe(1);
        });
    });
});