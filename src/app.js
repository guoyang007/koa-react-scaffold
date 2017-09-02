import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import { Router, Route,Switch } from "react-router-dom";
import { AppContainer } from 'react-hot-loader'
import * as mobx from "mobx";
import {Provider} from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import indexStore from "./stores/indexStore"
import 'normalize.css';
import Layout from './pages/layout'
mobx.useStrict(true);


const browserHistory = createBrowserHistory();
const routingStore = new RouterStore();
const stores={
  routing: routingStore,
  indexStore:indexStore
}
const history = syncHistoryWithStore(browserHistory, routingStore);

export default class App extends Component{
  render(){
    return (
      <Provider {...stores}>
        <Router history={ history }>
            <Route path='/:id'>
                   <Layout />
            </Route>
        </Router>
      </Provider>
      )
  }
}

