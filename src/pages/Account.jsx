import React, { useState } from 'react'
import { Breadcrumb } from '../components/sharedComponents/BreadCrumb'
import '../assets/scss/_my-account.scss'
import { ToggleView } from '../components/Account/ToggleView'
import { Settings } from '../components/Account/Settings'
import { Dashboard } from '../components/Account/Dashboard'
import { Orders } from '../components/Account/Orders'
import { Addresses } from '../components/Account/Addresses'

const Account = () => {

    const [changeView, setChangeView] = useState('dashboard');

  return (
    <main className="main-content">

        <Breadcrumb 
            pageName={'my account'}
            pagePreview={'whatever you see what er'}
        />

        <div className="account-page-area section-space-y-axis-100">

            <div className="container">

                <div className="row">

                    <ToggleView  
                        setChangeView={setChangeView} />

                <div className="col-lg-9">
                    <div className="tab-content myaccount-tab-content" id="account-page-tab-content">
                        {
                            changeView === 'dashboard' ? <Dashboard />
                            : changeView === 'settings' ? <Settings />
                            : changeView === 'orders' ? <Orders />
                            : changeView === 'addresses' ? <Addresses />
                            : ''
                        }
                     </div>
                </div>

                </div>
            </div>
        </div>
    </main>
    
  )
}

export default Account