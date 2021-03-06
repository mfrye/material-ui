let React = require('react');
let SvgIcon = require('../../svg-icon');

let CommunicationCallReceived = React.createClass({

  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z"/>
      </SvgIcon>
    );
  }

});

module.exports = CommunicationCallReceived;