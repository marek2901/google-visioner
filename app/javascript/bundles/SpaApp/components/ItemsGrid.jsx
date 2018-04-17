import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
export default () => (
  <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>uploaded <b>{tile.upladedAt}</b></span>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);
