import React from 'react';

const User = ({id, name, username, email}) => {
    return (
        <div>
            {id} -- {name}  -- {username}  -- {email}
        </div>
    );
};

export default User;
