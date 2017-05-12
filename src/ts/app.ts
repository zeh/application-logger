// https://medium.com/@paulirwin/getting-started-with-electron-and-visual-studio-code-typescript-and-react-36d41b68fadb
import { app, BrowserWindow, Menu, Tray } from 'electron';
import * as path from 'path';
import * as url from 'url';

declare var __dirname: string, process: any;

const electron = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: Electron.BrowserWindow | null;
let tray: Electron.Tray;

function createTray() {
	tray = new Tray('./dist/icons/iconNormal.png');
	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Item1', type: 'radio' },
		{ label: 'Item2', type: 'radio' },
		{ label: 'Item3', type: 'radio', checked: true},
		{ label: 'Item4', type: 'radio' }
	]);
	tray.setToolTip('This is my application.');
	tray.setContextMenu(contextMenu);
	// Reference: https://github.com/electron/electron/blob/master/docs/api/menu.md

	// To get the current application info:
	// 1. On Windows, use node-ffi? https://github.com/node-ffi/node-ffi
	// 2. On OSX
	//    Use AppleScript? https://github.com/TooTallNate/node-applescript
	//    Use lsappinfo info `lsappinfo front`? http://stackoverflow.com/questions/24515436/how-to-get-current-foreground-applications-name-or-pid-in-os-x
}

function createWindow() {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			webSecurity: false
		}
	});

	// and load the index.html of the app.
	mainWindow.loadURL(url.format({
		pathname: path.join(process.cwd(), 'dist', 'index.html'),
		protocol: 'file:',
		slashes: true,
	}));
	console.log("window created, current location is " + process.cwd());

	// Open the DevTools.
	mainWindow.webContents.openDevTools()

	// Emitted when the window is closed.
	mainWindow.on('closed', function () {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	createWindow();
	createTray();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', function () {
	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
