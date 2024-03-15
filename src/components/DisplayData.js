import React from 'react'

export default function DisplayData(data) {
  const  {id,status,eta,parcelid,sender,verificationreguired,locationid,
          locationname,locationcoordlat,locationcoordmagn,locationstatusok,userphone,
          username,notes,lastupdated }=data;
  return (
    <div>
        id= {id} <br/>
        status= {status} <br/>
        ets= {eta} <br/>
        parcelid= {parcelid} <br/>
        sender= {sender} <br/>
        verification reguired= {verificationreguired} <br/>
        location id = {locationid} <br/>
        location name= {locationname} <br/>
        location coords latitude= {locationcoordlat} <br/>
        location coords magnitude= {locationcoordmagn} <br/>
        location status ok= {locationstatusok} <br/>
        user phone= {userphone} <br/>
        user name= {username} <br/>
        notes= {notes} <br/>
        last_updated= {lastupdated} <br/>

    </div>
  )
}
