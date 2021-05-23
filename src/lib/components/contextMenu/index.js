import React, { Component } from "react"
import { FaTimesCircle } from 'react-icons/fa';
import "./style.css"

class ContextMenu extends Component {
  state: StateType = {
    open: false,
  }
  componentDidMount() {
    window.addEventListener('click', this.close)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close)
  }

  handleClick = (e) => {
    e.stopPropagation()
    const { open } = this.state
    this.setState({ open: !open })
  }

  handleMenuItem = (menuItem) => (e) => {
    e.stopPropagation()
    menuItem.onClick()
    this.setState({ open: false })
  }


  close = () => {
    this.setState({
      open: this.props.open
    })
  }

  render() {
    const { clickableZone, menuItems, header } = this.props
    const { open } = this.state
    return (
      <div className="container">
        <div onClick={this.handleClick} style={{ cursor: 'pointer' }}>
          {clickableZone}
        </div>
        {
          open &&
          <div className="contextmenu text-white">
            <div className="contextmenu-close">
              <FaTimesCircle className="contextmenu-close-icon" onClick={this.close} />
            </div>
            <div className="contextmenu-header">
              {header}
            </div>
            {Array.isArray(menuItems) && menuItems.map((menuItem, i) => {
              if (!menuItem) {
                return (<div key={i} className="contextmenu-divider"></div>)
              }
              if (menuItem.hidden) {
                return (null)
              }
              return (
                <div key={i} className="contextmenu-item" onClick={this.handleMenuItem(menuItem)} style={{ cursor: "pointer" }}>
                  <i className={menuItem.icon}></i>
                  <span className="contextmenu-item-text"> {menuItem.content}
                  </span>
                </div>
              )
            })}
          </div>
        }

      </div>
    )
  }
}

export default ContextMenu