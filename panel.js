const logContainer = document.getElementById('log');

// Listen to all network requests without any filtering rules
chrome.devtools.network.onRequestFinished.addListener((request) => {
  
  request.getContent((responseContent) => {
    const item = document.createElement('div');
    item.className = 'request-container';

    // 1. Format Payload
    let payloadText = "No Payload data available";
    if (request.request.postData && request.request.postData.text) {
      try {
        payloadText = JSON.stringify(JSON.parse(request.request.postData.text), null, 2);
      } catch(e) {
        payloadText = request.request.postData.text;
      }
    }

    // 2. Format Preview/Response
    let previewText = "No Response data available";
    if (responseContent) {
      try {
        previewText = JSON.stringify(JSON.parse(responseContent), null, 2);
      } catch(e) {
        previewText = responseContent;
      }
    }

    // Build the layout HTML
    item.innerHTML = `
      <div class="url">[${request.request.method}] ${request.request.url}</div>
      <div class="grid">
        <div class="box">
          <h3>Request Payload</h3>
          <pre>${escapeHtml(payloadText)}</pre>
        </div>
        <div class="box">
          <h3>Response Preview</h3>
          <pre>${escapeHtml(previewText)}</pre>
        </div>
      </div>
    `;

    // Prepend so the latest request is always on top
    logContainer.insertBefore(item, logContainer.firstChild);
  });
});

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}