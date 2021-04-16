import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './TodoApp';
import {AppProvider} from './context/context'


ReactDOM.render(
    <AppProvider>
        <TodoApp />
    </AppProvider>, document.getElementById('root'));