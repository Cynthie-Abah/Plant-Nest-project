import React from 'react'
// import breadcrumb from '../../assets/images/breadcrumb/bg/1-1-1919x388.jpg'
import { Link } from 'react-router-dom/dist'

export const Breadcrumb = ({ pageName, pagePreview  }) => {
  return (
        <div className="breadcrumb-area breadcrumb-height" style={{backgroundImage: `url(./images/breadcrumb/bg/1-1-1919x388.jpg)`}}>
        <div className="container h-100">
            <div className="row h-100">
                <div className="col-lg-12">
                    <div className="breadcrumb-item">
                        <h2 className="breadcrumb-heading">{pageName}</h2>
                        <ul>
                            <li>
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li>{pagePreview}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

