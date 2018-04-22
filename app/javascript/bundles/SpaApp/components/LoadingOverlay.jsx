import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import CircularProgress from 'material-ui/CircularProgress'

const Loader = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 9999;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%
  color: white;
`

const LoadingOverlay = (props) => props.loading && <Loader>
  <Content>
    <CircularProgress size={100} thickness={10} />
    {props.text}
  </Content>
</Loader>

const mapStateToProps = (state) => {
  return {
    loading: state.ui.get('onGoingRequest'),
    text: state.ui.get('onGoingRequestMessage')
  }
}

export default connect(mapStateToProps)(LoadingOverlay)
