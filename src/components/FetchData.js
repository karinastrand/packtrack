import React, {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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
  
    return (
    
     <div>
        <Container className='bg-primary text-white'>
        <h1>Welcome to packtrack</h1>
            <Row>
     {data.map(data=>
     (
        <Col md="3" className='g-4'>
            <Card className='bg-info text-white'>
                <Card.Body>
                <Card.Title>
                    {data.sender}<br/>
                    # {data.parcel_id}
                </Card.Title>
                <Card.Text>
                    {data.status}
                </Card.Text>
                
                <Button variant="light">View details</Button>
             
                </Card.Body>
            </Card>
        </Col>
     ))
     
     }
     </Row>
     <br/>
     <br/>
     </Container>
     </div>   
    );
}
