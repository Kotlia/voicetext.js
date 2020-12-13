<h1 align="center">Welcome to voicetext.js 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/voicetext.js" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/voicetext.js.svg">
  </a>
  <a href="http://voicetext.ml" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/_Kotlia" target="_blank">
    <img alt="Twitter: _Kotlia" src="https://img.shields.io/twitter/follow/Kotlia.svg?style=social" />
  </a>
</p>

> VoiceText.js is a API library to easily convert text into a voice.

### 🏠 [Homepage](voicetext.ml)

## Install

```sh
yarn install
```

## Usage

```javascript
import VoiceText, { Speaker, Emotion, Format } from 'voicetext.js'

new VoiceText(process.env.API_KEY)
  .setText('Hello, world!')
  .setSpeaker(Speaker.SHOW)
  .setFileName("./helloworld")
  .setFileFormat(Format.MP3)
  .fetch()
```

## Author

👤 **Shun Ueda (Kotlia)**

* Website: shunueda.ml
* Twitter: [@_Kotlia](https://twitter.com/Kotlia)
* Github: [@Kotlia](https://github.com/Kotlia)