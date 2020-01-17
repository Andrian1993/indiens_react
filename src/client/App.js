import React, {Component} from 'react';
import './App.css';
import CustomNavBar from "./components/navbar/Navbar";
import Main from "./components/Main";
import LoginDialog from "./components/dialog/LoginDialog";
import Footer from "./components/footer/Footer";


class App extends Component {
  constructor() {
    super();
    let initialUserID = null;
    this.state = {
      userID: initialUserID,
      openDialog: false
    };
    console.log("App constructor: this.state.userID is " + initialUserID);
  }

  handleLogOut = e => {
    e.preventDefault();
    console.log("App logUserOut: this.state.userID is being set to null");
    this.setState({ userID: null });
  };

  handleLogIn = e => {
    e.preventDefault();
    let isOpen = this.state.openDialog;
    this.setState({ openDialog: !isOpen });
    /*let testUserID = 1;this.state.openDialog
    console.log(
        "App logUserIn: this.state.userID is being set to " + testUserID
    );
    this.setState({ userID: testUserID });*/
  };

  render() {
    return (
        <div>
          <CustomNavBar onLogIn={this.handleLogIn} onLogOut={this.handleLogOut} userID={this.state.userID}/>
          <Main />
          <Footer/>
          <LoginDialog handleLogIn={this.handleLogIn} openDialog={this.state.openDialog}/>
        </div>
    );
  }
}

export default App;
