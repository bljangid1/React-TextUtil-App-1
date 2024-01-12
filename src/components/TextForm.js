import React,{useState} from 'react'

export default function TextForm(props) {

    const HandleUpClick = ()=>{
        // console.log("Upper Case Was Clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to Uppercase" , "success");
       
    }

    const HandleLoClick = () => {
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Text Converted to Lowercase" , "success");

    }

    const handleOnChange=(event) =>{
        // console.log("On Change");
        
        setText(event.target.value);
       
    };  

    const HandleClearClick = () =>{
        let newText = '';
        setText(newText);
    }

    const [text,setText] = useState('');
    // text="New Text " wrong way to chage the state
// setText("Enter New Text"); correct way to change the state


//copy text from Textarea
const HandleCopyText = () =>{
// alert("copy Button Clicked");
    let copyText=document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied" , "success");
}

// removing extra spaces from textarea
const HandleExtraSpaces = () =>{
    //1st Logic
    let removeSpace=text.replace(/ +/g," ")  ;
    setText(removeSpace);
    props.showAlert("Extra Spaces Removed" , "success");
}

//counting the words    
    const countWords = () => {
      if (text.trim() === '') {
        return 0;
      }
      const words = text.trim().split(/\s+/);
      return words.length;
    };


    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3 my-3">
               <textarea className="form-control" onChange={handleOnChange} value={text} style={{ backgroundColor:props.mode === 'dark' ? '#042743' : 'white',color:props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={HandleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={HandleCopyText}>Copy</button>
            <button className="btn btn-primary mx-2" onClick={HandleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear Box</button>


        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
            <h2>Sentence Summery</h2>
            <p> {countWords()} Words and {text.length} Characters </p>
            <p>It will take {0.008*text.split(' ').length} Minutes to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something above to preview it"}</p>
        </div>
        </>
    )
}
