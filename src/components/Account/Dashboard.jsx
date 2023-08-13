import axios from 'axios';
import React, { useEffect } from 'react'

export const Dashboard = () => {

    const handleFetchUser = async ()=>{

        // const requestOptions = {
        //     method: 'GET',
        //     redirect: 'follow'
        //   };

        //   try {
            
        //     const response = await axios.get("https://plant-nest.onrender.com/api/v1/user/3ee01790-353a-4953-a", requestOptions)
        //     const result = response.data
        //     console.log(result);

        //   } catch (error) {
        //     console.error(error);
        //   }



const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://plant-nest.onrender.com/api/v1/user/3ee01790-353a-4953-a", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    }

useEffect(()=>{

handleFetchUser()

},[])

  return (
   <div>
    <h3 className=" text-uppercase text-center">Account details</h3>
    <div className="container">
    <div className="personal-info">
    <div className="profile-image">
        <img src="https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg" alt="" className="img-fluid rounded-circle" />
    </div>
    <div className="profile-details">
        <h2 className="name">Jane Doe</h2>
        <p className="package">ahjbfg@gmail.com</p>
        
        
    </div>
    <div className="other-info">
        <p><span>Joined on: </span> 13th March 2020</p>
    </div>
    <button className="btn btn-primary"><i className="pe-7s-pen"></i> Edit profile</button>
</div>

    </div>
   </div>
  )
}
