import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      github: [],
      githubText: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://api.github.com/users/Blacksheep3y')
    .then(res => res.data.json())
    .then(githubber => this.setState({ github: githubber.avatar_url }))
    .catch(err => {
      console.log("Err: ", err);
    });
  }
  
  fetchGithub = e => {
    // // e.preventDefault();
  
    // fetch(`https://api.github.com/users/Blacksheep3y`)
    // .then(res => res.json())
    // // .then()
    // .catch(err => {
    //   console.log("Err: ", err);
    // });
  };
  
  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Hello Github User!</h1>
        <div className="github">
          {this.state.github.map(githubber => (
            <img width="200" src={githubber} alt={githubber} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;