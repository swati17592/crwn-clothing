import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument  } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInSignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
