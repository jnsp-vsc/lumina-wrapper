const fetch = require('node-fetch');
const settings = require('../settings/settings.js');

/**
* @param {Object} message - Must be passed in if you are not using the raw method.
* @param {String} text - A String of Text you want to send to the AI
* @param {Number} uid - The Message Author's UserID
* @param {Boolean} raw - If true will output the response only
* @param {String} replytype - Normal: "Just sends the Response" • Reply: "Mention, Answer" • Linereply: "Inline Reply with no mention"
* @param {Object} example - ```js 
lumina.chatbot(message, {
    text: message.content, // - The Text to send to the AI
    uid: message.author.id, // - The Message Author's ID
    raw: true/false, // Default False - Whether to just send the raw Reply String or send the Message in an Channel
    replytype: "normal", // - Mention: <Their Mention>, <Response> | Normal: <Response>
})```*/

const chatbot = async (message, options) => {

    if (!options) throw new TypeError('[lumina-wrapper] • Missing Options. Hover over chatbot and see the corresponding options!');

    if (!options.text) throw new TypeError('[lumina-wrapper] • Provide a Text in the Options you want to ask with the Chatbot');
    if (!options.uid) throw new TypeError('[lumina-wrapper] • Provide a UserID in the Options you want to ask with the Chatbot');

    let raw = false
    if (options.raw && options.raw === true) raw = true;


    let res = await fetch(settings.url + 'json/chatbot?text=' + encodeURIComponent(options.text) + '&uid=' + parseInt(options.uid))
    let out = await res.json()

    if (raw === true) {
        return await out.answer;
    }

    if (options.replyType && options.replyType.toLowerCase() === 'normal') {
        return await message.channel.send(out.answer)
    }


    if (options.replyType && options.replyType.toLowerCase() === 'mention') {
        return await message.reply(out.answer)
    }
}

module.exports = chatbot;