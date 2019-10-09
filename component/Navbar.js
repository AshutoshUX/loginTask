import React from 'react';
import {Link} from 'react-router-dom';
import '../style.css';

class Navbar extends React.Component {

    render() {
        return (

            <div className="navbar">
                <Link to="/">Home</Link>
            </div>

        );
    }

}

export default Navbar;