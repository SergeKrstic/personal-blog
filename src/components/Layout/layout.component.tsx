import React from "react"
import { Link } from "gatsby"

import Header from "../Header"
import Footer from "../Footer"

export interface LayoutProps {
  location?: Location
  title: string
  children?: any
}

const Layout = ({ location, title, children }: LayoutProps) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  const rootPath = `/`
  const isRootPath = location?.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header isRootPath title={title}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout
