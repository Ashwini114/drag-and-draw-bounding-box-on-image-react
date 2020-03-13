import React from "react";


const InputBoxes = (props) =>{

    const x = React.useRef(0)
    const y = React.useRef(0)
    const w = React.useRef(0)
    const h = React.useRef(0)
    /*
    * Tracks down coordinates change from the image component
    */
    React.useEffect(()=>{
       x.current.value = props.data.x;
       y.current.value = props.data.y;
       w.current.value = props.data.w;
       h.current.value = props.data.h;
    },[props.data])

    return(
        <div style={{margin:'16%'}}>
           
            <div className="form-group">
                <div className="input-group mb-2">
                <div className="input-group-prepend">
                <div className="input-group-text">X :</div>
                </div>
                <input type="text" ref={x} onChange={()=>{props.get_coordinates(x,y,w,h)}}></input>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group mb-2">
                <div className="input-group-prepend">
                <div className="input-group-text">Y :</div>
                </div>
                <input type="text" ref={y} onChange={()=>{props.get_coordinates(x,y,w,h)}}></input>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group mb-2">
                <div className="input-group-prepend">
                <div className="input-group-text">Width :</div>
                </div>
                <input type="text" ref={w} onChange={()=>{props.get_coordinates(x,y,w,h)}}></input>
                </div>
            </div>
            <div className="form-group">
                <div className="input-group mb-2">
                <div className="input-group-prepend">
                <div className="input-group-text">Height :</div>
                </div>
                <input type="text" ref={h} onChange={()=>{props.get_coordinates(x,y,w,h)}}></input>
                </div>
            </div>
        </div>
    )
}

export default InputBoxes;