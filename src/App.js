import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

import Demo from './component/index'
import Data from './component/data'
import {Provider} from 'react-redux'
import store from './redux/store/store';

class App extends Component {
  
  render() { 
    return (
      <Provider store={store}> 
     <div className="App">
       {/* <Demo/> */}
       <Data/>

     </div>
     </Provider>
    );
  }
}
 
export default App;

// function App() {
//   return (
//     <Provider store={store}> 
//     <div className="App">
//       <Demo/>
//       {/* <Data/> */}
//     </div>
//     </Provider>
//   );
// }

// export default App;
