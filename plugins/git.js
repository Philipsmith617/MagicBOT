const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://www.linkpicture.com/q/Screenshot_20211001-083824_1.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creator Philip Smith*
*owner number wa.me/2348159983206*

*Bot making video : https://youtu.be/fd0KPblop-k*

*Yt_PASSWORD: _________(password on this video watch it full)*

*githublink : https://github.com/Philipsmith6175/Philsmagic*

*audio commads : https://github.com/cyberchekuthan/Amalser_v2/tree/master/uploads*
`}) 

}));
