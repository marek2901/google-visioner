import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import ItemsGrid from './ItemsGrid';
import ItemPreview from './ItemPreview'
import AddImageDialog from './AddImageDialog'

import styled from 'styled-components';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {AppWrapper, ItemsGridWrapper, PreviewWrapper} from '../widgets/grid-wrappers';

import floatingBtnStyle from '../style-consts/FloatingBtnStyle';

class RootAppComponent extends React.Component {
  state = {
    dialog: false,
    previewedItem: null
  }

  showDialog = () => {
    this.setState({ dialog: true })
  }

  hideDialog = () => {
    this.setState({ dialog: false })
  }

  handleTileClick = tile => {
    this.setState({previewedItem: tile})
  }

  hidePreview = () => {
    this.setState({previewedItem: null})
  }

  render = () => <div>
    <AppBar
      title="Awesome Google Visioner app"
      iconStyleLeft={{display: 'none'}}
      iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    <AppWrapper>
      <ItemsGridWrapper><ItemsGrid onTileClick={this.handleTileClick}/></ItemsGridWrapper>
      {this.state.previewedItem && <PreviewWrapper>
        <ItemPreview onClose={this.hidePreview} itemData={this.state.previewedItem}/>
      </PreviewWrapper>}
    </AppWrapper>
    <FloatingActionButton onClick={this.showDialog} style={floatingBtnStyle}>
      <ContentAdd />
    </FloatingActionButton>
    {this.state.dialog && <AddImageDialog onClose={this.hideDialog} />}
  </div>
}

export default () => <MuiThemeProvider>
  <RootAppComponent />
</MuiThemeProvider>
