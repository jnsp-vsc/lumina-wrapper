<p align="center">
  <a href="https://www.npmjs.com/package/lumina-wrapper.js">
    <img src="https://imgur.com/N6ugeGC.png" alt="Logo">
  </a>
</p>
<p align="center">
  <a href="https://www.npmjs.com/package/lumina-wrapper.js"><img src="https://img.shields.io/npm/v/lumina-wrapper.js.svg?maxAge=3600" alt="NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/lumina-wrapper.js"><img src="https://img.shields.io/npm/dt/lumina-wrapper.js.svg?maxAge=3600" alt="NPM downloads" />
   </a>
  </div>
</p>
<h3 align="center"><strong>An Advanced Wrapper for the Lumina API</strong></h3>

## Installation
```bash
$ npm install lumina-wrapper.js
```

## Usage
```javascript
const Lumina = require('lumina-wrapper.js');
const lms = new Lumina();

/* Image Endpoints */
lms.getImage("burn", {
    "<Param>": "<text here>" 
}).then(data => message.channel.send(data));

/* Everything Except Image Endpoints */
lms.get("<type here>", "<endpoint here>", { 
    "<query name>": "<query value>"
    // Can be more than one param!
    // See at https://luminabot.xyz/api/ for the Params
}).then(res => console.log(res));
```

## Discord Bot
```javascript
const Lumina = require('lumina-wrapper.js')
const lms = new Lumina()
const { Client } = require("discord.js");
const client = new Client();

client.on("message", async (message) => {
  /* Simple Example of a Json Endpoint that returns Song information about a Spotify Song */
  if (message.content.startsWith("!spotify")) {
    lms.get("json", "spotify", { 
      "link": message.content.replace("!spotify ", "")
    }).then(data => message.channel.send(data));
  }
});

client.login("BOT_TOKEN");
```

## Endpoints
All endpoints can be seen **[Here](https://luminabot.xyz/api/)**

## Options
**Options** | **Description** | **Usage**
:---: | --- | ---
Image | Always returns An image | Image Generation & Manipulation
Json | Returns Raw Json Data | Json Output
Text | Returns Modified Text | Text Manipulation
Nsfw | Uhhh under construction | Not done *yet*

## License
[MIT](https://github.com/jnsp-vsc/lumina-wrapper/blob/master/LICENSE) ® Lumina
