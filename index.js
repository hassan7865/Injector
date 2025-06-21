(function () {
  const script = document.currentScript;

  // ✅ Use 'data-' prefix
  const userid = script.getAttribute("data-userid");
  const chatbotId = script.getAttribute("data-chatbotid");

  const iframe = document.createElement("iframe");
  iframe.src = `https://laxi-chatbot-843713389587.europe-west1.run.app?chatbotUserId=${userid}&chatbotId=${chatbotId}&start=close`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "350px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "10px";
  iframe.style.zIndex = "99999";

  document.body.appendChild(iframe);
})();
