# Appium Log

```
[Appium] Welcome to Appium v2.1.3 (REV e41649d0439531134878d0ed26bd4845fcb75965)
[Appium] Non-default server args:
[Appium] {
[Appium]   basePath: '/wd/hub'
[Appium] }
[Appium] Attempting to load driver xcuitest...
[debug] [Appium] Requiring driver at /Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-xcuitest-driver
[Appium] Appium REST http interface listener started on http://0.0.0.0:4723/wd/hub
[Appium] You can provide the following URLs in your client code to connect to this server:
[Appium]        http://127.0.0.1:4723/wd/hub (only accessible from the same host)
[Appium]        http://192.168.0.231:4723/wd/hub
[Appium] Available drivers:
[Appium]   - xcuitest@5.3.3 (automationName 'XCUITest')
[Appium] No plugins have been installed. Use the "appium plugin" command to install the one(s) you want to use.
[HTTP] --> POST /wd/hub/session
[HTTP] {"capabilities":{"alwaysMatch":{"platformName":"ios","appium:automationName":"XCUITest","appium:platformVersion":"15.2","appium:deviceName":"iPhone 12 Pro","appium:app":"http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip","appium:language":"en","appium:orientation":"PORTRAIT","appium:processArguments":{},"appium:clearSystemFiles":false,"appium:skipLogCapture":false},"firstMatch":[{}]},"desiredCapabilities":{"platformName":"ios","appium:automationName":"XCUITest","appium:platformVersion":"15.2","appium:deviceName":"iPhone 12 Pro","appium:app":"http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip","appium:language":"en","appium:orientation":"PORTRAIT","appium:processArguments":{},"appium:clearSystemFiles":false,"appium:skipLogCapture":false}}
[debug] [AppiumDriver@90dc] Calling AppiumDriver.createSession() with args: [{"platformName":"ios","appium:automationName":"XCUITest","appium:platformVersion":"15.2","appium:deviceName":"iPhone 12 Pro","appium:app":"http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip","appium:language":"en","appium:orientation":"PORTRAIT","appium:processArguments":{},"appium:clearSystemFiles":false,"appium:skipLogCapture":false},null,{"alwaysMatch":{"platformName":"ios","appium:automationName":"XCUITest","appium:platformVersion":"15.2","appium:deviceName":"iPhone 12 Pro","appium:app":"http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip","appium:language":"en","appium:orientation":"PORTRAIT","appium:processArguments":{},"appium:clearSystemFiles":false,"appium:skipLogCapture":false},"firstMatch":[{}]}]
[debug] [AppiumDriver@90dc] Event 'newSessionRequested' logged at 1695649762420 (22:49:22 GMT+0900 (Japan Standard Time))
[Appium] Attempting to find matching driver for automationName 'XCUITest' and platformName 'ios'
[Appium] The 'xcuitest' driver was installed and matched caps.
[Appium] Will require it at /Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-xcuitest-driver
[debug] [Appium] Requiring driver at /Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-xcuitest-driver
[AppiumDriver@90dc] Appium v2.1.3 creating new XCUITestDriver (v5.3.3) session
[AppiumDriver@90dc] Checking BaseDriver versions for Appium and XCUITestDriver
[AppiumDriver@90dc] Appium's BaseDriver version is 9.3.20
[AppiumDriver@90dc] XCUITestDriver's BaseDriver version is 9.3.20
[debug] [XCUITestDriver@a705] Creating session with W3C capabilities: {
[debug] [XCUITestDriver@a705]   "alwaysMatch": {
[debug] [XCUITestDriver@a705]     "platformName": "ios",
[debug] [XCUITestDriver@a705]     "appium:automationName": "XCUITest",
[debug] [XCUITestDriver@a705]     "appium:platformVersion": "15.2",
[debug] [XCUITestDriver@a705]     "appium:deviceName": "iPhone 12 Pro",
[debug] [XCUITestDriver@a705]     "appium:app": "http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip",
[debug] [XCUITestDriver@a705]     "appium:language": "en",
[debug] [XCUITestDriver@a705]     "appium:orientation": "PORTRAIT",
[debug] [XCUITestDriver@a705]     "appium:processArguments": {},
[debug] [XCUITestDriver@a705]     "appium:clearSystemFiles": false,
[debug] [XCUITestDriver@a705]     "appium:skipLogCapture": false
[debug] [XCUITestDriver@a705]   },
[debug] [XCUITestDriver@a705]   "firstMatch": [
[debug] [XCUITestDriver@a705]     {}
[debug] [XCUITestDriver@a705]   ]
[debug] [XCUITestDriver@a705] }
[XCUITestDriver@a705 (b7ded3be)] Session created with session id: b7ded3be-0cbd-49c6-a12c-438a1451efc8
[debug] [XCUITest] Current user: 'tai2'
[XCUITestDriver@a705 (b7ded3be)] No real device udid has been provided in capabilities. Will select a matching simulator to run the test.
[XCUITestDriver@a705 (b7ded3be)] iOS SDK Version set to '17.0'
[debug] [XCUITest] Looking for an existing Simulator with platformName: iOS, platformVersion: 15.2, deviceName: iPhone 12 Pro
[iOSSim] Constructing iOS simulator for Xcode version 15.0 with udid '094788CA-AFD3-4EA7-BF02-461D6AF458B0'
[XCUITestDriver@a705 (b7ded3be)] Determining device to run tests on: udid: '094788CA-AFD3-4EA7-BF02-461D6AF458B0', real device: false
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'xcodeDetailsRetrieved' logged at 1695649762657 (22:49:22 GMT+0900 (Japan Standard Time))
[BaseDriver] Using downloadable app 'http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip'
 HTTP  9/25/2023 10:49:22 PM ::1 GET /UIKitCatalog-iphonesimulator.app.zip
 HTTP  9/25/2023 10:49:22 PM ::1 Returned 200 in 27 ms
[debug] [BaseDriver] Etag: "a1e2c218d73f934127d95159c841aa4b85360c50"
[debug] [BaseDriver] Last-Modified: undefined
[debug] [BaseDriver] Cache-Control: undefined
[debug] [BaseDriver] Content-Type: application/zip
[debug] [BaseDriver] The application (1.57 MB) has been downloaded to '/var/folders/2t/ndb5vh014k1bw8jljyqgkgs80000gn/T/2023825-145-17ja5zq.c49b/UIKitCatalog-iphonesimulator.app.zip' in 0.003s
[debug] [Support] Found 'unzip' at '/usr/bin/unzip'
[debug] [XCUITestDriver@a705 (b7ded3be)] Found 1 bundle in 'UIKitCatalog-iphonesimulator.app.zip': UIKitCatalog-iphonesimulator.app
[XCUITestDriver@a705 (b7ded3be)] 'UIKitCatalog-iphonesimulator.app' is the resulting application bundle selected from '/var/folders/2t/ndb5vh014k1bw8jljyqgkgs80000gn/T/2023825-145-17ja5zq.c49b/UIKitCatalog-iphonesimulator.app.zip'
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'appConfigured' logged at 1695649762742 (22:49:22 GMT+0900 (Japan Standard Time))
[debug] [XCUITest] Checking whether app '/var/folders/2t/ndb5vh014k1bw8jljyqgkgs80000gn/T/2023825-145-kssn60.b4cke/UIKitCatalog-iphonesimulator.app' is actually present on file system
[debug] [XCUITest] App is present
[debug] [XCUITest] Getting bundle ID from app '/var/folders/2t/ndb5vh014k1bw8jljyqgkgs80000gn/T/2023825-145-kssn60.b4cke/UIKitCatalog-iphonesimulator.app': 'com.example.apple-samplecode.UICatalog'
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'resetStarted' logged at 1695649762742 (22:49:22 GMT+0900 (Japan Standard Time))
[debug] [simctl] Error running 'terminate': An error was encountered processing the command (domain=NSPOSIXErrorDomain, code=3):
Simulator device returned an error for the requested operation.
FBSSystemService reported failure without an error, possibly because the app is not currently running.
Underlying error (domain=NSPOSIXErrorDomain, code=3):
        Application termination failed.
        FBSSystemService reported failure without an error, possibly because the app is not currently running.
[XCUITest] Reset: failed to terminate Simulator application with id "com.example.apple-samplecode.UICatalog"
[XCUITest] Not scrubbing third party app in anticipation of uninstall
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'resetComplete' logged at 1695649762841 (22:49:22 GMT+0900 (Japan Standard Time))
[XCUITestDriver@a705 (b7ded3be)] Using WDA path: '/Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-webdriveragent'
[XCUITestDriver@a705 (b7ded3be)] Using WDA agent: '/Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-webdriveragent/WebDriverAgent.xcodeproj'
[debug] [IOSSimulatorLog] Starting log capture for iOS Simulator with udid '094788CA-AFD3-4EA7-BF02-461D6AF458B0' using simctl
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'logCaptureStarted' logged at 1695649763103 (22:49:23 GMT+0900 (Japan Standard Time))
[XCUITestDriver@a705 (b7ded3be)] Setting up simulator
[debug] [iOSSim] Setting preferences of 094788CA-AFD3-4EA7-BF02-461D6AF458B0 Simulator to {"SimulatorWindowOrientation":"Portrait","SimulatorWindowRotationAngle":0,"ConnectHardwareKeyboard":false}
[debug] [iOSSim] Setting common Simulator preferences to {"RotateWindowWhenSignaledByGuest":true,"StartLastDeviceOnLaunch":false,"DetachOnWindowClose":false,"AttachBootedOnStart":true,"ConnectHardwareKeyboard":false,"PasteboardAutomaticSync":false}
[debug] [iOSSim] Updated 094788CA-AFD3-4EA7-BF02-461D6AF458B0 Simulator preferences at '/Users/tai2/Library/Preferences/com.apple.iphonesimulator.plist' with {"RotateWindowWhenSignaledByGuest":true,"StartLastDeviceOnLaunch":false,"DetachOnWindowClose":false,"AttachBootedOnStart":true,"ConnectHardwareKeyboard":false,"PasteboardAutomaticSync":false,"DevicePreferences":{"094788CA-AFD3-4EA7-BF02-461D6AF458B0":{"SimulatorExternalDisplay":2114,"ConnectHardwareKeyboard":false,"ChromeTint":"","SimulatorWindowOrientation":"Portrait","SimulatorWindowGeometry":{"FE1AE307-BF61-4A8E-9BAF-FD82332B0C65":{"WindowCenter":"{763.5, 462.5}","WindowScale":0.9707207207207207},"50F49432-B5FA-495F-AFF1-8891AF0C1B4D":{"WindowCenter":"{-748.5, 560.5}","WindowScale":0.9707207207207207}},"SimulatorWindowRotationAngle":0}}}
[debug] [iOSSim] Got Simulator UI client PID: 1100
[iOSSim] Both Simulator with UDID '094788CA-AFD3-4EA7-BF02-461D6AF458B0' and the UI client are currently running
[debug] [XCUITest] About to update localization preferences: {"language":{"name":"en"}}
[debug] [XCUITestDriver@a705 (b7ded3be)] Localization preferences have been updated
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'simStarted' logged at 1695649763998 (22:49:23 GMT+0900 (Japan Standard Time))
[debug] [XCUITest] Verifying application platform
[debug] [XCUITest] CFBundleSupportedPlatforms: ["iPhoneSimulator"]
[XCUITestDriver@a705 (b7ded3be)] App 'com.example.apple-samplecode.UICatalog' is already installed
[debug] [XCUITest] Reset requested. Removing app with id 'com.example.apple-samplecode.UICatalog' from the device
[debug] [XCUITest] Installing '/var/folders/2t/ndb5vh014k1bw8jljyqgkgs80000gn/T/2023825-145-kssn60.b4cke/UIKitCatalog-iphonesimulator.app' on Simulator with UUID '094788CA-AFD3-4EA7-BF02-461D6AF458B0'...
[debug] [XCUITest] The app has been installed successfully.
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'appInstalled' logged at 1695649765778 (22:49:25 GMT+0900 (Japan Standard Time))
[debug] [XCUITestDriver@a705 (b7ded3be)] No obsolete cached processes from previous WDA sessions listening on port 8100 have been found
[DevCon Factory] Requesting connection for device 094788CA-AFD3-4EA7-BF02-461D6AF458B0 on local port 8100
[debug] [DevCon Factory] Cached connections count: 0
[DevCon Factory] Successfully requested the connection for 094788CA-AFD3-4EA7-BF02-461D6AF458B0:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Starting WebDriverAgent initialization with the synchronization key 'XCUITestDriver'
[debug] [WD Proxy] Matched '/status' to command name 'getStatus'
[debug] [WD Proxy] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[WD Proxy] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] WDA is not listening at 'http://127.0.0.1:8100/'
[debug] [XCUITestDriver@a705 (b7ded3be)] WDA is currently not running. There is nothing to cache
[debug] [XCUITestDriver@a705 (b7ded3be)] Trying to start WebDriverAgent 2 times with 10000ms interval
[debug] [XCUITestDriver@a705 (b7ded3be)] These values can be customized by changing wdaStartupRetries/wdaStartupRetryInterval capabilities
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'wdaStartAttempted' logged at 1695649765896 (22:49:25 GMT+0900 (Japan Standard Time))
[XCUITestDriver@a705 (b7ded3be)] Launching WebDriverAgent on the device
[XCUITestDriver@a705 (b7ded3be)] Cleaning up the WebDriverAgent project after the module upgrade has happened (5.0.0 < 5.9.1)
[debug] [XCUITestDriver@a705 (b7ded3be)] Cleaning the project scheme 'WebDriverAgentLib' to make sure there are no leftovers from previous installs
[debug] [XCUITestDriver@a705 (b7ded3be)] Cleaning the project scheme 'WebDriverAgentRunner' to make sure there are no leftovers from previous installs
[debug] [XCUITestDriver@a705 (b7ded3be)] Parsed BUILD_DIR configuration value: '/Users/tai2/Library/Developer/Xcode/DerivedData/WebDriverAgent-acfmfzozfexltodbcmjpudoqiaxl/Build/Products'
[debug] [XCUITestDriver@a705 (b7ded3be)] Got derived data root: '/Users/tai2/Library/Developer/Xcode/DerivedData/WebDriverAgent-acfmfzozfexltodbcmjpudoqiaxl'
[debug] [WebDriverAgent] Killing running processes 'xcodebuild.*094788CA-AFD3-4EA7-BF02-461D6AF458B0, 094788CA-AFD3-4EA7-BF02-461D6AF458B0.*XCTRunner, xctest.*094788CA-AFD3-4EA7-BF02-461D6AF458B0' for the device 094788CA-AFD3-4EA7-BF02-461D6AF458B0...
[debug] [WebDriverAgent] 'pgrep -if xcodebuild.*094788CA-AFD3-4EA7-BF02-461D6AF458B0' didn't detect any matching processes. Return code: 1
[debug] [WebDriverAgent] 'pgrep -if 094788CA-AFD3-4EA7-BF02-461D6AF458B0.*XCTRunner' didn't detect any matching processes. Return code: 1
[debug] [WebDriverAgent] 'pgrep -if xctest.*094788CA-AFD3-4EA7-BF02-461D6AF458B0' didn't detect any matching processes. Return code: 1
[debug] [XCUITestDriver@a705 (b7ded3be)] Beginning test with command 'xcodebuild build-for-testing test-without-building -project /Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-webdriveragent/WebDriverAgent.xcodeproj -scheme WebDriverAgentRunner -derivedDataPath /Users/tai2/Library/Developer/Xcode/DerivedData/WebDriverAgent-acfmfzozfexltodbcmjpudoqiaxl -destination id=094788CA-AFD3-4EA7-BF02-461D6AF458B0 IPHONEOS_DEPLOYMENT_TARGET=15.2 GCC_TREAT_WARNINGS_AS_ERRORS=0 COMPILER_INDEX_STORE_ENABLE=NO' in directory '/Users/tai2/Code/autify/appium-configureLocalization-issue-sscce/node_modules/appium-webdriveragent'
[debug] [XCUITestDriver@a705 (b7ded3be)] Output from xcodebuild will only be logged if any errors are present there. To change this, use 'showXcodeLog' desired capability
[debug] [XCUITestDriver@a705 (b7ded3be)] Waiting up to 60000ms for WebDriverAgent to start
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[XCUITestDriver@a705 (b7ded3be)] connect ECONNREFUSED 127.0.0.1:8100
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/status' to command name 'getStatus'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /status] to [GET http://127.0.0.1:8100/status] with no body
[debug] [XCUITestDriver@a705 (b7ded3be)] Got response with status 200: {"value":{"build":{"upgradedAt":"1695617483462","time":"Sep 25 2023 22:49:30","productBundleIdentifier":"com.facebook.WebDriverAgentRunner"},"os":{"testmanagerdVersion":65535,"name":"iOS","sdkVersion":"17.0","version":"15.2"},"device":"iphone","ios":{"simulatorVersion":"15.2","ip":"192.168.0.231"},"message":"WebDriverAgent is ready to accept commands","state":"success","ready":true},"sessionId":null}
[debug] [XCUITestDriver@a705 (b7ded3be)] WebDriverAgent information:
[debug] [XCUITestDriver@a705 (b7ded3be)] {
[debug] [XCUITestDriver@a705 (b7ded3be)]   "build": {
[debug] [XCUITestDriver@a705 (b7ded3be)]     "upgradedAt": "1695617483462",
[debug] [XCUITestDriver@a705 (b7ded3be)]     "time": "Sep 25 2023 22:49:30",
[debug] [XCUITestDriver@a705 (b7ded3be)]     "productBundleIdentifier": "com.facebook.WebDriverAgentRunner"
[debug] [XCUITestDriver@a705 (b7ded3be)]   },
[debug] [XCUITestDriver@a705 (b7ded3be)]   "os": {
[debug] [XCUITestDriver@a705 (b7ded3be)]     "testmanagerdVersion": 65535,
[debug] [XCUITestDriver@a705 (b7ded3be)]     "name": "iOS",
[debug] [XCUITestDriver@a705 (b7ded3be)]     "sdkVersion": "17.0",
[debug] [XCUITestDriver@a705 (b7ded3be)]     "version": "15.2"
[debug] [XCUITestDriver@a705 (b7ded3be)]   },
[debug] [XCUITestDriver@a705 (b7ded3be)]   "device": "iphone",
[debug] [XCUITestDriver@a705 (b7ded3be)]   "ios": {
[debug] [XCUITestDriver@a705 (b7ded3be)]     "simulatorVersion": "15.2",
[debug] [XCUITestDriver@a705 (b7ded3be)]     "ip": "192.168.0.231"
[debug] [XCUITestDriver@a705 (b7ded3be)]   },
[debug] [XCUITestDriver@a705 (b7ded3be)]   "message": "WebDriverAgent is ready to accept commands",
[debug] [XCUITestDriver@a705 (b7ded3be)]   "state": "success",
[debug] [XCUITestDriver@a705 (b7ded3be)]   "ready": true
[debug] [XCUITestDriver@a705 (b7ded3be)] }
[debug] [XCUITestDriver@a705 (b7ded3be)] WebDriverAgent successfully started after 25553ms
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'wdaSessionAttempted' logged at 1695649793890 (22:49:53 GMT+0900 (Japan Standard Time))
[debug] [XCUITestDriver@a705 (b7ded3be)] Sending createSession command to WDA
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/session' to command name 'createSession'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [POST /session] to [POST http://127.0.0.1:8100/session] with body: {"capabilities":{"firstMatch":[{"bundleId":"com.example.apple-samplecode.UICatalog","arguments":["-AppleLanguages","(en)","-NSLanguages","(en)"],"environment":{},"eventloopIdleDelaySec":0,"shouldWaitForQuiescence":true,"shouldUseTestManagerForVisibilityDetection":false,"maxTypingFrequency":60,"shouldUseSingletonTestManager":true,"shouldTerminateApp":true,"forceAppLaunch":true,"useNativeCachingStrategy":true,"forceSimulatorSoftwareKeyboardPresence":true}],"alwaysMatch":{}}}
[debug] [XCUITestDriver@a705 (b7ded3be)] Got response with status 200: {"value":{"sessionId":"8B295A66-779A-4C88-B6B9-2C1179C18592","capabilities":{"sdkVersion":"15.2","device":"iphone"}},"sessionId":"8B295A66-779A-4C88-B6B9-2C1179C18592"}
[XCUITestDriver@a705 (b7ded3be)] Determined the downstream protocol as 'W3C'
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'wdaSessionStarted' logged at 1695649797360 (22:49:57 GMT+0900 (Japan Standard Time))
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'wdaStarted' logged at 1695649797361 (22:49:57 GMT+0900 (Japan Standard Time))
[debug] [XCUITestDriver@a705 (b7ded3be)] Setting initial orientation to 'PORTRAIT'
[debug] [XCUITestDriver@a705 (b7ded3be)] Matched '/orientation' to command name 'setOrientation'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [POST /orientation] to [POST http://127.0.0.1:8100/session/8B295A66-779A-4C88-B6B9-2C1179C18592/orientation] with body: {"orientation":"PORTRAIT"}
[debug] [XCUITestDriver@a705 (b7ded3be)] Got response with status 200: {"value":null,"sessionId":"8B295A66-779A-4C88-B6B9-2C1179C18592"}
[debug] [XCUITestDriver@a705 (b7ded3be)] Event 'orientationSet' logged at 1695649797849 (22:49:57 GMT+0900 (Japan Standard Time))
[debug] [BaseDriver] The value of 'elementResponseAttributes' setting did not change. Skipping the update for it
[debug] [BaseDriver] The value of 'shouldUseCompactResponses' setting did not change. Skipping the update for it
[AppiumDriver@90dc] New XCUITestDriver session created successfully, session b7ded3be-0cbd-49c6-a12c-438a1451efc8 added to master session list
[debug] [AppiumDriver@90dc] Event 'newSessionStarted' logged at 1695649797854 (22:49:57 GMT+0900 (Japan Standard Time))
[debug] [XCUITestDriver@a705 (b7ded3be)] Cached the protocol value 'W3C' for the new session b7ded3be-0cbd-49c6-a12c-438a1451efc8
[debug] [XCUITestDriver@a705 (b7ded3be)] Responding to client with driver.createSession() result: {"capabilities":{"webStorageEnabled":false,"locationContextEnabled":false,"browserName":"","platform":"MAC","javascriptEnabled":true,"databaseEnabled":false,"takesScreenshot":true,"networkConnectionEnabled":false,"platformName":"ios","automationName":"XCUITest","platformVersion":"15.2","deviceName":"iPhone 12 Pro","app":"http://localhost:8081/UIKitCatalog-iphonesimulator.app.zip","language":"en","orientation":"PORTRAIT","processArguments":{},"clearSystemFiles":false,"skipLogCapture":false,"udid":"094788CA-AFD3-4EA7-BF02-461D6AF458B0"}}
[HTTP] <-- POST /wd/hub/session 200 35443 ms - 602
[HTTP]
[HTTP] --> POST /wd/hub/session/b7ded3be-0cbd-49c6-a12c-438a1451efc8/execute/sync
[HTTP] {"script":"mobile:configureLocalization","args":[{"keyboard":{"name":"ja_JP-Kana","layout":"Kana","hardware":"Automatic"}}]}
[debug] [XCUITestDriver@a705 (b7ded3be)] Calling AppiumDriver.execute() with args: ["mobile:configureLocalization",[{"keyboard":{"name":"ja_JP-Kana","layout":"Kana","hardware":"Automatic"}}],"b7ded3be-0cbd-49c6-a12c-438a1451efc8"]
[debug] [XCUITestDriver@a705 (b7ded3be)] Executing command 'execute'
[debug] [XCUITestDriver@a705 (b7ded3be)] Responding to client with driver.execute() result: true
[HTTP] <-- POST /wd/hub/session/b7ded3be-0cbd-49c6-a12c-438a1451efc8/execute/sync 200 462 ms - 14
[HTTP]
[HTTP] --> GET /wd/hub/session/b7ded3be-0cbd-49c6-a12c-438a1451efc8/window/rect
[HTTP] {}
[debug] [XCUITestDriver@a705 (b7ded3be)] Calling AppiumDriver.getWindowRect() with args: ["b7ded3be-0cbd-49c6-a12c-438a1451efc8"]
[debug] [XCUITestDriver@a705 (b7ded3be)] Executing command 'getWindowRect'
[debug] [XCUITestDriver@a705 (b7ded3be)] Proxying [GET /window/size] to [GET http://127.0.0.1:8100/session/8B295A66-779A-4C88-B6B9-2C1179C18592/window/size] with no body
[debug] [XCUITestDriver@a705 (b7ded3be)] Got response with status 200: {"value":{"width":0,"height":0},"sessionId":"8B295A66-779A-4C88-B6B9-2C1179C18592"}
[debug] [XCUITestDriver@a705 (b7ded3be)] Responding to client with driver.getWindowRect() result: {"width":0,"height":0,"x":0,"y":0}
[HTTP] <-- GET /wd/hub/session/b7ded3be-0cbd-49c6-a12c-438a1451efc8/window/rect 200 20 ms - 44
[HTTP]
```
