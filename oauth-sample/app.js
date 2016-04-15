app.server = function(ctx) {
    return {
        endpoints: {
            pages: [{
                url: 'other-login',
                path: 'other-login.jag'
            },{
                url:'oauth2',
                path:'oauth2.jag'
            }]
        }
    }
};
