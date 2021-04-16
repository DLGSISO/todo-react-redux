import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Landing = () => {
    let history = useHistory();
    return (
        <div>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Landing;
