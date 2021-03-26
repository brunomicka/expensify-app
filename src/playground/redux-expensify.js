import { createStore, combineReducers, $CombinedState } from 'redux';
import { v4 as uuidv4 } from 'uuid';

// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// SET_TEXT_FILTERS
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTERS',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    startDate: date
});

// SET_END_DATE
const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    endDate: date
});

// Expense Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            //returns a new list
            //return state.concat(action.expense);
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filters Reducers
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTERS':
            return {
                ...state,
                text: action.text
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        default:
            return state;
    }
};

//Timestamps (milliseconds)
//January 1st 1970 (unix epoch) = 0

//Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = text === undefined || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        switch (sortBy) {
            case 'date':
                return a.createAt < b.createAt ? 1 : -1;
            case 'amount':
                return a.amount < b.amount ? 1 : -1;
                ``
        }
    });
};

// Store Creation
const store = createStore(
    combineReducers(
        {
            expenses: expenseReducer,
            filters: filtersReducer
        }
    )
);

//---------for testing-----------
//-------------------------------
store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100, createAt: -1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 50, createAt: 1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5 }));

//store.dispatch(setTextFilter('re'));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//  store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
//  store.dispatch(setEndDate(1250));

//-------------------------------
//-------------------------------


const demoState = {
    expenses: [{
        id: 'asasasss',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};



// const user = {
//     name: 'Bruno',
//     age: 24
// };


// console.log({ age: 31, ...user, location: 'Winnipeg' });