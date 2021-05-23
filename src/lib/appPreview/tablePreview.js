import React, { Component } from 'react';
import Table from '../components/table/index'

export const TablePreviewScope = { Table };

export const TablePreviewCode = `class TablePreview extends React.Component {
   
    render() {
        return (
        <Table
         table={{
             columns:[],
             row:["ROW1"]
         }}
        />
        )
    }
}`



