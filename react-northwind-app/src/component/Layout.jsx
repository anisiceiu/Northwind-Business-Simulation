import React from 'react';
import AppHeader from './AppHeader';
import Header from './Header';
import Sidebar from './Sidebar';
import {Outlet } from "react-router-dom";

const Layout = ({ children }) => {

  
    return (
   <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
    data-sidebar-position="fixed" data-header-position="fixed">

    <Header/>
 
    <Sidebar/>

    <div className="body-wrapper">

     <AppHeader/>

      <div className="body-wrapper-inner">
        <div className="container-fluid">
          <div className="card">
            <div className="card-body">
              <Outlet/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
};

export default Layout;