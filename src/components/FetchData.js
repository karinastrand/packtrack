import React, {useState,useEffect} from 'react'
import DisplayData from './DisplayData';
export default function FetchData() 
{ 
    const [data,setData]=useState(null);
    const [loading, setLoading]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{
        fetch("https://my.api.mockaroo.com/orders.json?key=e49e6840") 
        .then(response=>response.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        })
        .catch(error =>
            {
                setError(error);
                setLoading(false);
            });
    },[])
     
    if(loading) return <p>Loading...</p>;
    if(error) return <p>{error.message}</p>
   // const fetcheddata=JSON.stringify(data);
   function fetcheddata(value)
   {
        return(
            <div>
                <DisplayData
                    id={value.id}
                    status={value.status}
                    eta={value.eta}
                    parcelid={value.parcel_id}
                    sender={value.sender}
                    verificationrequired={value.verification_required}
                    locationid={value.location_id}
                    locationname={value.location_name}
                    locationcoordlat={value.location_coordination_latitude}
                    locationcoordmagn={value.location_coordination_magnitude}
                    locationstatusok={value.location_status_ok}
                    userphone={value.user_phone}
                    username={value.user_name}
                    notes={value.notes}
                    lastupdated={value.last_updated}

                />
            </div>
        )
   }
    return (
        <div>
            {data.map(fetcheddata)}<br/>
            <h2>from file</h2>
        </div>
    );
}
