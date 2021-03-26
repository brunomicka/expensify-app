import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => (
    {
        type: 'INCREMENT',
        incrementBy
    });

const decrementCount = ({decrementBy = 1 } = {}) => (
    {
        type: 'DECREMENT',
        decrementBy
    }
);

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 1} = {}) => ({
    type: 'SET',
    count
});

//REDUCERS
//1. Reducers are pure functions
//2. Never change state or action

const countReducers = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return state;
    }
};

const store = createStore(countReducers);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());
 
//unsubscribe();

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 40}));

store.dispatch(setCount({count: 42}));

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'SET',
//     count: 101
// })