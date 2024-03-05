import React from "react";

export default function Practice()
{
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }

    const thingsElements = things.map(thing => <h1 key={thing}>{thing}</h1>)

    return (
        <div>
            <button className="AddNew" onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
} 