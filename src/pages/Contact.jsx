import React from 'react'
import { Breadcrumb } from '../components/sharedComponents/BreadCrumb'
import { ContactInfo } from '../components/contact/ContactInfo'
import { ContactForm } from '../components/contact/ContactForm'
import { ContactMap } from '../components/contact/ContactMap'

export const Contact = () => {
  return (
    <main className='main-content'>
        < Breadcrumb
         pageName={'contact us'}
         pagePreview={'call me whaen you want call me when you need eyhaaa'}
        />

    <div class="contact-form-area section-space-y-axis-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="contact-wrap">
                        
                        <ContactInfo />

                        <ContactForm />

                    </div>
                </div>
            </div>
        </div>
    </div>
    < ContactMap />

    
    </main>
  )
}
