const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')
const readline = require('readline')

let mainWindow;
let ArduinoPort = ''

function createWindow () {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),
        protocol: 'file:',
        slashes: true,
    });

    mainWindow = new BrowserWindow({ 
        width: 800, 
        height: 600 ,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    mainWindow.loadURL(startUrl);
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
    app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('connect', () => {
    SerialPort.list()
    .then(ports => {
        let message = ''
        let done = false
        let count = 0
        let allports = ports.length
        ports.forEach(function(port) {
            count = count+1
            pm  = port.manufacturer
        
            if (typeof pm !== 'undefined' && pm.includes('arduino')) {
                const path = port.path
                ArduinoPort = new SerialPort(path, { baudRate: 115200 })
                
                ArduinoPort.on('open', function(){
                    console.log(`connected! arduino is now connected at port ${path}`)
                    message = `connected! arduino is now connected at port ${path}`
                    const status = true
                    mainWindow.send('connectResponse', message, status)
                })

                done = true
            }
        
            if(count === allports && done === false){
                console.log(`can't find any arduino`)
                message = `can't find any arduino`
                const status = false
                mainWindow.send('connectResponse', message, status)
            }
        });
    });
});

ipcMain.on('disconnect', () => {
    ArduinoPort.close()
    message = `Disconnected!`
    mainWindow.send('disconnectResponse', message)
});

ipcMain.on('start', () => {
    const parser = new Readline()

    ArduinoPort.pipe(parser)
    ArduinoPort.flush()

    const calibrationPromise = new Promise((resolve, reject) => {
        ArduinoPort.write('1')
        parser.on('data', (data) => {
            console.log(data)
            resolve('done')
        })
    })

    calibrationPromise.then( (successMessage) => {
        parser.on('data', function(data){
            mainWindow.send('startResponse', data)
        })
    } )
});