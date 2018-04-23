import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: inline-flex;
  width: 100%;
  padding-top: 64px;
`

export const ItemsGridWrapper = styled.div`
  width: 30%
`

export const EmptyPreview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%
  color: gray;
`

export const PreviewWrapper = styled.div`
  width: 70%;
  position: fixed;
  right: 0;
  height: 100%;
  overflow: scroll;
`
