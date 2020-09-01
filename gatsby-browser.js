import React from 'react';
import Div100vh from 'react-div-100vh'

export { wrapRootElement } from "./gatsby/wrapRootElement";

export const wrapPageElement = ({ element }) => {
  return <Div100vh style={{minHeight: '99rvh', overflow: 'hidden'}}>{element}</Div100vh>
}