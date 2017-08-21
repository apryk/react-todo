var expect = require('expect');
var df = require('deep-freeze-strict');
var moment = require('moment');
var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      let res = reducers.searchTextReducer(df(''), df(action));
      //let res = reducers.searchTextReducer('', action);

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'Walk the cat'
      };
      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
  });

  describe('toggleTodoReducer', () => {
    it('should toggle todo', () => {
      let action = {
        type: 'TOGGLE_TODO',
        id: 1
      };

      let todos = [{
        id: 1,
        text: "Initial todo",
        completed: true,
        createdAt: 123,
        completedAt: 123
      }];
      // res contains new state
      let res = reducers.toggleTodoReducer(df(todos), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
});