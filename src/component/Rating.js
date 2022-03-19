import React from 'react'

 function Rating({rate,setRate}) {
 const array=(x)=>{
  
  const star=[]
  for(let i=1; i<=5;i++)
  {
    if(i<=x)
    {
      star.push(
      <span style={{color:'yellow',cursor:'pointer',fontSize:'200%'}} onClick={()=>setRate(i)}>★</span>
    )
   
    }
    else{   
       star.push(
      <span style={{color:'yellow',cursor:'pointer',fontSize:'200%'}} onClick={()=>setRate(i)}> ☆ </span>
    )
      
    }

  }
  return  star
 }
        
  return (
 
    <div>
      {array(rate)}
    </div>
  )
}

Rating.defaultProps={
  Rating : 0 ,
  setRate:()=>{}
}
export default Rating