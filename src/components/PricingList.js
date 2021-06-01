import React, {useEffect, useState} from 'react';

const PricingList = () => {
    const [data, setData] = useState([]);

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
            
        </div>
    );
};

export default PricingList;