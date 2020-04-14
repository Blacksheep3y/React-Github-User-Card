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
    // .then(res => console.log('Before: ', res))
    .then(res => res.json())
    // .then(res => console.log('After: ', res))
    .then(githubber => {this.setState({ github: githubber})})
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
    // console.log(this.state);
    return (
      <div>
        <h1>Hello Github User!</h1>
        {/* <div className="github">
          {this.state.github.map(githubber => (
            <img width="200" src={githubber} alt={githubber} />
          ))}
        </div> */}
        <p>{this.state.github.login}</p>
        <img src={this.state.github.avatar_url} />
        {console.log('THIS IS this.state:', this.state) }
      </div>
    );
  }
}

export default App;