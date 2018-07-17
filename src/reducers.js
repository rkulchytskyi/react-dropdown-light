import { combineReducers } from 'redux';
import {
    COUNTRIES_LIST,
    SELECTED_COUNTRY
} from './actions';

const countriesData = {
    billing: {
        selectedCountryId: '',
        countries: [{
            id: '1',
            name: 'Ukraine'
        },
        {
            id: '2',
            name: 'USA'
        },
        {
            id: '3',
            name: 'England'
        },
        {
            id: '4',
            name: 'Spain'
        },
        {
            id: '5',
            name: 'Poland'
        }]
    },
    shipping: {
        selectedCountryId: '',
        countries: [{
            id: '1',
            name: 'Ukraine'
        },
            {
                id: '2',
                name: 'USA'
            },
            {
                id: '3',
                name: 'England'
            },
            {
                id: '4',
                name: 'Spain'
            },
            {
                id: '5',
                name: 'Poland'
            }]
    }
};

const countriesDataHandle = (state = countriesData, action) => {
    switch (action.type){
        case COUNTRIES_LIST:
            return {...state, countries: action.payload};
        case SELECTED_COUNTRY:
            const {name, value} = action.payload;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    selectedCountryId: value
                }
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    countriesDataHandle
});

export default rootReducer