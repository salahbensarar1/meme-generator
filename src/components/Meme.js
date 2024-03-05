import React from "react";
export default function Meme(){
    function ClickHandle(){
        
            console.log("Get a new meme image  BUTTON")
        
    }
return (
        <main>
            <form className="form" >
               <label className="TopText"> 
                Top Text
                <input
                    type="text"
                    placeholder="Top Text"
                  className="form--input"
            />
            </label>
            <label className="BottomText">
                Bottom Text
                    <input
                    type="text"
                    placeholder="Bottom Text"
                    
                    className="form--input"
                />
            </label>
                <button onClick={ClickHandle} className="form--bu">Get a new meme image 🖼</button>
            </form>
    
        </main>
    );
}