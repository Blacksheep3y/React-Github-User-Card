import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Nav from './components/Nav';
import User from './components/User';
import Followers from './components/Followers';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: [],
      githubText: ''
    };
  }

  componentDidMount() {
    fetch('https://api.github.com/users/Blacksheep3y')
    .then(res => res.json())
    .then(githubber => {
      this.setState({ github: githubber });
    })
    .catch(err => {
      console.log("Err: ", err);
    });
  }
  
  componentDidUpdate(prevProps, prevState) {
    // update the state
    if (prevState.github !== this.state.github) {
      console.log("New Github User!");
    }
  }

  handleChanges = e => {
    this.setState({ githubText: e.target.value });
  };

  render() {
    return (
      <div>
          {/* Console.log GITHUB DATA */}
          {console.log('THIS IS this.state:', this.state) }
        
        <Route path="/">
           <Nav />
        </Route>
        <Route exact path="/">
          <div className="user-black2">
            <h1>Hello Github User {this.state.github.login}!</h1>
          </div>
          <User 
            user={this.state.github.login}
            userImg={this.state.github.avatar_url}
            followers={this.state.github.followers}
            following={this.state.github.following}
            location={this.state.github.location}
            bio={this.state.github.bio}
            />
        </Route>

        <Route exact path="/followers">
        <Followers followers_url={this.state.github.followers_url} />
        </Route>

      </div>
    );
  }
}

export default App;