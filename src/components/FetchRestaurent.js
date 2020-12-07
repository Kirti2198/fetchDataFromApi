import React from "react";

export default class FetchRestaurent extends React.Component{
   constructor(props){
     super(props);
     
   this.state={
      
     resData:{
       banners      :[],
       restaurents  :[]
     }
      
     }
     console.log(typeof(this.state.resData));
    }

    
  
 componentDidMount()
 { 

    const payload ={
      "longitude": "80.244455",
      "latitude": "13.0358481"
    }
    fetch("https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant",{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-type":"application/json"
      },
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((data)=>{
      
      var resData = this.state.resData;
      resData.banners =data.banners
      resData.restaurents = data.listRestaurants
      console.log(data)
      console.log(resData)
     
      this.setState({resData})
    },
    (error)=>{
      console.log(error);
    }
    )
 }
  render() 
  {  
      // wraps any non-object type inside <p>
    // const banners = Object.keys(this.state.resData);
    // console.log(this.state.resData.banners);
    
    return (
     
      <div>
        <p> The Request Returned - </p>
        <div >
        {this.state.resData.banners.length<=0 ? "No Data to Show" :
          this.state.resData.banners.map((value,index)=>(
            <div key={value.bannerId}>
              <img src={value.bannerImage} alt="banner"/>
              <p>{value.bannerImage}</p>
              <p>{value.bannerId}</p>
            </div>  
          ))
        }
        </div>
        {/* code to display restaurents */}
        {/* {Object.entries(this.state.resData.restaurents[0]).map(([key,value])=>(
          <P>hi</P>
        ))} */}

        <h1>Restaurents</h1>

        {this.state.resData.restaurents.map((data,index)=>(
          <div key={data.restaurantId} >
            <h2 style={{textAlign:"center"}}>{data.restaurantName}</h2>
            <div style={{display:"flex",padding:"2%"}}>
            <img src={data.restaurantImage} alt ="restaurent" style={{height:"200px",width:"300px"}}/>
            
            {data.outlet.map((row,i)=>(
              <table key={i}>
                <tr>
                  <th>Dish</th>
                  <th>Outlet Name</th>
                  <th>Total Amount</th>
                </tr>
                <tr>
                  <td><img src={row.image} alt="dish"/></td>
                  <td>{row.outletName}</td>
                  <td>{row.totalAmount}</td>
                </tr>
              </table>
            ))}
          
            </div>
          </div>

        ))}
        
      </div>
    )
        

  }
}
