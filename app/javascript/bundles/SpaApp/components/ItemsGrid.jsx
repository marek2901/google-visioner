import React from 'react';
import {connect} from 'react-redux'

import {setPreviewImage} from '../actions/generators'

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

const ItemsGrid = props => {
  const tilesData = props.tilesData.toJS()

  if(!tilesData.length)
    return <MissingMessage>No items available</MissingMessage>

  return <div style={styles.root}>
    <GridList
      cellHeight={180}
      style={styles.gridList}>
      {tilesData.map((tile, index) => {
          const {
            title,
            createdAt,
            file
          } = tile.attributes

          return <GridTile
            key={`${title}${index}`}
            title={title}
            actionIcon={<IconButton onClick={()=>{props.showPreview(tile)}}>
              <CallMade color="white" />
            </IconButton>}
            subtitle={<span>uploaded <b>{createdAt}</b></span>}>
            <img src={file} />
          </GridTile>
        })
      }
    </GridList>
  </div>
}

const mapStateToProps = (state) => {
  return {
    tilesData: state.images.get('dataArray')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showPreview: (itemData) => { dispatch(setPreviewImage(itemData)) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemsGrid)
