import React from 'react'

export const Feedback = () => {
  return (
    <div class="feedback-area">
    <h2 class="heading">Leave a comment</h2>
    <form class="feedback-form" action="#">
        <div class="group-input">
            <div class="form-field me-md-30 mb-30 mb-md-0">
                <input type="text" name="name" placeholder="Your Name*" class="input-field"/>
            </div>
            <div class="form-field">
                <input type="text" name="email" placeholder="Your Email*" class="input-field"/>
            </div>
        </div>
        <div class="form-field mt-30">
            <input type="text" name="subject" placeholder="Subject (Optinal)" class="input-field"/>
        </div>
        <div class="form-field mt-30">
            <textarea name="message" placeholder="Message" class="textarea-field"></textarea>
        </div>
        <div class="button-wrap pt-5">
            <button type="submit" value="submit" class="btn btn-custom-size xl-size btn-pronia-primary" name="submit">Post
                Comment</button>
        </div>
    </form>
</div>
  )
}
