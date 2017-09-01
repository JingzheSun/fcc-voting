module.exports = {
    'twitterAuth' : {
        'consumerKey'      : 'fphtzKSjvC8T0FhDoPm4aHNCO', // your App ID
        'consumerSecret'  : 'KjWwDTmImp5pkphrT0wfHKOXcX1ALjTOfUWXpZgbpQg7o25hrS', // your App Secret
        'callbackURL'   : 'https://fcc-vote-appjs.herokuapp.com/login/callback'
        //'callbackURL'   : 'http://127.0.0.1:8070/login/callback'
    },

    'facebookAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://localhost:8080/auth/facebook/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};