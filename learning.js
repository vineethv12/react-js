import React from 'react';
import ReactDOM from 'react-dom/client';

/* //React Element

const heading = React.createElement('h1', { id: "heading" }, "Rendering React"); */

// JSX React
// const jsxHeading = <h1 id="heading">Writing React in JSX</h1>;

//React Functional Compenent

const span = <span>React Element </span>

const Title = () => (
    <h1 className='title'>{span}
        Title JSX</h1>
)

const data = 1000

const HeadingComponent = () => (
    <div id="container">
        {/* {data} */}
        {/* {Title()} */}
        {/* <Title />
        <Title></Title> */}
        <h1 className='heading'>Functional Compenent</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);