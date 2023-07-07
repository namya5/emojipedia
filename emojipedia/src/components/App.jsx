import React from "react";
import Card from "./card";
import emoji from "../emoji";

function createEntry(entry)
{
    return (
        <Card key={entry.id} img={entry.img} name={entry.name} desc={entry.desc} />
    );
}
function App()
{
    return (
        <div>
        <div className="heading">
            <h1 className="heading">emojipedia</h1>
        </div>
        <div className="dict">
            {emoji.map(createEntry)}
        </div>
        </div>
    )
}

export default App;