//Created h1 tag using React

const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, "This is h1 tag"), React.createElement('h2', {}, "This is h2 tag")]
    ),
    React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, "This is h1 tag"), React.createElement('h2', {}, "This is h2 tag")]
    )]
)


const heading = React.createElement('h1', { id: "heading" }, 'Hello World from React');
console.log(heading)

//Creaate root, where all the react code will run
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);