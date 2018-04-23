import React from 'react';
import {connect} from 'react-redux'

import {
  triggerImagesRequest,
  showDialog
} from '../actions/generators'

import AppBar from 'material-ui/AppBar';

import ItemsGrid from './ItemsGrid';
import ItemPreview from './ItemPreview'
import AddImageDialog from './AddImageDialog'

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import floatingBtnStyle from '../style-consts/FloatingBtnStyle';

import {AppWrapper, ItemsGridWrapper, PreviewWrapper, EmptyPreview} from '../widgets/grid-wrappers';

class RootAppComponent extends React.Component {
  componentDidMount() {
    this.props.loadData()
  }

  render = () => <div>
    <AppBar
      title="Awesome Google Visioner app"
      iconStyleLeft={{display: 'none'}}
      style={{ position: "fixed", top: 0 }}
      iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    <AppWrapper>
      <ItemsGridWrapper><ItemsGrid/></ItemsGridWrapper>
      <PreviewWrapper>
        {this.props.previewedItem ? <ItemPreview /> : <EmptyPreview>Click on tile to preview</EmptyPreview>}
      </PreviewWrapper>
    </AppWrapper>
    <FloatingActionButton onClick={this.props.showDialog} style={floatingBtnStyle}>
      <ContentAdd />
    </FloatingActionButton>
    {this.props.dialogOpened && <AddImageDialog />}
  </div>
}

const mapStateToProps = (state) => {
  return {
    previewedItem: state.images.get('previewedImage'),
    dialogOpened: state.ui.get('dialog')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => { dispatch(triggerImagesRequest()) },
    showDialog: () => { dispatch(showDialog()) }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RootAppComponent)
