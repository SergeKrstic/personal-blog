import React from 'react';
import { Link } from "gatsby"

export interface HeaderProps {
  title: string
  isRootPath: boolean,
}

export default ({ title, isRootPath }: HeaderProps) => {
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (<header className="global-header">{header}</header>)
}
