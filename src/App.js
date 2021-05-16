
import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import {createUserProfileDocument,auth} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

class App extends React.Component {


unsubscribeFromAuth= null

componentDidMount(){
  

 this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
    // this.setState({ currentUser: user});

if(userAuth){
  const {setCurrentUser} =this.props;
  const userRef = await createUserProfileDocument(userAuth);
  userRef.onSnapshot(snapShot=>{
   setCurrentUser({
       id:snapShot.id,
       ...snapShot.data()
     }
   
  )

})
  
}
setCurrentUser(userAuth);
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

render(){
  return (
    <div >
    <Header />
    <Switch>
 <Route exact path='/' component={HomePage} />
 <Route exact path='/shop' component={ShopPage} />
 <Route exact path='/signin' component={SignInAndSignUpPage} />
  {/* <Route exact path='/shop/hats' component={HatsPage} /> */}
 </Switch>
    </div>
  );
}
  
}

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
