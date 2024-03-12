module.exports = {
    config: {
        name: 'whatif',
        author: 'Harley',
        version: 1.0,
        role: 0,
        shortDescription: {
            en: 'what if.'
        },
        longDescription: {
            en: 'Sends random "what if" messages.'
        },
        category: 'fun',
        guide: {
            en: 'Simply use the command to send a random "what if" message.'
        }
    },
    event: null,
    onStart: async function({ api, event, args }) {
        const whatIfMessages = [
            'What if we could fly without wings?',
            'What if we could travel through time?',
            'What if we could communicate with animals?',
            'What if we could live underwater?',
            'What if we could teleport instantly?',
            'What if we could read minds?',
            'What if we could speak every language?',
            'What if we could control the weather?',
            // Add more "what if" messages here
        ];

        const randomWhatIfMessage = whatIfMessages[Math.floor(Math.random() * whatIfMessages.length)];

        api.sendMessage(randomWhatIfMessage, event.threadID);
    }
};
