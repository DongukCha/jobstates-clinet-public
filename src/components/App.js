import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UserContainer from 'containers/profile/UserContainer';
import AnalysisContainer from 'containers/analysis/AnalysisContainer';
import HeaderContainer from 'containers/header/HeaderContainer';
import JobDetail from 'containers/job/list/JobDetail';
import JobList from 'containers/job/list/JobList';
import JobPostForm from 'containers/job/post/JobPostForm';
import Login from 'containers/login/login';
import getToken from 'containers/login/getToken';
import privateRoute from 'containers/login/privateRoute';
import Logout from 'containers/logout';
import MainPage from 'components/common/MainPage';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

createGlobalStyle`
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing:border-box;
}
`;

const App = () => {
  console.log('App.js rendered');
  return (
    <Switch>
      <div className="App">
        <HeaderContainer />
        <Route path="/" exact render={MainPage} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/user" component={UserContainer} />
        <Route path="/userprofile" component={getToken} />
        <Route path="/joblist" component={JobList} />
        <Route path="/jobpost" component={privateRoute(JobPostForm)} />
        <Route path="/jobdetail" component={JobDetail} />
        <Route path="/analysis" component={privateRoute(AnalysisContainer)} />
      </div>
    </Switch>
  );
};

export default App;
