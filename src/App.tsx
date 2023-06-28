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
      {/* <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: img }}></div>
      <br />
      <div dangerouslySetInnerHTML={{ __html: html3 }}></div> */}
      {/* After sanitization */}
      {/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}></div>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(img) }}></div>
      <br/>
      <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html3) }}></div> */}
      {/* <textarea style={{ width: "50%", height: "100px" }}>
        {DOMPurify.sanitize(html)}
      </textarea> */}
      <div>
        <b>DOMPurify</b>
        <p>
          {`DOMPurify sanitizes HTML and prevents XSS attacks. You can feed
          DOMPurify with string full of dirty HTML and it will return a string
          (unless configured otherwise) with clean HTML. DOMPurify will strip
          out everything that contains dangerous HTML and thereby prevent XSS
          attacks and other nastiness.`}
        </p>
        <p>{`Command to install in React application:  npm i --save-dev @types/dompurify`}</p>

        <b>Note: </b>
        <ol>
          {`Enter below inputs one by one into text area`}
          <li>{`<script>alert('Ha ha Attack Script! ')</script>`}</li>
          <li>{`<a href="javascript:alert('Ha ha Attack anchor tag !!!')">Hello!</a>`}</li>
          <li>{`<img  src='1' alt='nothing to show' onerror="alert('Ha ha Attack IMG !!!')"/>`}</li>
          {`and see changes below after DOMPurify sanitization`}
        </ol>
      </div>
      <textarea
        style={{ width: "75%", height: "150px" }}
        placeholder={"Input Text Here..."}
        onChange={(e) => setInputText(e.target.value)}
      ></textarea>{" "}
      <br />
      {/* React is XSS protected by design. If any script of malicious code written in text area then React will handle such attack by iteself
     by hiding or escaping that script itself */}
      <b>Output : </b>
      {/* <div dangerouslySetInnerHTML={{ __html: inputText }}></div> */}
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(inputText) }}
      ></div>
    </div>
  );
}

export default App;
