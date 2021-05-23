import React, { Component } from 'react';
import Dashboard from '../components/dashboard/index'
import { FaCopy } from 'react-icons/fa';
import { FaExclamationCircle } from 'react-icons/fa';
import { DashboardComponentCSS } from '../components/dashboard/style.css'

export const DashboardPreviewScope = { Dashboard, FaCopy, FaExclamationCircle };

export const DashboardPreviewCode = `class DashboardPreview extends React.Component {
       render() {
        return (
        <Dashboard
        dashboardHeaderContent = {<div>  <FaCopy size={50} style={{ color: "white" }} /> </div>}
        dashboardContentHeader = {<div> Bill Amount </div>}
        dashboardContent = {<div> $1234.00 </div>}
        dashboardFooterContent = {<div> <FaExclamationCircle size={10} style={{ color: "#fb8c00" }} /> Due Date : 10 Oct 2020 </div>}
        />
        )
    }
}`

