import React from 'react';

import {connect} from 'react-redux'
import {triggerImagesRequest} from '../actions/generators'

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
    dialog: false
  }

  componentDidMount() {
    this.props.loadData()
  }

  showDialog = () => {
    this.setState({dialog: true})
  }

  hideDialog = () => {
    this.setState({dialog: false})
  }

  render = () => <div>
    <AppBar
      title="Awesome Google Visioner app"
      iconStyleLeft={{display: 'none'}}
      iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    <AppWrapper>
      <ItemsGridWrapper><ItemsGrid/></ItemsGridWrapper>
      {this.props.previewedItem && <PreviewWrapper>
        <ItemPreview />
      </PreviewWrapper>}
    </AppWrapper>
    <FloatingActionButton onClick={this.showDialog} style={floatingBtnStyle}>
      <ContentAdd />
    </FloatingActionButton>
    {this.state.dialog && <AddImageDialog onClose={this.hideDialog} />}
  </div>
}

const mapStateToProps = (state) => {
  return {
    previewedItem: state.images.get('previewedImage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => { dispatch(triggerImagesRequest()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootAppComponent)
