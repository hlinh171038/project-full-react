import React from 'react'
import styled from 'styled-components'
// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; 
//redux
import {Provider} from 'react-redux'
import {store} from './component/store'
//component
import Header from './component/Header'
import NavbarHeader from './component/NavbarHeader'
import Footer from './component/Footer'
import ProductList from './component/ProductList'

import './App.css';

function App() {
  return (
    <Provider store={store} >
      <AppWrap className="App">
        <Router>
        <NavbarHeader/>
        <Switch>
          <Route exact path="/product">
            <ProductList />
          </Route>
        </Switch>
        <Footer/>
        </Router>
      </AppWrap>
    </Provider>
  );
}

export default App;

const AppWrap = styled.div`
  height:100vh;
  position:relative
`


