import React from 'react'

export const ProductTabNav = ({setToggleTabView}) => {
  return (
    <ul class="nav product-tab-nav tab-style-2 pt-0" role="tablist">

    <li class="nav-item" role="presentation">
        <a class="tab-btn" onClick={()=> setToggleTabView('information')}  data-bs-toggle="tab" href="#information" role="tab" aria-controls="information" aria-selected="false">
            Information
        </a>
    </li>
    <li class="nav-item" role="presentation">
        <a class="tab-btn" onClick={()=> setToggleTabView('review')}  data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">
            Reviews(3)
        </a>
    </li>

</ul>
  )
}
