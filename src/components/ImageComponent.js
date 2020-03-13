import React from "react"

const ImageComponent = ({data,get_coordinates_from_image})=>{
    const canvasRef = React.useRef();
    const imageRef = React.useRef();
    let canvasx = 0;
    let canvasy = 0;
    let last_mousex = 0;
    let last_mousey = 0
    let mousex = 0;
    let mousey = 0;
    let mousedown = false;

    /**
     * Draws a bounding box when a change in coordinate is detected
     */
    React.useEffect(()=>{
        canvasRef.current.width = canvasRef.current.offsetParent.offsetWidth;
        canvasRef.current.height = window.outerHeight-100;
        if(data.x === 0 && data.y === 0 && data.w === 0 && data.h === 0)
        {
           setTimeout(()=>{
              drawImage(data)
           },1000)
        }
        else
          drawImage(data)
       
      
    },[data])

    const drawImage = (data) =>{
        let ctx = canvasRef.current.getContext("2d");
        ctx.drawImage(imageRef.current, 0, 0,canvasRef.current.width,canvasRef.current.height);
        ctx.beginPath();
        ctx.rect(data.x,data.y,data.w,data.h);
        ctx.stroke();
    }
    
    /**
     * Sets of event listeners for drawing the bounding box when a mouse drags 
     */

    React.useEffect(()=>{
         canvasx = document.getElementById("myCanvas").getBoundingClientRect().left;
         canvasy = document.getElementById("myCanvas").getBoundingClientRect().top;
         canvasRef.current.onmouseup = (e) =>{
            mousedown = false;
        }
        canvasRef.current.onmousedown = (e) =>{
           last_mousex = parseInt(e.clientX-canvasx);
           last_mousey = parseInt(e.clientY-canvasy);
           mousedown = true;
           console.log("here")
        }
        canvasRef.current.onmousemove = (e) =>{
            mousex = parseInt(e.clientX-canvasx);
            mousey = parseInt(e.clientY-canvasy);
            if(mousedown) {
                var width = mousex-last_mousex;
                var height = mousey-last_mousey;
              
              get_coordinates_from_image(last_mousex,last_mousey,width,height)
             
     
            }
         }
    },[])

 

    return(
        <div>
        <canvas ref={canvasRef}  id="myCanvas"   >
                    Your browser does not support the HTML5 canvas tag.
        </canvas>
        <img ref={imageRef} src="/images/img.jpg" alt="Card image cap" style={{display:'none'}}/>
        </div>
    )
}

export default ImageComponent