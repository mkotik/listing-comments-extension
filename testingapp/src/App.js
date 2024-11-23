import "./App.css";

function App() {
  function injectOrRemoveIframe() {
    const currentUrl = window.location.href;
    const existingIframe = document.querySelector("iframe#zillow-iframe");

    // Inject the iframe if it doesn't exist
    const iframe = document.createElement("iframe");
    iframe.id = "zillow-iframe";
    iframe.src =
      "http://localhost:3001" +
      "/homedetails/3142-Amidship-Dr-Greenbackvilld-nj-23356/439589780_zpid/√";
    iframe.style.position = "fixed";
    iframe.style.top = "20px";
    iframe.style.left = "20px";
    iframe.style.width = "500px";
    iframe.style.height = "550px";
    iframe.style.zIndex = "20000";
    iframe.style.border = "none";
    iframe.style.backdropFilter = "blur(6px) saturate(180%)";
    iframe.style.WebkitBackdropFilter = "blur(6px) saturate(180%)";
    iframe.style.backgroundColor = "rgba(17, 25, 40, 0.75)";
    iframe.style.borderRadius = "12px";
    iframe.style.border = "1px solid rgba(255, 255, 255, 0.125)";

    document.body.appendChild(iframe);
  }
  return (
    <div className="App" onClick={() => console.log("here")}>
      {injectOrRemoveIframe()}
    </div>
  );
}

export default App;
