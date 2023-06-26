import DOMPurify from "dompurify";
function App() {
  // const html = `<a href="javascript:alert("Hello")">Hello!</a>`;
  const html = `<a href="#" onClick="alert('Hello')">Hello!</a>`;
  const htmlSanatized = DOMPurify.sanitize(html);
  //const htmlSanatized = html;

  const img = ` <img  src='1' alt='nothing to show' onerror="alert('ATTACK')"/>`;
  const imgSanatized = DOMPurify.sanitize(img);

  return (
    <div>
      <h1>XSS Sanatize Markdown Exploits</h1>

      <h3>Exploit</h3>
      {/* <div dangerouslySetInnerHTML={{ __html: htmlSanatized }}></div> */}
      <div dangerouslySetInnerHTML={{ __html: imgSanatized }}></div>

      {/* <div dangerouslySetInnerHTML={{ __html: html }}></div> */}
      {/* <div dangerouslySetInnerHTML={{ __html: img }}></div> */}

      <textarea style={{ width: "100%", height: "400px" }}>
        {htmlSanatized}
      </textarea>
    </div>
  );
}

export default App;
