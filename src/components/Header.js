import React from "react";
import Troll_Face from "/Users/salahbensarar/Documents/Web/memegenerator/src/assets/Troll_Face.png"
function Header(){
    return (
        <header className="header">
            <img
                src={Troll_Face}
                className="header--image"
                alt="Meme"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}
export default Header;