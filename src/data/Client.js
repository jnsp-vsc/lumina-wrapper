const fetch = require("node-fetch")
const { createCanvas, loadImage } = require("canvas")

module.exports = class Client {
    constructor() { }

    async getImage(endpoint, prams = {}) {
        if (!endpoint) throw new Error("Please provide a endpoint.")

        const qPrams = new URLSearchParams(prams)
        const res = `https://luminabot.xyz/api/image/${endpoint}?${qPrams}`

        const base = await loadImage(res)
        const canvas = createCanvas(base.width, base.height)
        const ctx = canvas.getContext("2d")

        ctx.drawImage(base, 0, 0)

        return canvas.toBuffer()
    }

    async get(type, endpoint, prams = {}) {
        const validTypes = ["text", "json"]
        if (!endpoint || !type) throw new Error("Please provide a endpoint and a type.")

        if (!validTypes.includes(type)) throw new Error("Please provide a valid type. Valid types " + validTypes.join(", "))

        const qPrams = new URLSearchParams(prams)
        const res = await fetch(`https://luminabot.xyz/api/${type}/${endpoint}?${qPrams}`).then(res => res.json())

        return res
    }
}