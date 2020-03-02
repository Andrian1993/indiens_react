import React, { Component, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CustomNavBar from './components/navbar/Navbar';
import Main from './components/Main';
import LoginDialog from './components/dialog/LoginDialog';
import Footer from './components/footer/Footer';

function App() {
  const [userId, setUserId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    if (userId) {
      axios.get('/api/TB_MEMBER/userName', {
        params: {
          token: userId
        }
      })
        .then((res) => {
          setUserName(res.data.data.MEM_NAME);
        });
    }
  }, [userId]);

  function handleLogOut(e) {
    e.preventDefault();
    console.log('App logUserOut: this.state.userID is being set to null');
    setUserId(null);
  }

  function logIn(id) {
    setUserId(id);
    setOpenDialog(!openDialog);
    /* let testUserID = 1;this.state.openDialog
        console.log(
            "App logUserIn: this.state.userID is being set to " + testUserID
        );
        this.setState({ userID: testUserID }); */
  }

  function toggleDialog(e) {
    e.preventDefault();
    setOpenDialog(!openDialog);
  }

  return (
    <div>
      <CustomNavBar onLogIn={toggleDialog} onLogOut={handleLogOut} userID={userId} userName={userName} />
      <Main />
      <Footer />
      <LoginDialog logIn={logIn} openDialog={openDialog} closeDialog={toggleDialog} />
    </div>
  );
}

export default App;
