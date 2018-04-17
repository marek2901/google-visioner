import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import IconButton from 'material-ui/IconButton';
import ActionClose from 'material-ui/svg-icons/navigation/close';

export default () => (
  <Card>
    <CardHeader
      title={<div>
        <IconButton> <ActionClose/> </IconButton>
      </div>}
    />
    <CardMedia
      overlay={<CardTitle title="Card title"/>}>
      <img src="https://picsum.photos/400/200" alt="" />
    </CardMedia>
    <CardTitle subtitle="uploaded on 20-01-2011" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardMedia
      overlay={<CardTitle title="Vision representation"/>}>
      <img src="https://picsum.photos/400/200" alt="" />
    </CardMedia>
    <CardActions>
      <FlatButton secondary={true} label="Delete" />
    </CardActions>
  </Card>
);
