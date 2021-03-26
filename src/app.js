import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 560, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 120, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500 , createdAt:1600}));
//store.dispatch(setTextFilter('bill'));

const { expenses, filters } = store.getState();

const visibleExpensives = getVisibleExpenses(expenses, filters);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 