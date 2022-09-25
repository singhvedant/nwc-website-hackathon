var __html = require('node_modules\globe.gl\example\random-arcs\index.html');
var template = { __html: __html };

React.module.exports = React.createClass({
  render: function() {
    return(
      <div dangerouslySetInnerHTML={template} />
    );
  }
});