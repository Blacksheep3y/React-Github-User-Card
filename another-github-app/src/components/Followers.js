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
         <Follower login={this.state.followers} />
          {console.log('FOLLOWERS STUFF:', this.state) }
            <dl className="user-black">
                <dt className="user2"></dt>
            </dl>
          </div>
        );
      }
};

export default Followers;