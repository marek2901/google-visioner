import React from 'react'
import { Field, Form, reduxForm } from 'redux-form'
import { addNewFile, hideDialog } from '../actions/generators'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

import {
  TextField
} from 'redux-form-material-ui'

import FileInput from '../widgets/FileInput'

const required = value => (value ? undefined : 'Required')

class AddImageDialog extends React.Component {
  state = {
    file: null
  }

  handleClose = () => {
    this.props.dispatch(hideDialog())
  };

  onFormSubmit = (data) => {
    setTimeout(() => this.props.dispatch(addNewFile(data)))

    return new Promise(() => {})
  }

  render() {
    const { handleSubmit } = this.props;

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
        onClick={handleSubmit(this.onFormSubmit)}
      />,
    ];

    return <Dialog
      title="Add new photo !!"
      actions={actions}
      modal={false}
      open={true}
      onRequestClose={this.handleClose}>

      <div style={{textAlign: 'center', width: '100%'}}>
        <Form onSubmit={handleSubmit(this.onFormSubmit)}>
          <div>
            <Field
              validate={required}
              name="title"
              hintText="Title"
              component={TextField}/>
          </div>
          <div>
            <label>Image File: </label>
            <Field
              name="file"
              validate={required}
              component={FileInput}/>
          </div>
        </Form>
      </div>
    </Dialog>;
  }
}

export default reduxForm(
  {form: 'newImageUpload'}
)(AddImageDialog)
