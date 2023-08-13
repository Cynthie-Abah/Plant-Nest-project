import React from 'react'
import { Feedback } from './Feedback'

export const TabReview = () => {
  return (
    <div id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
        <div className="product-review-body">
            <div className="blog-comment mt-0">
                <h4 className="heading">Comments (03)</h4>
                <div className="blog-comment-item">
                    <div className="blog-comment-img">
                        <img src="images/blog/avatar/1-1-120x120.png" alt="User Image"/>
                    </div>
                    <div className="blog-comment-content">
                        <div className="user-meta">
                            <h2 className="user-name">Donald Chavez</h2>
                            <span className="date">21 July 2021</span>
                        </div>
                        <p className="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                            elit, sed
                            do eiusmod tempor incidid ut labore etl dolore magna aliqua. Ut enim ad
                            minim
                            veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                            commodo
                            consequat.
                        </p>
                        <a className="btn btn-custom-size comment-btn" href="#">Reply</a>
                    </div>
                </div>
                <div className="blog-comment-item relpy-item">
                    <div className="blog-comment-img">
                        <img src="images/blog/avatar/1-2-120x120.png" alt="User Image"/>
                    </div>
                    <div className="blog-comment-content">
                        <div className="user-meta">
                            <h2 className="user-name">Marissa Swan</h2>
                            <span className="date">21 July 2021</span>
                        </div>
                        <p className="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                            elit, sed do
                            eiusmod tempr incidid ut labore etl dolore magna aliqua. Ut enim ad
                            minim veniam,
                            quisnos exercitati ullamco laboris nisi ut aliquiex.
                        </p>
                        <a className="btn btn-custom-size comment-btn style-2" href="#">Reply</a>
                    </div>
                </div>
                <div className="blog-comment-item">
                    <div className="blog-comment-img">
                        <img src="images/blog/avatar/1-3-120x120.png" alt="User Image"/>
                    </div>
                    <div className="blog-comment-content">
                        <div class="user-meta">
                            <h2 class="user-name">Donald Chavez</h2>
                            <span class="date">21 July 2021</span>
                        </div>
                        <p class="user-comment">Lorem ipsum dolor sit amet, consectetur adipisi
                            elit, sed
                            do eiusmod tempor incidid ut labore etl dolore magna aliqua. Ut enim ad
                            minim
                            veniam, quis nostrud exercitati ullamco laboris nisi ut aliquiex ea
                            commodo
                            consequat.
                        </p>
                        <a class="btn btn-custom-size comment-btn" href="#">Reply</a>
                    </div>
                </div>
            </div>


            {/* feedback area */}
            <Feedback />
        </div>
    </div>
  )
}
