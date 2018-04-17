import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class AddImageDialog extends React.Component {
  handleClose = () => {
    this.props.onClose();
  };

  handleSubmitImage = () => {
    alert('Image sent');
    this.handleClose();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        keyboardFocused={false}
        onClick={this.handleClose}
      />,<FlatButton
        label="Submit Image"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleSubmitImage}
      />,
    ];

    return <Dialog
      title="Add new photo !!"
      actions={actions}
      modal={false}
      open={true}
      onRequestClose={this.handleClose}>
    </Dialog>;
  }
}
