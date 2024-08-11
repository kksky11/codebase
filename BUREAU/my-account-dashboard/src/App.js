import React from 'react';
//import { Routes, Route } from "react-router-dom";
//import MyAccountDashboard from "@views/myAccounts";
import logo from './images/logo_black.png';
import Layout from './layout/main-layout';
//import Support from "@views/support"
function App() {
  return (
      <Layout>
      <img src={logo} className="App-logo" alt="logo" />
       My Account dashboard
       {/* <MyAccountDashboard /> */}
      {/* <Routes>
        <Route path="/" element={<MyAccountDashboard />} />
        <Route path="*" element={<MyAccountDashboard />} />
        <Route path="support" element={ <Support/> } /> 
      </Routes> */}
      </Layout>
  )
}

export default App;
