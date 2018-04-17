import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

import ItemsGrid from './ItemsGrid';
import ItemPreview from './ItemPreview'

import styled from 'styled-components';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {AppWrapper, ItemsGridWrapper, PreviewWrapper} from '../widgets/grid-wrappers';

import floatingBtnStyle from '../style-consts/FloatingBtnStyle';

export default () => <MuiThemeProvider>
  <AppBar
    title="Awesome Google Visioner app"
    iconStyleLeft={{display: 'none'}}
    iconClassNameRight="muidocs-icon-navigation-expand-more"/>
    <AppWrapper>
        <ItemsGridWrapper><ItemsGrid/></ItemsGridWrapper>
        <PreviewWrapper><ItemPreview/></PreviewWrapper>
    </AppWrapper>
    <FloatingActionButton style={floatingBtnStyle}>
      <ContentAdd />
    </FloatingActionButton>
</MuiThemeProvider>
