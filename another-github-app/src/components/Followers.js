import React from 'react';
import Follower from './Follower';

class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
        followers: []
        };
    }

    componentDidMount() {
        fetch('https://api.github.com/users/Blacksheep3y/followers')
        .then(res => res.json())
        .then(gitfollower => {
        this.setState({ followers: gitfollower });
        })
        .catch(err => {
        console.log("Err: ", err);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        // update the state
        if (prevState.followers !== this.state.followers) {
        console.log("Github Followers!");
        }
    }

    render() {
        return (
          <div>
          <Follower
            follower_login={this.state.followers.map(x => x.login)}
            follower_avatar_url={this.state.followers.map(x => x.avatar_url)}
            follower_url={this.state.followers.map(x => x.url)}
            follower_followers_url={this.state.followers.map(x => x.followers_url)}
            follower_following_url={this.state.followers.map(x => x.following_url)}
          />

          {/* MY OLD CONSOLE.LOGS: 
          {console.log('Followers JS (this.state ONLY):', this.state) }
          {console.log('Followers JS (this.state.FOLLOWERS.map[]):', this.state.followers.map(x => x)) }
          {console.log('Followers JS (this.state.FOLLOWERS.map[].login):', this.state.followers.map(x => x.login)) } */}
          </div>
        );
      }
};

export default Followers;