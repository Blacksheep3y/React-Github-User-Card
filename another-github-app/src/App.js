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
    e.preventDefault();

    fetch(this.state.github.avatar_url)
      .then(res => res.json())
      .then(githubber => this.setState({ github: githubber }))
      .catch(err => console.log("Err: ", err));
  };

  render() {
    return (
      <div>
        <h1>Hello Github User!</h1>
        <input
          type="text"
          value={this.state.githubText}
          onChange={this.handleChanges}
        />
        <button onClick={this.fetchGithub}>Fetch Github User Image</button>
        <p>{this.state.github.login}</p>
        <img src={this.state.github.avatar_url} />
        {/* Console.log GITHUB DATA */}
        {console.log('THIS IS this.state:', this.state) }
      </div>
    );
  }
}

export default App;