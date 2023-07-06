import React, { Children, Fragment } from 'react';
import Nav from '../nav/Nav'
import NavLeft from '../navLeft/NavLeft'
import './layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Fragment >
      <header><Nav/></header>
      <aside><NavLeft/></aside>
      <main>
          <Outlet/>
      </main>
    </Fragment>
  )
}

export default Layout