const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'SEON-MD=iV4knQ4I#12Dbv4ISW3sJLzHsVsua1xYD-PGQsPZXDjfVARDdf1o', //Put Session-id Here
GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'aitazizhassan', //Put Your Gitub Username
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN || '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', //Put Your Github Auth Token
REPO_NAME: process.env.REPO_NAME || 'SEON-MD-DATABASE' //Bot Database Repo Name
};
