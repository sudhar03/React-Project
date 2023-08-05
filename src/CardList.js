import React, { Component } from 'react';
import Card from './Components/Card';
//import Robot from './Components/Robot'


const CardList=({Robot})=>{

   
    return(
    <>
    {
Robot.map((user, i)=>
{
        return( <Card 
        key={i}
         id={Robot[i].id}
          name={Robot[i].name}
           gmail={Robot[i].gmail}
            />
    );
    })
}
  </>
    );
}

export default CardList;