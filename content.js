function injectOrRemoveIframe() {
  const currentUrl = window.location.href;
  const existingIframe = document.querySelector("iframe#zillow-iframe");

  if ((currentUrl.startsWith("https://www.zillow.com/homedetails/") || 
       currentUrl.startsWith("https://www.zillow.com/b/")) && !existingIframe) {
    // Inject the iframe if it doesn't exist
    const iframe = document.createElement("iframe");
    iframe.id = "zillow-iframe";
    iframe.src = "https://zillow-comments.com" + window.location.pathname;
    iframe.style.position = "fixed";
    iframe.style.top = "10px";
    iframe.style.left = "10px";
    iframe.style.width = "400px";
    iframe.style.height = "2000px";
    iframe.style.zIndex = "20000";
    iframe.style.border = "none";
    document.body.appendChild(iframe);
  } else if (!currentUrl.startsWith("https://www.zillow.com/homedetails/") &&
             !currentUrl.startsWith("https://www.zillow.com/b/") && existingIframe) {
    // Remove the iframe if it exists and the URL no longer matches
    existingIframe.remove();
  }
}

// Run the function once to check the initial load
injectOrRemoveIframe();

// Observe URL changes using MutationObserver
const observer = new MutationObserver(() => {
  injectOrRemoveIframe();
});

observer.observe(document, { subtree: true, childList: true });
