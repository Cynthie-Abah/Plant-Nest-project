import React from 'react'
import { Link } from 'react-router-dom/dist'

export const ToggleView = ({setChangeView}) => {

  return (
    <div className="col-lg-3">
    <ul className="nav myaccount-tab-trigger" id="account-page-tab" role="tablist">
        <li className="nav-item">
            <a className="nav-link active" onClick={()=> setChangeView('dashboard')} id="account-dashboard-tab" data-bs-toggle="tab" href="#account-dashboard" role="tab" aria-controls="account-dashboard" aria-selected="true">Dashboard</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" onClick={()=> setChangeView('orders')} id="account-orders-tab" data-bs-toggle="tab" href="#account-orders" role="tab" aria-controls="account-orders" aria-selected="false">Orders</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" onClick={()=> setChangeView('addresses')} id="account-address-tab" data-bs-toggle="tab" href="#account-address" role="tab" aria-controls="account-address" aria-selected="false">Addresses</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" onClick={()=> setChangeView('settings')} id="account-details-tab" data-bs-toggle="tab" href="#account-details" role="tab" aria-controls="account-details" aria-selected="false">user settings</a>
        </li>
        <li className="nav-item">
            <Link className="nav-link" id="account-logout-tab" to="login-register.html" role="tab" aria-selected="false">Logout</Link>
        </li>
    </ul>
</div>
  )
}
