import React from 'react';

const User = props => {
    console.log(props);
    return (
        <div>
        <dl className="user-black">
            <dt className="user2">{props.user}</dt>
            <img src={props.userImg} />
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <p className="local">Location: {props.location}</p>
            <p className="local">Bio: {props.bio}</p>
        </dl>
        </div>
      );
};

export default User;