const rootElement = document.getElementById('root');
const reactRootElement = ReactDOM.createRoot(rootElement);



/*const helloSpanElement = React.createElement('span', null, 'Hello');
const worldSpanElement = React.createElement('span', null, 'World');
const paragraphReactElement = React.createElement(
    'ul', 
    null, 
    React.createElement('li', null, React.createElement('p', null, Item 1')),
    React.createElement('li', null, React.createElement('p', null, Item 1')),
);*/




const appEl = (
    <MovieList>
        <MovieItem>
        <li><p>Item 1</p></li>
        </MovieItem>
        <MovieItem>
        <li><p>Item 2</p></li>
        </MovieItem>
        <MovieItem>
        <li><p>Item 3</p></li>
        </MovieItem>
        <li><p>Item 4</p></li>
        <li><p>Item 5</p></li>
        <li><p>Item 6</p></li>
        <li><p>Item 7</p></li>
        <li><p>Item 8</p></li>
    </MovieList>
);

reactRootElement.render(appEl);