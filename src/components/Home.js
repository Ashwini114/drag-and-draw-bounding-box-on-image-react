import React,{Suspense} from "react"
import {
    Card,Row,Col
  } from 'reactstrap';
import InputBoxes from "./InputBoxes";
//import ImageComponent from "./ImageComponent";
const ImageComponent = React.lazy(()=>import("./ImageComponent"))
 

const Home = () =>{
    const [coordinates,setCoordinates] = React.useState({x:0,y:0,w:0,h:0})
    const get_coordinates = (xRef,yRef,wRef,hRef) =>{
        let x = xRef.current.value || 0;
        let y = yRef.current.value || 0;
        let w = wRef.current.value || 0;
        let h = hRef.current.value || 0;
        if(x !=0 || y!=0 || w != 0 || h !=0 )
        setCoordinates({x:x,y:y,w:w,h:h})
        
    }
    const get_coordinates_from_image = (x,y,w,h) =>{
        setCoordinates({x:x,y:y,w:w,h:h})
    }
    return ( 
        <div>
        <h2>Drag and draw bounding box</h2>
        <Card  style={{ backgroundColor: '#333', borderColor: '#333',color:'#FFF',margin:'0px 1%' }}>
        <Row>
        <Col xs="8" >
        <Suspense fallback={<div><p>Loading....</p></div>}> <ImageComponent data={coordinates} get_coordinates_from_image={get_coordinates_from_image}/></Suspense>
        </Col>
        <Col xs="4" >
            <InputBoxes  get_coordinates={get_coordinates} data={coordinates}/> 
        </Col>
        </Row>
 
            
        </Card>
        </div>
    )
}

export default Home