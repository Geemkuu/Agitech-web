const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  navigate: (url) => ipcRenderer.invoke('navigate', url),
  goBack: () => ipcRenderer.invoke('go-back'),
  goForward: () => ipcRenderer.invoke('go-forward'),
  reload: () => ipcRenderer.invoke('reload'),
  newTab: () => ipcRenderer.invoke('new-tab'),
  closeTab: () => ipcRenderer.invoke('close-tab'),
  minimize: () => ipcRenderer.invoke('minimize'),
  maximize: () => ipcRenderer.invoke('maximize'),
  close: () => ipcRenderer.invoke('close'),
  openSettings: () => ipcRenderer.invoke('open-settings')
});

// Listen for address updates
ipcRenderer.on('update-address', (event, url) => {
  const address = document.getElementById('address');
  if (address) {
    address.value = url;
  }
  const back = document.getElementById('back');
  const forward = document.getElementById('forward');
  // Note: For BrowserView, we can't directly check canGoBack from renderer
  // Would need to send back state via IPC
});