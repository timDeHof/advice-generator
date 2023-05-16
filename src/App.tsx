import React from "react";
import { Card } from "./components/card/card";

function App() {
  return (
    <>
      <Card />
      <div className='attribution'>
        Challenge by{" "}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer'>
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href='https://www.frontendmentor.io/profile/timDeHof'>Tim DeHof</a>.
      </div>
    </>
  );
}

export default App;
