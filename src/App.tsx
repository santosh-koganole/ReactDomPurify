import DOMPurify from "dompurify";
function App() {
  const html = `<a href="javascript:alert('Ha ha Attack HTML !!!')">Hello!</a>`;
  //const html = `<a href="#" onClick="alert('Hello')">Hello!</a>`;

  const htmlSanatized = DOMPurify.sanitize(html);

  const img = ` <img  src='1' alt='nothing to show' onerror="alert('Ha ha Attack HTML IMG !!!')"/>`;
  const imgSanatized = DOMPurify.sanitize(img);

  const html2 = "This seal series is locked by <b>Neha Pradhan</b>";
  const html2Sanitized = DOMPurify.sanitize(html2);

  const html3 = `<script>alert('Ha ha Attack HTML3 ')</script>`;
  const html3Sanitized = DOMPurify.sanitize(html3);

  return (
    <div>
      <h1>XSS Sanatize Demo for React application</h1>

      <h3>POC</h3>

      {/* Before sanitization */}

      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <div dangerouslySetInnerHTML={{ __html: img }}></div>
      <div dangerouslySetInnerHTML={{ __html: html3 }}></div>

      {/* After sanitization */}
      {/* <div dangerouslySetInnerHTML={{ __html: htmlSanatized }}></div>
      <div dangerouslySetInnerHTML={{ __html: imgSanatized }}></div>
      <div dangerouslySetInnerHTML={{ __html: html3Sanitized }}></div> */}

      <textarea style={{ width: "100%", height: "400px" }}>
        {htmlSanatized}
      </textarea>
    </div>
  );
}

export default App;
