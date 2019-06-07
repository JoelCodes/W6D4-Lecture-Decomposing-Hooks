import React from 'react';
import {render} from 'react-dom';
import '@babel/polyfill';
import { TodoListApp } from './src/app';

render(<TodoListApp/>, document.getElementById('react-root'));