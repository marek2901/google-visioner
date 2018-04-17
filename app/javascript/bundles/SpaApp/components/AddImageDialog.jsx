import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class AddImageDialog extends React.Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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
      title="Dialog With Date Picker"
      actions={actions}
      modal={false}
      open={this.state.open}
      onRequestClose={this.handleClose}>
    </Dialog>;
  }
}
