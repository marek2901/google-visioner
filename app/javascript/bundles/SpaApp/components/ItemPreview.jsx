import React from 'react';
import {connect} from 'react-redux';
import { setPreviewImage } from '../actions/generators'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';

const ItemPreview = props => {
  const imageData = props.image.get('attributes').toJS()
  const {
    title,
    labels,
    createdAt,
    file,
    visionFile
  } = imageData

  return <Card>
    <CardHeader
      title={<div>
        <IconButton onClick={props.onClose}> <ActionClose/> </IconButton>
      </div>}
    />
    <CardMedia
      overlay={<CardTitle title={title}/>}>
      <img src={file} alt="" />
    </CardMedia>
    <CardTitle subtitle={`uploaded at ${createdAt}`} />
    <CardText>
      Labels:
      <ul>
        {labels.map(label => <li key={label}>{label}</li>)}
      </ul>
    </CardText>
    <CardMedia
      overlay={<CardTitle title="Vision representation"/>}>
      <img src={visionFile} alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton secondary={true} label="Delete" />
    </CardActions>
  </Card>
}

const mapStateToProps = (state) => {
  return {
    image: state.images.get('previewedImage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: ()=>{ dispatch(setPreviewImage(null)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPreview)
