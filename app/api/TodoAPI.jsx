var $ = require('jquery');
module.exports = {
    setTodos: function(todos) {
        if ($.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        return todos;
    },
    getTodos: function() {
        let stringTodos = localStorage.getItem('todos');
        let todos = [];
        
        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {
            console.log(e);
        }

        return $.isArray(todos) ? todos : [];
    },
    filterTodos: function(todos, showCompleted, searchText) {
        var filteredTodos = todos;

        // filter by show completed
        filteredTodos = filteredTodos.filter((todo) => {
            return !todo.completed  || showCompleted;
        });

        // filter by search text
        
        
        return filteredTodos;
    }
};