
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {createUserProfileDocument,auth} from './firebase/firebase.utils';

const HatsPage=()=>(
  <div>
    <h1>HATS PAGE </h1>
  </div>
)

class App extends React.Component {
constructor(){
  super();  

  this.state ={
    currentUser:null
  }
}

unsubscribeFromAuth= null

componentDidMount(){
 this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
    // this.setState({ currentUser: user});

if(userAuth){
  const userRef = await createUserProfileDocument(userAuth);
  userRef.onSnapshot(snapShot=>{
   this.setState({
     currentUser:{
       id:snapShot.id,
       ...snapShot.data()
     }
   }
  )
  console.log(this.state)
})
  
}
this.setState({currentUser: userAuth});
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div >
    <Header currentUser={this.state.currentUser} />
    <Switch>
 <Route exact path='/' component={HomePage} />
 <Route exact path='/shop' component={ShopPage} />
 <Route exact path='/signin' component={SignInAndSignUpPage} />
  <Route exact path='/shop/hats' component={HatsPage} />
 </Switch>
    </div>
  );
}
  
}

export default App;
