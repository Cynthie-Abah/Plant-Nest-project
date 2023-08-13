import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../components/sharedComponents/BreadCrumb'
import Filter from '../components/sharedComponents/Filter'
import ProductSections from '../components/catlog/ProductSections'
import '../assets/scss/_shop.scss'
import { ProductContext } from '../components/catlog/ProductContext'
import axios from 'axios'

const Catlog = () => {

const [products, setProducts] = useState(); 

useEffect(()=>{

const handleFetchProducts = async ()=> {

  try {

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const response = await axios.get('https://plant-nest.onrender.com/api/v1/plants/', requestOptions)
    console.log(response);
    console.log(response.data.data);
    const modifiedProducts = response.data.data.map(product => ({
      ...product,
      image_url: JSON.parse(product.image_url).map(url => url.replace(/\/$/, '')) 
    }));
    setProducts(modifiedProducts);

  } catch (error) {

    console.error(error);
  }

}

handleFetchProducts();

}, [])


  return (
    <main className="main-content">
        <Breadcrumb

          pageName={'shop'}
          pagePreview={'discover plants today'}
        />

        <div className="shop-area  section-space-y-axis-100">
            <div className="container">
                <div className="row">

                  <ProductContext.Provider value={products}>

                      <Filter 
                        setProducts={setProducts}
                      />

                      <ProductSections />

                  </ProductContext.Provider>

                </div>
            </div>
        </div>
    </main>
  )
}

export default Catlog