import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { TopBar } from './Topbar'
import {ProductContent} from './ProductContent'
import { Pagination } from '../../hooks/title'

const ProductSections = () => {

  
  return (
    <div className="col-xl-9 col-lg-8 order-1 order-lg-2">

    <TopBar />

    <ProductContent />

    <Paginations />
  </div>
    )}



const Paginations = ()=>{


    const params = useParams().page;
    const { items, pages } = Pagination([1, 2, 3, 4, 5, 6, 7, 8], params, 2);

    return(
        <div className="pagination-area">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                      {pages.map((page, index) => (
                        <li
                          className={`page-item ${
                            (page == params || (!params && page == 1)) &&
                            "active"
                          }`}
                          key={index}
                        >
                          <NavLink
                            className="page-link"
                            to={`/catlog/${page}`}
                          >
                            {page}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
        </div>
    )
    }    

export default ProductSections