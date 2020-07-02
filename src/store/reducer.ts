import { combineReducers } from 'redux';
import { reducer as indexReducer } from '../page/index/store/index';
import { IIndexDefaultState } from '../page/index/store/reducer';

export interface IReducers {
    index: IIndexDefaultState;
}

const reducers = combineReducers<IReducers>({
    index: indexReducer,

})

export default reducers;