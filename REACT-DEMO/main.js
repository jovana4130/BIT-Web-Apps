const rootElement = document.getElementById('root');

const reactRootElement = ReactDOM.createRoot(rootElement);



const paragraphReactElement = React.createElement('p', {className: 'title'}, null, 'Hello World');