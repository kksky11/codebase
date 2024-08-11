import React,{lazy} from "react";
import { createBrowserRouter} from "react-router-dom";
import Layout                 from '../layout';

const MyAccount = lazy(() => import('../pages/myAccount/myAccountContainer'));
const Support = lazy(() => import('../pages/support'));
const ReportDashboard = lazy(() => import('../pages/reportDashboard'));
const Faqs = lazy(() => import('../pages/faqs'));
const Apply = lazy(() => import('../pages/apply'));
const props = { }
const router = createBrowserRouter([
    {path: "/",                     element: <Layout><MyAccount {...props}/></Layout>},
    {path: "my-account/dashboard",  element: <Layout><MyAccount {...props}/></Layout>},
    {path: "credit-report/apply",   element: <Layout leftMenu={false} ><Apply {...props}/></Layout>},
    {path: "support",               element: <Layout><Support {...props}/></Layout>},
    {path: "bureau/report-analysis",element: <Layout><ReportDashboard {...props}/></Layout>},
    {path: "support/faqs",          element: <Layout><Faqs {...props}/></Layout>},
    {path: "*",                     element: <Layout><MyAccount {...props} /></Layout>},
]);

export default router