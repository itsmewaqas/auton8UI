import { combineReducers } from 'redux';

import lang from './lang';
import theme from './theme';

const rootReducer = combineReducers({

    lang,
    theme

})

export default rootReducer;
