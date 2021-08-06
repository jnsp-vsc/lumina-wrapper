# lumina-wrapper
A NPM to handle [the summon api](https://luminabot.xyz/api/)

# Text usage / something that returns a JSON output 
DO NOT USE IMAGE ENDPOINTS HERE IT WILL ERROR
```javascript
const API = require("lumina-wrapper.js")
const api = new API()

api.get("<type here>", "<endpoint here>").then(res => console.log(res))
```

# Image usage (this returns a buffer)
```javascript
const API = require("lumina-wrapper.js")
const api = new API()

api.getImage("burn", { text: "<text here" }).then(res => /*do something with 'res' this returns a buffer*/)
```