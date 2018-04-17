import React from 'react';

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';

export default props => <Card>
  <CardHeader
    title={<div>
      <IconButton onClick={props.onClose}> <ActionClose/> </IconButton>
    </div>}
  />
  <CardMedia
    overlay={<CardTitle title={props.itemData.title}/>}>
    <img src={props.itemData.img} alt="" />
  </CardMedia>
  <CardTitle subtitle={`uploaded at ${props.itemData.upladedAt}`} />
  <CardText>
    Contains some sea views
  </CardText>
  <CardMedia
    overlay={<CardTitle title="Vision representation"/>}>
    <img src={props.itemData.img} alt="" />
  </CardMedia>
  <CardActions>
    <FlatButton secondary={true} label="Delete" />
  </CardActions>
</Card>
