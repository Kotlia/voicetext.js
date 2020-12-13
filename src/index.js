import execpkg from 'child_process';

export { Speaker } from "./enum/speaker.js"
export { Format } from "./enum/format.js"
export { Emotion } from "./enum/emotion.js"

const exec = execpkg.execSync;

/**
 * VoiceText is a API library to easily convert text to voice(sound data).
 */
export default class VoiceText {
    /**
     * @see https://cloud.voicetext.jp/webapi/api_keys/new
     * @param key { String } API Key
     */
    constructor(key) {
        this.key = key
    }
    /**
     * * Sets the text to be converted into sound
     * @param text { String }
     * @returns { VoiceText }
     */
    setText(text) {
        this.text = encodeURIComponent(text)
        return this
    }
    /**
     * @param speaker { String }
     * @returns { VoiceText }
     */
    setSpeaker(speaker) {
        this.speaker = speaker
        return this
    }
    /**
     * @param emotion { String }
     * @param level { Number }
     * @returns { VoiceText }
     */
    setEmotion(emotion, level = 2) {
        this.emotion = emotion
        this.emotion_level = level
        return this
    }
    /**
     * @param pitch { Number }
     * @returns { VoiceText }
     */
    setPitch(pitch) {
        this.pitch = pitch
        return this
    }
    /**
     * @param speed { Number }
     * @returns { VoiceText }
     */
    setSpeed(speed) {
        this.speed = speed
        return this
    }
    /**
     * @param volume { Number }
     * @returns { VoiceText }
     */
    setVolume(volume) {
        this.volume = volume
        return this
    }
    /**
     * @param format { String }
     * @returns { VoiceText }
     */
    setFileFormat(format) {
        this.format = format
        return this
    }
    /**
     * @param filename { String }
     * @returns { VoiceText }
     */
    setFileName(filename) {
        this.filename = filename
        return this
    }
    fetch() {
        if ([this.text, this.speaker].includes(undefined)) {
            throw new SyntaxError("Missing arg(s)!")
        } else {
            let url = `curl "https://api.voicetext.jp/v1/tts" -u "${this.key}:" -d "text=${this.text}" -d "speaker=${this.speaker}" `
            if (this.filename) {
                url += `-o "${this.filename}`
                if (this.format) {
                    url += `.${this.format}`
                }
                url += `"`
            }
            if (this.emotion) {
                url += `-d "emotion=${this.emotion}"`
            }
            if (this.emotion_level) {
                url += `-d "emotion_level=${this.emotion_level}"`
            }
            if (this.pitch) {
                url += `-d "pitch=${this.pitch}"`
            }
            if (this.speed) {
                url += `-d "speed=${this.speed}"`
            }
            exec(url)
        }
    }
}