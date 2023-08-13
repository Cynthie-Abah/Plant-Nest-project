import React from 'react'

export const ContactInfo = () => {
  return (
    <div class="contact-info text-white" style={{backgroundImage: 'url(./images/contact/1-1-370x500.jpg)'}}>
        <h2 class="contact-title">Contact Info:</h2>
        <p class="contact-desc">Fill the form amd our teaam will get to back
            to you within 24 hours.
        </p>
        <ul class="contact-list">
            <li>
                <i class="pe-7s-call"></i>
                <a href="tel://099 4473 8383">099 4473 8383</a>
            </li>
            <li>
                <i class="pe-7s-mail"></i>
                <a href="mailto://plantnest@gmail.com">plantnest@gmail.com</a>
            </li>
            <li>
                <i class="pe-7s-map-marker"></i>
                <span>Aptech Computer Education, Enugu Center</span>
            </li>
        </ul>
    </div>
  )
}
