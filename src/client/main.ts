const { app, BrowserWindow, Menu } = require("electron");

const path = require("path");

const isMacOS = process.platform === "darwin";
const isWin = process.platform === "win32";
const isLinux = process.platform === "linux";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  const mainMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(mainMenu);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

//Menu template
const template = [
  // { role: 'appMenu' }
  ...(isMacOS
    ? [
        {
          label: app.name,
          submenu: [{ role: "about" }, { role: "quit" }],
        },
      ]
    : []),
  // { role: 'fileMenu' }
  {
    label: "File",
    submenu: [
      {
        label: "Clear Canvas",
      },
      {
        label: "Export Canvas",
      },
    ],
  },
  {
    role: "help",
    submenu: [
      {
        label: "Learn More about Quartz-Query",
        click: async () => {
          const { shell } = require("electron");
          await shell.openExternal(
            "https://github.com/RaffaelSchaefer/Quartz-Query"
          );
        },
      },
    ],
  },
];
