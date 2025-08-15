function appLauncher() {
var html = `
<html>
<head>
</head>
<body>
<script>
    var browserCalled = false;
function browser() {
 if (browserCalled)  {
  console.log("error: an instance is already running");
  return;
 }
 browserCalled = true;
proxyurl = 'https://chat-isinterstellargood.safira.com.my'
const chromeWindow = (function createChromeLikeUI() {
  // --- Create root container ---
  var root = document.createElement('div');
  root.id = 'sim-chrome-root';
  Object.assign(root.style, {
    position: 'fixed',
    top: '20px',
    left: '20px',
    width: '1000px',
    height: '640px',
    zIndex: 2147483646, // very top
    boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
    borderRadius: '10px',
    overflow: 'hidden',
    background: '#ffffff'
  });

  // --- Insert styles ---
  const style = document.createElement('style');
  style.textContent = \`
    #sim-chrome-root * { box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
    #sim-chrome-top { background: linear-gradient(#f6f7f8,#ededf0); height: 44px; display:flex; align-items:center; padding:0 8px; gap:8px; }
    #sim-chrome-tabs { display:flex; gap:6px; align-items:center; padding:0 8px; height: 32px; }
    .sim-tab { display:flex; align-items:center; gap:8px; padding:6px 10px; background:transparent; border-radius:6px; cursor:pointer; user-select:none; font-size:13px; color:#333; max-width:200px; overflow:hidden; white-space:nowrap; text-overflow:ellipsis;}
    .sim-tab.active { background: rgba(0,0,0,0.06); box-shadow: inset 0 -1px 0 rgba(0,0,0,0.04); }
    .sim-tab .close { font-weight:700; color:#777; cursor:pointer; padding-left:6px; }
    #sim-address-row { display:flex; align-items:center; gap:8px; flex:1; margin: 0 8px; }
    #sim-url-input { flex:1; height:32px; border-radius:6px; border:1px solid rgba(0,0,0,0.12); padding:0 10px; font-size:14px; }
    #sim-open-btn, #sim-fullscreen-btn, #sim-newtab-btn { height:32px; padding:0 12px; border-radius:6px; border:1px solid rgba(0,0,0,0.12); background:#fff; cursor:pointer; font-size:13px; }
    #sim-toolbar { display:flex; align-items:center; gap:8px; padding:8px; background: #fff; border-top: 1px solid rgba(0,0,0,0.06); }
    .sim-iframe { width:100%; height: calc(100% - 84px); border:0; background:#fff; }
    #sim-status { font-size:12px; color:#666; margin-left:8px; }
    /* Tiny responsive */
    @media (max-width: 600px) {
      #sim-chrome-root { left:6px; right:6px; width:auto; height:480px; }
    }
  \`;
  document.head.appendChild(style);

  // --- Top area (tabs + address) ---
  const top = document.createElement('div');
  top.id = 'sim-chrome-top';
  root.appendChild(top);

 // Get or create the top bar for your browser app
var topBar = document.getElementById('browserTopBar');
if (!topBar) {
    topBar = document.createElement('div');
    topBar.id = 'browserTopBar';
    topBar.style.display = 'flex';
    topBar.style.justifyContent = 'flex-end';
    topBar.style.alignItems = 'center';
    topBar.style.padding = '2px';
    topBar.style.background = '#ccc';
    topBar.style.cursor = 'move';
}

// Create buttons
var btnMin = document.createElement('button');
btnMin.innerText = '-';
btnMin.title = 'Minimize';
topBar.appendChild(btnMin);

var btnMax = document.createElement('button');
btnMax.innerText = '□';
btnMax.title = 'Maximize/Restore';
topBar.appendChild(btnMax);

var btnClose = document.createElement('button');
btnClose.innerText = 'x';
btnClose.title = 'Close';
btnClose.style.color = 'white';
btnClose.style.backgroundColor = 'red';
topBar.appendChild(btnClose);

[topBar, btnMin, btnMax, btnClose].forEach(el => {
    el.style.margin = '0 2px';
    el.style.border = 'none';
    el.style.padding = '2px 5px';
    el.style.fontSize = '14px';
    el.style.cursor = 'pointer';
});
 
 var isMinimized = false;
var isMaximized = false;
var savedBounds = null;

function getBounds() {
  return {
    left: root.style.left,
    top: root.style.top,
    width: root.style.width,
    height: root.style.height,
    position: root.style.position || 'fixed'
  };
}
function applyBounds(b) {
  root.style.position = b.position;
  root.style.left = b.left;
  root.style.top = b.top;
  root.style.width = b.width;
  root.style.height = b.height;
}

// MINIMIZE
 /*
btnMin.addEventListener('click', function () {
  if (!isMinimized) {
    savedBounds = getBounds();
    root.style.width = "0px";
    root.style.height = "0px";
    isMinimized = true;
  } else {
    if (savedBounds) applyBounds(savedBounds);
    isMinimized = false;
  }
});
*/
// MAXIMIZE / RESTORE
btnMax.addEventListener('click', function () {
  if (!isMaximized) {
    savedBounds = getBounds();
    root.style.position = 'absolute';
    root.style.left = '0';
    root.style.top = '0';
    root.style.width = '100%';
    // leave space for restart button (assume 50px)
    root.style.height = \`calc(100% - 30px)\`;
    btnMax.textContent = '⧉'; // restore symbol
    isMaximized = true;
    isMinimized = false;
  } else {
    if (savedBounds) applyBounds(savedBounds);
    btnMax.textContent = '□';
    isMaximized = false;
  }
});

// CLOSE
btnClose.addEventListener('click', function () {
  root.remove();
  root = null;
 browserCalled = false;
});

 
  const tabsRow = document.createElement('div');
  tabsRow.id = 'sim-chrome-tabs';
  top.appendChild(tabsRow);


 
  // new tab button
  const newTabBtn = document.createElement('button');
  newTabBtn.id = 'sim-newtab-btn';
  newTabBtn.innerText = '+';
  newTabBtn.title = 'New tab';
  Object.assign(newTabBtn.style, {width:'36px', padding:'6px', fontSize:'16px', display:'inline-flex', alignItems:'center', justifyContent:'center'});
  tabsRow.appendChild(newTabBtn);

  // address row (URL input + open + fullscreen)
 const addressRow = document.createElement('div');
  addressRow.id = 'sim-address-row';
  root.appendChild(addressRow);

 
  const urlInput = document.createElement('input');
  urlInput.id = 'sim-url-input';
  urlInput.type = 'text';
  urlInput.placeholder = 'Enter URL (e.g. https://example.com)';
  urlInput.autocapitalize = 'off';
  urlInput.autocomplete = 'off';
  urlInput.spellcheck = false;
  addressRow.appendChild(urlInput);

  const openBtn = document.createElement('button');
  openBtn.id = 'sim-open-btn';
  openBtn.innerText = 'Open';
  addressRow.appendChild(openBtn);

  const fullscreenBtn = document.createElement('button');
  fullscreenBtn.id = 'sim-fullscreen-btn';
  fullscreenBtn.innerText = '⤢';
  fullscreenBtn.title = 'Toggle fullscreen';
  addressRow.prepend(fullscreenBtn);

  const status = document.createElement('div');
  status.id = 'sim-status';
  status.innerText = '';
  top.appendChild(status);

  // --- Toolbar (below top) ---
  

  // --- Iframe content area ---
  var iframes = [];

  // Append to document
  document.body.appendChild(root);
 top.prepend(topBar);

  // --- Tabs management ---
  let tabs = [];
  let activeTabId = null;
  let tabCounter = 0;

  function renderTabs() {
    // clear existing (except new tab button)
    // remove all children, then append newTabBtn and tabs
    while (tabsRow.firstChild) tabsRow.removeChild(tabsRow.firstChild);
    tabsRow.appendChild(newTabBtn);
    // tabs
    tabs.forEach(t => {
      const el = document.createElement('div');
      el.className = 'sim-tab' + (t.id === activeTabId ? ' active' : '');
      el.title = t.title || t.url || 'New Tab';
      el.innerHTML = \`<span class="sim-tab-title">\${t.title || t.url || 'New Tab'}</span>
                      <span class="close" title="Close tab">&times;</span>\`;
      el.addEventListener('click', (ev) => {
        if (ev.target.classList.contains('close')) return;
        activateTab(t.id);
      });
      // close handler
      el.querySelector('.close').addEventListener('click', (ev) => {
        ev.stopPropagation();
        closeTab(t.id);
      });
      tabsRow.appendChild(el);
    });
  }

  function addTab(url = a("https://www.google.com", proxyurl), title = '') {
  const id = 'tab-' + (++tabCounter);
  const iframe = document.createElement("iframe");
  iframe.className = "sim-iframe";
  iframe.src = a(url, proxyurl);
  iframe.style.display = "none"; // hidden until active
  root.appendChild(iframe);

  const tab = { id, url, title, iframe };
  tabs.push(tab);
  activateTab(id);
  renderTabs();
  return id;
}

function activateTab(id) {
  const tab = tabs.find(t => t.id === id);
  if (!tab) return;

  // Hide all iframes, show only active
  tabs.forEach(t => t.iframe.style.display = "none");
  tab.iframe.style.display = "block";

  activeTabId = id;
  urlInput.value = tab.url || '';

  setTimeout(() => {
    try {
      const docTitle = tab.iframe.contentDocument && tab.iframe.contentDocument.title;
      if (docTitle) {
        tab.title = docTitle;
        renderTabs();
      }
    } catch(e) {}
  }, 800);

  renderTabs();
}

function closeTab(id) {
  const idx = tabs.findIndex(t => t.id === id);
  if (idx === -1) return;

  const removingActive = tabs[idx].id === activeTabId;
  tabs[idx].iframe.remove(); // remove iframe from DOM
  tabs.splice(idx, 1);

  if (removingActive) {
    if (tabs.length) activateTab(tabs[Math.max(0, idx - 1)].id);
    else addTab('');
  } else {
    renderTabs();
  }
}
    
    addTab('', "New Tab");

 

  // --- Open button behavior ---
  function normalizeUrl(input) {
      return input;
  }

  function openUrlInActiveTab(rawUrl) {
  const url = normalizeUrl(rawUrl);
  const tabIndex = tabs.findIndex(t => t.id === activeTabId);
  if (tabIndex === -1) return;

  tabs[tabIndex].url = url;

  // Directly update the iframe for the active tab
  if (tabs[tabIndex].iframe) {
    tabs[tabIndex].iframe.src = a(url, proxyurl);
  }

  urlInput.value = url;
  status.innerText = \`Loaded: \${url}\`;
  setTimeout(() => status.innerText = '', 3000);
}

  openBtn.addEventListener('click', () => openUrlInActiveTab(urlInput.value));
  urlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') openUrlInActiveTab(urlInput.value);
  });

  // new tab
  newTabBtn.addEventListener('click', () => {
    const id = addTab('', 'New Tab');
    activateTab(id);
    urlInput.focus();
  });

  // fullscreen toggle
  let isFullscreen = false;
  async function enterFullscreen() {
    if (root.requestFullscreen) await root.requestFullscreen();
    else if (root.webkitRequestFullscreen) await root.webkitRequestFullscreen();
    isFullscreen = true;
    fullscreenBtn.innerText = '⤡';
  }
  async function exitFullscreen() {
    if (document.exitFullscreen) await document.exitFullscreen();
    else if (document.webkitExitFullscreen) await document.webkitExitFullscreen();
    isFullscreen = false;
    fullscreenBtn.innerText = '⤢';
  }
  fullscreenBtn.addEventListener('click', () => {
    if (!isFullscreen) enterFullscreen(); else exitFullscreen();
  });

  // drag to move window
  (function makeDraggable() {
    let dragging = false, startX=0, startY=0, origLeft=0, origTop=0;
    top.addEventListener('mousedown', (ev) => {
      if (ev.target.closest('.sim-tab') || ev.target === newTabBtn || ev.target === urlInput || ev.target === openBtn) return;
      dragging = true;
      startX = ev.clientX; startY = ev.clientY;
      const rect = root.getBoundingClientRect();
      origLeft = rect.left; origTop = rect.top;
      document.body.style.userSelect = 'none';
    });
    window.addEventListener('mousemove', (ev) => {
      if (!dragging) return;
      const dx = ev.clientX - startX, dy = ev.clientY - startY;
      root.style.left = (origLeft + dx) + 'px';
      root.style.top = (origTop + dy) + 'px';
    });
    window.addEventListener('mouseup', () => {
      dragging = false;
      document.body.style.userSelect = '';
    });
  })();

  root.addEventListener('contextmenu', (ev) => {
    // if right-click on a tab, show simple menu
    const tabEl = ev.target.closest('.sim-tab');
    if (!tabEl) return;
    ev.preventDefault();
    const allTabs = Array.from(root.querySelectorAll('.sim-tab'));
    const index = allTabs.indexOf(tabEl);
    const tab = tabs[index];
    const menu = document.createElement('div');
    Object.assign(menu.style, {
      position:'fixed', left:ev.clientX+'px', top:ev.clientY+'px', background:'#fff', border:'1px solid rgba(0,0,0,0.14)', padding:'6px', zIndex:2147483647, borderRadius:'6px'
    });
    menu.innerHTML = \`<div style="padding:6px; cursor:pointer;">Reload</div><div style="padding:6px; cursor:pointer;">Close</div>\`;
    menu.children[0].addEventListener('click', () => { iframe.contentWindow.location.reload(); menu.remove(); });
    menu.children[1].addEventListener('click', () => { closeTab(tab.id); menu.remove(); });
    document.body.appendChild(menu);
    const rm = () => menu.remove();
    setTimeout(() => window.addEventListener('click', rm, { once:true }));
  });

  // Expose an object with useful methods and root element
  return {
    rootElement: root,
    iframes,
    urlInput,
    openBtn,
    fullscreenBtn,
    addTab,
    activateTab,
    closeTab,
    openUrl: openUrlInActiveTab,
    enterFullscreen,
    exitFullscreen,
  
    addAndOpen: function (url) { const id = addTab(url); activateTab(id); },
    // the list of tabs (live object)
    get tabs() { return tabs; }
  };
})();

function a(url, proxyurl) {
 function encodeUV(str) {
  return encodeURIComponent(
    str.split('').map((ch,i)=>
      (i%2 ? String.fromCharCode(ch.charCodeAt(0)^2) : ch)
    ).join('')
  );
}

// Example:
 return proxyurl + '/a/' + encodeUV(url) + '-';
// => hvtrs8%2F-wuw%2Chgrm-uaps%2Ccmm
}
}


// Create the taskbar
var taskbar = document.createElement('div');
taskbar.id = 'taskbar';
taskbar.style.position = 'fixed';
taskbar.style.bottom = '0';
taskbar.style.left = '0';
taskbar.style.width = '100%';
taskbar.style.height = '30px';
taskbar.style.background = '#222';
taskbar.style.display = 'flex';
taskbar.style.alignItems = 'center';
taskbar.style.paddingLeft = '50px'; // 50px empty space on left
taskbar.style.boxSizing = 'border-box';
document.body.appendChild(taskbar);

// Function to add a task button
function addTaskButton(name, onclickFunc) {
    var btn = document.createElement('button');
    btn.innerText = name;
    btn.value = name; // Use value to identify the task
    btn.style.padding = '3px';
    btn.style.marginRight = '5px';
    btn.style.border = 'none';
    btn.style.borderRadius = '3px';
    btn.style.cursor = 'pointer';
    btn.style.background = '#444';
    btn.style.color = '#fff';
    btn.addEventListener('click', () => {
        console.log('Task clicked:', btn.value);
     onclickFunc();
        // You can add code here to bring the corresponding window to front
    });
    taskbar.appendChild(btn);
}

isFull = false;
function fullscreen() {
if (!isFull) {
isFull = true;
document.documentElement.requestFullscreen();
}
else {
document.exitFullscreen();
isFull = false;
}}
// Example: add some task buttons
addTaskButton('full', fullscreen);
addTaskButton('🌐', browser);
addTaskButton('X');
addTaskButton('X');
</script>
</body>
</html>
`;
newWind = window.open("", "blank");
newWind.document.write(html);
newWind.document.close();
}
