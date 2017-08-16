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
        filteredTodos = filteredTodos.filter((todo) => {
            let text = todo.text.toLowerCase();
            
            return searchText.length === 0 || text.indexOf(searchText) > -1;
        });

        // sort todos with nono-completed first
        filteredTodos.sort((a, b) => {
            // -1 then a > b, 1 then b > a, 0 therwise
            if (a.completed === false && b.completed === true) {
                return -1;
            } else if (a.completed && !b.completed) {
                return 1;
            } else {
                return 0;
            }
            
        });

        return filteredTodos;
    }
};