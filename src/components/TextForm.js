import React, { useState } from "react";

export default function TextForm(props) {
  //convert text into upper case
  const handleUpClick = () => {
    //console.log("Upper case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); //it change the text which already initialized
    //shows alert when text is transformed 
    props.showAlert("converted to UpperCase", "success");
  }

  //convert text into lower  case
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    //shows alert when text is transformed 
    props.showAlert("converted to LowerCase", "success");
  }

  //clear all text
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  }

  //copy all text
  const handleCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard", "success");

    // .then(() => {
    //   alert("Text copied to clipboard!");
    // })
    // .catch((err) => {
    //   console.error("Failed to copy text: ", err);
    // });
  }

  //remove extra spaces
  const handleExtraSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is Removed", "success");
  }




  const handleOnChange = (event) => {
    // console.log("on changed");
    setText(event.target.value);

  }

  const [text, setText] = useState(""); //help to change initialized state vanlue ( called hooks state)
  //in this syntax text have already have some string and setText helps to replace that string

  return (
    <>
      {/* style change the color of headind during switching to dark mode */}
      <div className="conrainer" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
        <div>
          <h1>{props.heading}</h1>
          <div className="mb-3" >
            {/* background change's the color of text area during switching to dark mode */}
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            <b> convert to upperCase</b>
          </button>
          <button className="btn btn-info mx-2" onClick={handleLoClick}>
            <b>LConvert to lowercase </b>
          </button>

          <button className="btn btn-danger mx-2" onClick={handleClearClick}>
            <b>clear Text </b>
          </button>
          <button className="btn btn-success mx-2" onClick={handleCopyClick}>
            <b>copy Text </b>
          </button>
          <button className="btn btn-success mx-2" onClick={handleExtraSpaceClick}>
            <b>Remove extra space </b>
          </button>
        </div>
      </div>
      {/* style change the color of headind during switching to dark mode */}
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>your text summery</h1>

        {/* word and character counter */}
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>

        {/*timer to read text*/}
        <p>{0.008 * text.split(" ").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "enter something in textarea to preview "}</p>
      </div>
    </>
  );
}
