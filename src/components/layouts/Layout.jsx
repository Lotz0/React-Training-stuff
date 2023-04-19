import React from 'react'
import { LayoutWrapper } from './layoutStyles'

const Layout = ({children}) => {
  return (
    <LayoutWrapper>{children}</LayoutWrapper>
  )
}

export default Layout