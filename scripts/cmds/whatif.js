module.exports = {
    config: {
        name: 'love',
        author: 'HASSAN-',
        version: 1.0,
        role: 0,
        shortDescription: {
            en: 'Spread love with beautiful messages.'
        },
        longDescription: {
            en: 'Sends lovely messages to brighten someone\s day.'
        },
        category: 'fun',
        guide: {
            en: 'Simply use the command to send a message of love.'
        }
    },
    event: null,
    onStart: async function({ api, event, args }) {
        const loveMessages = [
            'You are loved more than you know. 💖',
            "You're amazing and deserving of all the love and happiness in the world. Here's some virtual love to brighten your day! 🤩💖",
            "I'm sending a virtual hug and a big dose of positive energy to keep shining your light! 😘💫",
            "I'm here for you and sending love and support. Virtual hugs and snuggles! 🤩💕",
            'I am worthy of love and respect regardless of my flaws or mistakes.',
            'I am deserving of happiness and success, and I am worthy of my dreams. 🌌',
            'I am strong and resilient, and I can overcome any obstacles that come my way.',
'Hello baby, come to papa Harley 🥵',
'Hello love, single si Boss Harley pm mo na sya'
        ];

        const randomLoveMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];

        api.sendMessage(randomLoveMessage, event.threadID);
    }
};