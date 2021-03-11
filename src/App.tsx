import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './shared/components/Layout';
import Home from './app/pages/Home';
import SignIn from './app/pages/SignIn';

const firebaseConfig = {
  apiKey: 'AIzaSyAkn5q8cXBbSDPdjSVj9ti0Ga6m8mbUydQ',
  authDomain: 'butterfly-v0.firebaseapp.com',
  databaseURL: 'https://butterfly-v0-default-rtdb.firebaseio.com',
  projectId: 'butterfly-v0',
  storageBucket: 'butterfly-v0.appspot.com',
  messagingSenderId: '394739257069',
  appId: '1:394739257069:web:9a147512ab5bdacf7686e4',
  measurementId: 'G-T3D4TYZ2KY',
};
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// firebase.analytics();

function App() {
  return (
    <Box component={Paper} minHeight="100vh">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/sign-in" exact>
            <Layout>
              <SignIn />
            </Layout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
  );
}

export default App;
