
import React from 'react';
import TodoListPresenter from "./TodoListPresenter";
import useTodoListHook from "./useTodoList";
import * as apiCalls from './api-calls';
import makeTodoListHook from './useTodoList';

const useTodoList = makeTodoListHook(apiCalls);
export function TodoListApp(){
  return <TodoListPresenter {...useTodoList()}/>
}