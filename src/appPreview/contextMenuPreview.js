import React, { Component } from 'react';
import ContextMenu from '../lib/contextMenu/index'
import { FaBell } from 'react-icons/fa';

export default ContextMenuPreviewScope = { ContextMenu, FaBell };

export default ContextMenuPreviewCode = `class ContextMenuPreview extends React.Component {
    callBack(item) {
        alert(item)
    }
    render() {
        return (
        <ContextMenu
            open={false}
            clickableZone={<div style={{ color: "#182a5c", fontSize: "20px" }}> Notification
                                        <FaBell style={{ color: "red" }} />
            </div>}
            menuItems={[{
                content: "First Menu",
                onClick: () => { this.callBack("First") }
            },
                null,
            {
                content: "Second Menu",
                onClick: () => { this.callBack("Second") }
            },
                null,
            {
                content: "Third Menu",
                onClick: () => { this.callBack("Third") }
            }
            ]}
            header={<div>Context Menu Header </div>}
        />
        )
    }
}`



