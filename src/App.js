import React, { Component, useEffect } from 'react';
import PricingList from './PricingList'


const App = () => {

useEffect(() => {
    const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        console.log(tasksFromServer)
    }
    getTasks()
}, [])

const fetchTasks = async () => {
  const res = await fetch ('http://localhost:3000/Plans')
  const data = await res.json()
  return(data);
}



return (
      <div>
        {/* {
          db.map((item) => {
            return (<p>{ item.name }</p>)
          })
        } */}
        <p>{useEffect}</p>
        <PricingList />
      </div>
    )
}

export default App
