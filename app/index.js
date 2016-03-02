var React = require('react'),
ReactDOM = require('react-dom'),
HelloWorld = React.createClass({
  render: () => {
    return (
      <div>
        Hello World!
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
