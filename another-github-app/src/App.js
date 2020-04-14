import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import Nav from './components/Nav';
import User from './components/User';


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

  fetchGithub = e => {
    // e.preventDefault();

    // fetch(this.state.github.avatar_url)
    //   .then(res => res.json())
    //   .then(githubber => this.setState({ github: githubber }))
    //   .catch(err => console.log("Err: ", err));
  };

  render() {
    return (
      <div>
          {/* <input
            type="text"
            value={this.state.githubText}
            onChange={this.handleChanges}
          />
          <button onClick={this.fetchGithub}>Fetch Github User Image</button> */}
          
          {/* Console.log GITHUB DATA */}
          {console.log('THIS IS this.state:', this.state) }

          {/* EXAMPLE OF PASSING TO PROP: (can call this by doing 'this.state.props.user' <Usercard user={this.state.github.login} /> */}
        <Route path="/">
        <div className="navbar">
        <h1>Hello Github User!</h1>
        <Nav />
        </div>
        <div className="user">
        <User user={this.state.github.login} />
        </div>
        </Route>
      </div>
    );
  }
}

export default App;