import React, { useContext, useState } from 'react'
import { ProductContext } from '../catlog/ProductContext';
import {Item}  from './Item';
import { ItemPreloader } from './ItemPreloader';


export const ProductContent = () =>{

    const products = useContext(ProductContext);
    // const [isLoading, setIsLoading] = useState(false); 

    return(
        <div className="tab-content">

            <div className="tab-pane fade show active" id="grid-view" role="tabpanel" aria-labelledby="grid-view-tab">

                <div className="product-grid-view row g-y-20">

                    {
                        !products ? ( <>
                                    <ItemPreloader />
                                    <ItemPreloader />
                                    <ItemPreloader />
                                    </>) :

                                      
                                    products?.map((plant, index)=>{

                                    return ( <Item 

                                        product_img={plant.image_url}
                                        product_name={plant.name}
                                        product_price={plant.price}
                                        product_ratings={plant.product_ratings}
                                        plant_id={plant.plant_id}
                                        key={index}
                                            />
                                        )
                                         })

                    }

        
                </div>

            </div>

        </div>

    )
}
