import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE} from '../action.favoritesActions.js'
import movies from './../data.js';

const intitialState = {
    favorites: {title: movies, id:1},
    displayFavorites: true
}

const reducer = ( state = intitialState, action) => {
    switch(action.type) {
    case(TOGGLE_FAVORITES):
    return ({
        ...state,
        displayFavorites: !state.displayFavorites
        
    })
    case(ADD_FAVORITE):
    return ({
        ...state,
        favorites: [...state.favorites, action.payload]
    })
    case(REMOVE_FAVORITE):
    return({
        ...state,
        favorites: state.filter(item =>(item.id !==action.payload))
    })
        default: 
    return state
    }
}




export default reducer