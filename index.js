const wdio = require("webdriverio")
const fs = require("fs")
const { setTimeout } = require('timers/promises')

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    'platformName': "ios",
    "appium:automationName": "XCUITest",
    'appium:platformVersion': "15.2",
    'appium:deviceName': "iPhone 12 Pro",
    'appium:app': "http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip",
    'appium:language': "en",
    'appium:orientation': "PORTRAIT",
    'appium:processArguments': {},
    'appium:clearSystemFiles': false,
    'appium:skipLogCapture': false,
  }
}

async function main () {
  const client = await wdio.remote(opts)

  await client.execute("mobile:configureLocalization", {
    keyboard: {
        name: "ja_JP-Kana",
        layout: "Kana",
        hardware: "Automatic"
    }
  })
  
  await setTimeout(5000)

  const windowSize = await client.getWindowSize()
  console.log(windowSize)
}

main()
