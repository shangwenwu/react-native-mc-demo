


import { Provider } from 'react-redux'

import store from './Reducers'
import App from './ContainerPage'

console.log('init init')
console.log(store.getState());

store.subscribe(()=>console.log('AAAAAAAA',store.getState()));

import React, {
  View,
  Text,
  Component
} from 'react-native';

class Index extends Component {
	render() {
	    return (
		      <Provider store={store}>
		         <App />
  			  </Provider>
	    );
	  }
}

module.exports = Index;

  