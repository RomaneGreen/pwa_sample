import React from 'react'


const Page3 = ({onRouteChange}) => 
  
    <div>
      
      <button onClick={() => onRouteChange('page1')}>Page1</button>
      <button onClick={() => onRouteChange('page2')}>Page2</button>
    </div>
  


export default Page3
