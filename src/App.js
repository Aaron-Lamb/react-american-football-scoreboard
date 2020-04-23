//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TeamCreator from './components/Team';
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
const [homeScore, setHomeScore] = useState(0);
const [awayScore, setAwayScore] = useState(0);
// This function will add the correct score to the state
const handlerFunc = (setScore, team, amount) => {
  return setScore(team + amount);
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
         {/* My custom team component with appropriate props */}
          <TeamCreator 
          side='home'
          sideName='home__name'
          name='Lions'
          sideScore='home__score'
          score={homeScore}
          />
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
          <div className="timer">00:03</div>
          {/* My custom team component with appropriate props */}
          <TeamCreator 
          side='away'
          sideName="away__name"
          name='Tigers'
          sideScore='away__score'
          score={awayScore}
          />
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}

          {/* The handler function is passed into the onClick here */}
          <button className="homeButtons__touchdown" onClick={ () => handlerFunc(setHomeScore, homeScore, 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={ () => handlerFunc(setHomeScore, homeScore, 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={ () => handlerFunc(setAwayScore, awayScore, 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={ () => handlerFunc(setAwayScore, awayScore, 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
