import { combineReducers } from 'redux'

import album from './album'
import favorites from './favorites'

export default combineReducers({
	album,
	favorites
})