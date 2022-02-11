const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    myPing() {
      ipcRenderer.send('ipc-example', 'ping');
    },
    send(channel, func) {
      ipcRenderer.send(channel, func);
    },
    receive(channel, func) {
      ipcRenderer.on(channel, func);
    },
    on(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // const subscription = (event, ...args) => func(...args);
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, func);
        // return () => ipcRenderer.removeListener(channel, subscription);
      }
      // return null;
    },
    once(channel, func) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.once(channel, (event, ...args) => func(...args));
      }
    },
    removeAll(channel) {
      const validChannels = ['ipc-example'];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.removeAllListeners(channel);
      }
    },
  },
});

// contextBridge.exposeInMainWorld('api', {
//   send: (channel, data) => {
//     // let validChannels = ["test"];
//     // if (validChannels.includes(channel)) {
//     // console.log(data);
//     ipcRenderer.send(channel, data);
//     // }
//   },
//   receive: (channel, func) => {
//     // let validChannels = ["test"];
//     // if (validChannels.includes(channel)) {
//     ipcRenderer.on(channel, (event, ...args) => func(...args));
//     // }
//   },
// });
