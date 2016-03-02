var React = require('react'),
ReactDOM = require('react-dom'),
HelloWorld = React.createClass({
  render: () => {
    return (
      <div>
        <div>Hello React JS Program!</div>
        <div>Oh, hai!</div>
      </div>
    )
  }
});
ReactDOM.render(<HelloWorld/>, document.getElementById('app'));
