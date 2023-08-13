import React from 'react'

export const Settings = () => {
  return (
    <div className="" id="account-details" role="tabpanel" aria-labelledby="account-details-tab">
        <div className="myaccount-details">
            <form action="#" className="myaccount-form">
                <div className="myaccount-form-inner">
                    <div className="single-input single-input-half">
                        <label>First Name*</label>
                        <input type="text" />
                    </div>
                    <div className="single-input single-input-half">
                        <label>Last Name*</label>
                        <input type="text"/>
                    </div>
                    <div className="single-input">
                        <label>Email*</label>
                        <input type="email"/>
                    </div>
                    <div className="single-input">
                        <label>Current Password(leave blank to leave
                            unchanged)</label>
                        <input type="password"/>
                    </div>
                    <div className="single-input">
                        <label>New Password (leave blank to leave
                            unchanged)</label>
                        <input type="password"/>
                    </div>
                    <div className="single-input">
                        <label>Confirm New Password</label>
                        <input type="password"/>
                    </div>
                    <div className="single-input">
                        <button className="btn btn-custom-size lg-size btn-pronia-primary" type="submit">
                            <span>SAVE CHANGES</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
