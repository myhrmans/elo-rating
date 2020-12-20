const axios = require('axios');


const client = new Discord.Client();
const prefix = '?';

(async () => {

//Prtint Elo for CSGO
console.log(await getElo("-trAn", "csgo"));

/* Print Data about specific player from Faceit*/
//console.log(await getFaceitPlayer("-trAn"));

})();


/* example discord 

INIT 
client.once('ready', () => {
    console.log('Guns steady and loaded!')
});
client.login('REPLACE HERE THAO WITH YOUR CLIENT');

GET CHANNEL 
const channel = client.channels.cache.get('ID THAO');

SEND CHANNEL 
await channel.send("your elo is `"+ player.elo+ "`")

*/


async function getElo(id, game) {
    const request = await axios.get(`data/v4/players?nickname=${id}&game=${game}`, {
        headers: {
            "authorization": "Bearer 0ad4f9b3-dd9a-4e6f-bd87-eef3d29b9269",
        },
        baseURL: 'https://open.faceit.com/'
        })    
    let player = await Promise.resolve(request);
    return player.data.games.csgo.faceit_elo
}

async function getFaceitPlayer(id){
    const request = await axios.get(`data/v4/players?nickname=${id}`, {
        headers: {
            "authorization": "Bearer 0ad4f9b3-dd9a-4e6f-bd87-eef3d29b9269",
        },
        baseURL: 'https://open.faceit.com/'
        })    
    let player = await Promise.resolve(request);
    return player.data
}