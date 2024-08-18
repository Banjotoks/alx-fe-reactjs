import React from "react";
import { link } from react-router-dom;

function Navbar() {
    return (
        <nav style={{ padding: '10px', backgroundColor: 'blue', color: 'black', display:'flex', justifyContent: 'center' }}>
        <link to="/" style={{ padding: '15px', color: 'black' }}>Home</link>
        <link to="/about" style={{ padding: '15px', color: 'black' }}>About</link>
        <link to="/services" style={{ padding: '15px', color: 'black' }}>Services</link>
        <Link to="/contact" style={{padding: '15px', color:'black'}}>Contact</Link>
        </nav>

        

    );
}

export default Navbar;