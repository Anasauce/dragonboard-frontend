import React, { Component } from 'react'
import DashNav from './DashNav'
import SideMenu from './SideMenu'


class AccountDetailsPage extends Component {
  render() {
    return (
      <div className="account-details-page">
        <DashNav />
        <SideMenu />
      </div>
    )
  }
}

export default AccountDetailsPage
