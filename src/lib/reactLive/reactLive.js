import React, { Component } from 'react';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live'
import ColorPicker from '../colorPicker'

class ReactLive extends React.Component {

    render() {
        return (
            <div className="App-reactlive">
                <div className="App-reactlive-header">
                    <div> Code </div>
                    <div> Preview </div>
                </div>
                <div className="App-reactlive-content">
                    <LiveProvider code={this.props.code} scope={this.props.scope}>
                        <div className="App-reactlive-editor">
                            <LiveEditor />
                        </div>
                        <LiveError />

                        <div className="App-reactlive-preview">
                            <div className="App-reactlive-preview-top">
                                <LivePreview />
                            </div>
                            <div className="App-reactlive-preview-bottom">
                                <LiveProvider code={this.props.componentUsage} >
                                    <div className="App-reactlive-editor-css">
                                        <LiveEditor />
                                    </div>
                                    <LiveError />
                                    <ColorPicker />
                                </LiveProvider>
                            </div>

                        </div>
                    </LiveProvider>
                </div>
            </div >

        )
    }
}

export default ReactLive