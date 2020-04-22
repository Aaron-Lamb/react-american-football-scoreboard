import React from 'react';

//A component to write the team div
const TeamCreator = (props) => {
    return (
        //The Main div
        <div className={props.side}>
            {/* The header for the name */}
            <h2 className={props.sideName}>{props.name}</h2>
            {/* The Div for the score */}
            <div className={props.sideScore}>{props.score}</div>
        </div>
    )
}

export default TeamCreator;