import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import PageLogics from './reducers/PageLogics'
import PostsReducer from "./reducers/PostsReducer";

const Reducers = combineReducers({
    Page : PageLogics,
    PostReducer : PostsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(Reducers,composeEnhancers(applyMiddleware(thunk)))

export default Store;
