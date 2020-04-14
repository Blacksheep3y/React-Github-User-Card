import React from 'react';

const User = props => {
    console.log(props);
    return (
        <div>
        <dl>
            <dt>{props.user}</dt>
        </dl>
        </div>
      );
};

export default User;