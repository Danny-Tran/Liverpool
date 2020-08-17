import React from 'react';
import Layout from'./HighOrderComponent/Layout';
import { Switch, Route} from 'react-router-dom';
import Home from './Component/home/Home.js'

const Routes = (props) => {
  return (
    //used switch from router to keep header and header become highOrder
    <Layout>
      <Switch>
        <Route exact component={Home} path='/'/>
      </Switch>      
    </Layout>
  )
}

export default Routes;
