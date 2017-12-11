const { app, ipcMain, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const { HOST, PORT } = require('./config/socket')

class App {
  constructor () {
    this.app = app
    this.server = server
    this.ipcMain = ipcMain
    this.mainWindow = null

    this.app.on('ready', () => {
      this.mainWindow = new BrowserWindow({width: 1280, height: 720})
    
      this.mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))
    })

    this.app.on('window-all-closed', () => {
      this.app.quit()
    })

    this.ipcMain.on('close-main-window', (e, arg) => {
      this.app.quit()
    })

    // UDP SOCKERT SERVER
    server.on('error', (err) => {
      // console.log(`server error:\n${err.stack}`);
      server.close()
    })
    
    server.on('message', (msg, rinfo) => {
      // console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
      this.mainWindow.reload()
    })
    
    server.on('listening', () => {
      const address = server.address()
      // console.log(`server listening ${address.address}:${address.port}`)
    })
    
    server.bind(PORT, HOST)
  }
}

(() => {
  return new App()
})()