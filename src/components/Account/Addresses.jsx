import React from 'react'

export const Addresses = () => {
  return (
    <div className="" id="account-address" role="tabpanel" aria-labelledby="account-address-tab">
    <div className="myaccount-address">
        <p>The following addresses will be used on the checkout page by default.</p>
        <div className="row">
            <div className="col">
                <h4 className="small-title">BILLING ADDRESS</h4>
                <address>
                    1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem
                </address>
            </div>
            <div className="col">
                <h4 className="small-title">SHIPPING ADDRESS</h4>
                <address>
                    1234 Heaven Stress, Beverly Hill OldYork UnitedState of Lorem
                </address>
            </div>
        </div>
    </div>
</div>
  )
}
