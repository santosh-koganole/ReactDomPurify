import DOMPurify from "dompurify";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  const html = `<a href="javascript:alert('Ha ha Attack HTML !!!')">Hello!</a>`;
  //const html = `<a href="#" onClick="alert('Hello')">Hello!</a>`;

  const img = ` <img  src='1' alt='nothing to show' onerror="alert('Ha ha Attack HTML IMG !!!')"/>`;

  const html3 = `<script>alert('Ha ha Attack HTML3 ')</script>`;

  return (
    <div>
      <h1>XSS Sanatize Demo for React application</h1>

      <h3>POC</h3>

      {/* Before sanitization */}

      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div dangerouslySetInnerHTML={{ __html: img }}></div>
      <div dangerouslySetInnerHTML={{ __html: html3 }}></div>

      {/* After sanitization */}
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(img) }}></div>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html3) }}></div> */}

      <textarea style={{ width: "50%", height: "200px" }}>
        {DOMPurify.sanitize(html)}
      </textarea>

      <textarea
        style={{ width: "50%", height: "200px" }}
        placeholder={
          "Input Text Here, try entering some script tag and see the changes below"
        }
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>

      {/* React is XSS protected by design. If any script of malicious code written in text area then React will handle such attack by iteself
     by hiding or escaping that script itself */}
      <div dangerouslySetInnerHTML={{ __html: inputText }}></div>
    </div>
  );
}

export default App;
