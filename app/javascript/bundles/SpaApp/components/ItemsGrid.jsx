import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import CallMade from 'material-ui/svg-icons/communication/call-made';

import styled from 'styled-components';

const MissingMessage = styled.div`
  width: 100vw;
  height: 400px;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
`

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://picsum.photos/400/200',
    title: 'Breakfast',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Tasty burger',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Camera',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Morning',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Hats',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Honey',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Vegetables',
    upladedAt: '20-01-2011',
  },
  {
    img: 'https://picsum.photos/400/200',
    title: 'Water plant',
    upladedAt: '20-01-2011',
  },
];

export default props => {
  if(!tilesData.length)
    return <MissingMessage>No items available</MissingMessage>

  return <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}>
      {tilesData.map((tile, index) => <GridTile
        key={`${tile.img}${index}`}
        title={tile.title}
        actionIcon={<IconButton onClick={()=>{props.onTileClick(tile)}}>
          <CallMade color="white" />
        </IconButton>}
        subtitle={<span>uploaded <b>{tile.upladedAt}</b></span>}>
        <img src={tile.img} />
      </GridTile>)}
    </GridList>
  </div>
}
