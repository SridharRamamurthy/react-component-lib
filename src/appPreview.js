
import React, { Component } from 'react';

import { DashboardPreviewCode, DashboardPreviewScope  } from './lib/appPreview/dashboardPreview'
import { ContextMenuPreviewScope, ContextMenuPreviewCode } from './lib/appPreview/contextMenuPreview'
import { TablePreviewScope, TablePreviewCode } from './lib/appPreview/tablePreview'
import ReactLive from './lib/reactLive/reactLive'

class AppPreview extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.selectedItem === "dashboard" &&
                    <div>
                        <div> Dashboard Component </div>
                        <ReactLive code={DashboardPreviewCode}
                            scope={DashboardPreviewScope} 
                            componentUsage = {DashboardPreviewCode}
                            />
                    </div>
                }
                {
                    this.props.selectedItem === "contextMenu" &&
                    <div>
                        <div> Context Menu Component </div>
                        <ReactLive code={ContextMenuPreviewCode}
                            scope={ContextMenuPreviewScope}
                            componentUsage={ContextMenuPreviewCode} />
                    </div>
                }

                {
                    this.props.selectedItem === "table" &&
                    <div>
                        <div> Table Component </div>
                        <ReactLive code={TablePreviewCode}
                            scope={TablePreviewScope}
                            componentUsage={TablePreviewCode} />
                    </div>
                }

            </div>
        )
    }
}

export default AppPreview;
