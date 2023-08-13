import React, { useEffect, useState } from 'react'
import { Breadcrumb } from '../components/sharedComponents/BreadCrumb'
import { ProductImgs } from '../components/ProductDescription/ProductImgs'
import { ProductContent } from '../components/ProductDescription/ProductContent'
import { ProductTabNav } from '../components/ProductDescription/ProductTabNav'
import { TabInformation } from '../components/ProductDescription/TabInformation'
import { TabReview } from '../components/ProductDescription/TabReview'
import { useParams } from 'react-router-dom/dist'
import { ProductObjectContext } from "../components/ProductDescription/ProductContext";
import axios from 'axios'

const ProductDescription = () => {

const [ toggleTabView, setToggleTabView ] = useState('information');
const {productId} = useParams();

const [productObject, setProductObject ] = useState();


const handleFetchProduct = async () =>{

    try {

        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        };
    
        const response = await axios.get(`https://plant-nest.onrender.com/api/v1/plants/${productId}`, requestOptions)

        const modifiedProduct ={ ...response.data.data, image_url: JSON.parse(response.data.data.image_url).map(url => url.replace(/\/$/, '')) }
        setProductObject(modifiedProduct);
        console.log(modifiedProduct);
    
      } catch (error) {
    
        console.error(error);
      }

}

useEffect(()=>{

    handleFetchProduct();

},[])

  return (
   <main className='main-content'>

<ProductObjectContext.Provider value={productObject} >

<Breadcrumb 
        pageName={productObject?.name} 
        pagePreview={productObject?.description} 
        />

        <div className="single-product-area section-space-top-100">
            <div className="container">
                <div className="row">

                    <ProductImgs />

                    <ProductContent />
                </div>
            </div>
        </div>

        <div className="product-tab-area section-space-top-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <ProductTabNav 
                        
                        setToggleTabView={setToggleTabView} />

                        <div className="tab-content product-tab-content">

                            { toggleTabView === 'information' ? <TabInformation />
                             : toggleTabView === 'description' ? <TabDescription />
                             : toggleTabView === 'review' ? <TabReview /> 
                             : ''}

                        </div>

                    </div>
                </div>
            </div>
        </div>

</ProductObjectContext.Provider>
   </main>
  )
}

export default ProductDescription