/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import { error } from 'console';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';

const { SerialPort } = require('serialport');
// const { DelimiterParser } = require('@serialport/parser-delimiter');
const { ReadlineParser } = require('@serialport/parser-readline');

let port: {
  close: (arg0: () => void) => void;
  pipe: (arg0: any) => any;
  write: (arg0: string) => void;
};
let comport: string;
let parser;
let baudrate = 9600;
let databits = 8;
let paritybits = 'none';
let stopbit = 1;

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDevelopment =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
  // require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDevelopment) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    frame: false,
    minWidth: 750,
    minHeight: 570,
    // resizable: false,
    icon: getAssetPath('icon_red.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  // mainWindow.on('closed', () => {
  //   mainWindow = null;
  // });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);

ipcMain.on('loading', (event) => {
  console.log(`comport list loading...`);
  SerialPort.list()
    .then((ports: any) => {
      console.log(ports);
      event.reply(
        'loading_data',
        ports.map(
          // eslint-disable-next-line @typescript-eslint/no-shadow
          (port: { path: string; manufacturer: string }) =>
            `${port.path} ${port.manufacturer}`
        )
      );
    })
    .catch(error);
});

ipcMain.on('minimize', (_event, data) => {
  console.log(data);
  mainWindow.minimize();
});

ipcMain.on('maximize', (_event, data) => {
  console.log(data);
  if (mainWindow.isMaximized()) {
    mainWindow.restore();
  } else {
    mainWindow.maximize();
  }
});

ipcMain.on('close', (_event, data) => {
  console.log(data);
  mainWindow.close();
});

ipcMain.on('connect', (event, data) => {
  console.log(data);
  if (data === 'Connect') {
    port = new SerialPort({
      path: comport,
      baudRate: baudrate,
      dataBits: databits,
      stopBit: stopbit,
      parityBits: paritybits,
    });
  } else {
    port.close(() => {});
  }

  parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

  parser.on('data', (parserData: any) => {
    console.log('Data:', parserData);
    event.reply('read_data', `${parserData}`);
  });
});

ipcMain.on('start', (_event, data) => {
  console.log(`start : ${data}`);
});

ipcMain.on('time', (_event, data) => {
  console.log(`time : ${data}`);
});

ipcMain.on('reset', (_event, data) => {
  console.log(`reset : ${data}`);
});

ipcMain.on('save', (_event, data) => {
  console.log(`save : ${data}`);
});

ipcMain.on('CR_Check', (_event, data) => {
  console.log(`CR_Check : ${data}`);
});

ipcMain.on('LF_Check', (_event, data) => {
  console.log(`LF_Check : ${data}`);
});

ipcMain.on('send_data', (_event, data) => {
  console.log(`send_data : ${data}`);
  port.write(`${data}\n`);
});

ipcMain.on('send_type', (_event, data) => {
  console.log(`send_type : ${data}`);
});

ipcMain.on('comport', (_event, data: string) => {
  const [array] = data.split(' ');
  comport = array;
  console.log(`comport : ${comport}`);
});

ipcMain.on('baudrate', (_event, data: number) => {
  baudrate = Number(data);
  console.log(`baudrate : ${baudrate}`);
});

ipcMain.on('databits', (_event, data: number) => {
  databits = Number(data);
  console.log(`databits : ${databits}`);
});

ipcMain.on('parity', (_event, data: string) => {
  paritybits = String(data);
  console.log(`parity : ${paritybits}`);
});

ipcMain.on('stopbits', (_event, data: number) => {
  stopbit = Number(data);
  console.log(`stopbits : ${stopbit}`);
});
