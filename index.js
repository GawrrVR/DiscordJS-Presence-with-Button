
var RPC = require("discord-rpc")

const config = require("./config.json");
const client = new RPC.Client({ transport: 'ipc' })

client.on('ready', () => {
	client.request('SET_ACTIVITY', {
		pid: process.pid,
			activity : {
				details : config.line1,
				state: config.line2,
			assets : {
				large_image : config.l_img,
				small_image : config.s_img,
				small_text : config.txt_si,
				large_text : config.txt_li
			},
			buttons : [
				{label : config.button_name1 , url : config.button_url1},
				{label : config.button_name2 , url : config.button_url2},
			]}
	})
})

client.login({ clientId : config.app_id }).catch(console.error);
console.log('Script Started !\nCreator : https://github.com/OscarSimplement\nYou can hide this cmd or launch it on secondary desktop ( Windows+Tab )')
