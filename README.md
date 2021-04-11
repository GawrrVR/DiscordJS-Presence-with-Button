# **Discord Presence Button**
**Simple JS code using discord-rpc to show presence with customisable button.**

## How it Work / Tutorial
- First, you need to have NodeJS | https://nodejs.org/
- Download the Repository.
- Config the presence on **config.json** file. *Explanation of the file on bottom if ur not familliar with this.*
- Open a cmd on the script folder. *simply click on the navbar on top of the folder, type "cmd" and enter.*
- enter the command "node index.js" and you're good !

## Config Help
**All of the config.json parameters are here.**
- **app_id**        | You're Application ID. *You can have it on https://discord.com/developers/applications*
- **line1**         | The second line of your presence. *First Line are the Title of the application you've made on https://discord.com/developers/applications*
- **line2**         | The third line of your presence.
- **txt_si**        | Text when you over the Small Image of the presence.
- **txt_li**        | Same as **txt_si** but for the Large Image text.
- **l_img**         | Image Name of the Large Image. *You need to upload it on your application : https://discord.com/developers/applications Rich Presence > Art Assets.*
- **s_img**         | Same as **l_img** but for the Small Image.
- **button_name1**  | Text on the 1st button.
- **button_name1**  | Same as above but for the second button.
- **button_url2**   | Url to open when click on the first button.
- **button_url2**   | Same as above but for the second button.

### Tips
*Click on **your button** don't open the link !*

*Discord can take 5~10 Minutes to properly propage your uploaded image on her network. 
⚠️ **BEWARE OF NSFW IMAGE, DISCORD DOESN'T LIKE THIS AND U CAN GET YOUR ACCOUNT BAN EASILY & RAPIDLY***

*Special Character doesn't work on button text !*
