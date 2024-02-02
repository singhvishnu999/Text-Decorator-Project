import React, { useState }  from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Write your text here');
    const handleChange = (event) => {
        setText(event.target.value);
    } 

    const handleUPcase = () => {
        setText(text.toUpperCase());
    }

    const handleLocase = () => {
        setText(text.toLowerCase());
    }

    const clsScreen = () => {
        setText('');
    }

    const handleCopy = () =>{
        const text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleTrim = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
 
   return (
    
    <div style= {{color: props.mode === 'light'?'black':'white'}}>
        <div className="mb-3">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" value={text} onChange = {handleChange} id="myBox" rows="8" style={{color: props.mode === "dark"?'white':'black',
         backgroundColor:props.mode==='dark'?"rgb(55 56 49)":'white'}}></textarea>
        </div>
        <button type="button" onClick={handleUPcase} className="btn btn-primary">change to UPPERCASE</button>
        <button type="button" onClick={handleLocase} className="btn btn-primary mx-2">change to LOWERCASE</button>
        <button type="button" onClick={clsScreen} className="btn btn-primary mx-2">clear SCREEN</button>
        <button type="button" onClick={handleCopy} className="btn btn-primary mx-2">copyData</button>
        <button type="button" onClick={handleTrim} className="btn btn-primary mx-2">trim Text</button>
     
        <p style={{color:props.mode==='light' ? 'black' : 'white'}}>{text.split(' ').length-1} words and {text.length} characters</p>
    </div>
 
  )
}

Textform.defaultProps = {
    heading : "set Heading"
}