#Installation
1. Copy the oauth-sample directory to {CARBON_HOME}/repository/deployment/server/jaggeryapps/publisher/extensions/app directory
2. Change auth method property to "other" in publisher/config/publisher.json
3. Restart the server
4. Navigate to https://localhost:9443/publisher 
5. You will be prompted for your google login details

**Important**
1.You will need to register an app using the following guide [2] and then replace the clientID variable in oauth-sample/pages/other-login.jag
2.Ensure that you configure the redirect_uri to https://localhost:9443/oauth2

#TODO
1. Implement user provisioning and tenant loading logic

#References
1. https://developers.google.com/identity/protocols/OpenIDConnect#server-flow
2. https://developers.google.com/identity/protocols/OpenIDConnect#appsetup
