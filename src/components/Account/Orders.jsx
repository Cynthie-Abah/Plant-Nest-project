import React from 'react'
import { OrderItem } from './OrderItem'

export const Orders = () => {
  return (
    <div className="" id="account-orders" role="tabpanel" aria-labelledby="account-orders-tab">
        <div className="myaccount-orders">
            <h4 className="small-title">MY ORDERS</h4>
            <div className="table-responsive">
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th>ORDER</th>
                            <th>DATE</th>
                            <th>STATUS</th>
                            <th>TOTAL</th>
                            <th></th>
                        </tr>
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                            <OrderItem />
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
