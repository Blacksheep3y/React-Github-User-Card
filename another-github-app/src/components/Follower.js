import React from 'react';
import { Link } from "react-router-dom";

const Follower = props => {
    return (
      <div>
        <h1>On a side note - links do not actually work because it redericts using the 'localhost' within the url, I have an idea on how to fix it, but all good you get the point.</h1>
        <div className="my-followers">
          <dl className="follower-1">
              <dt className="follower-login-name">{props.follower_login[0]}</dt>
              <img src={props.follower_avatar_url[0]} alt="A person of distinct heritage." />
              <p>Check out my <Link to={props.follower_url[0]}>Github Page</Link></p>
              <p>This is who <Link to={props.follower_followers_url[0]}>Follows Me</Link></p>
              <p>This is who <Link to={props.follower_following_url[0]}>I Follow</Link></p>
          </dl>
          <dl className="follower-2">
              <dt className="follower-login-name">{props.follower_login[1]}</dt>
              <img src={props.follower_avatar_url[1]} alt="A person of distinct heritage." />
              <p>Check out my <Link to={props.follower_url[1]}>Github Page</Link></p>
              <p>This is who <Link to={props.follower_followers_url[1]}>Follows Me</Link></p>
              <p>This is who <Link to={props.follower_following_url[1]}>I Follow</Link></p>
          </dl>
          <dl className="follower-3">
              <dt className="follower-login-name">{props.follower_login[2]}</dt>
              <img src={props.follower_avatar_url[2]} alt="A person of distinct heritage." />
              <p>Check out my <Link to={props.follower_url[2]}>Github Page</Link></p>
              <p>This is who <Link to={props.follower_followers_url[2]}>Follows Me</Link></p>
              <p>This is who <Link to={props.follower_following_url[2]}>I Follow</Link></p>
          </dl>
          <dl className="follower-4">
              <dt className="follower-login-name">{props.follower_login[3]}</dt>
              <img src={props.follower_avatar_url[3]} alt="A person of distinct heritage." />
              <p>Check out my <Link to={props.follower_url[3]}>Github Page</Link></p>
              <p>This is who <Link to={props.follower_followers_url[3]}>Follows Me</Link></p>
              <p>This is who <Link to={props.follower_following_url[3]}>I Follow</Link></p>
          </dl>
        </div>
        </div>
      );
};

export default Follower;