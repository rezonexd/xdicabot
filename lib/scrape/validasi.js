// Zass.ci License - Protect your watermark and credits!

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const expectedProtex = `──────────── 「 DO NOT REMOVE WATERMARK 」 ───────────────

                        ★ SPECIAL THANKS & CREDITS ★

👑  Zass Onee  
• Founder, Creator, and Lead Developer of Trinity Botz  
• Visionary behind the concept, features, and UI/UX of the bot  

⚙️  OpenAI  
• For enabling powerful AI capabilities through GPT models  
• The foundation of intelligent command handling and natural responses  

💻  IkyJs & Team  
• Original creator of Hikari MD V3 structure  
• Provided core source code, structure references, and development roadmap  

⚡  @whiskeysockets/Baileys  
• The essential WhatsApp Web API used by most modern bots  
• Powered the bot's ability to send, receive, and manage WhatsApp messages  

🔥  Community Developers  
• GitHub & WhatsApp Dev Communities  
• For shared modules, public libraries, documentation, and open collaboration  

❤️  Users & Beta Testers  
• Real-world feedback and suggestions that helped polish features  
• Appreciation for staying loyal and respecting watermark and credits  

─────────────── 「 ABOUT TRINITY BOTZ 」 ───────────────────

• Project Name   : Trinity MD (Multi Device)  
• Version        : 2.0.0
• Creator        : Zass Onee  
• Contact        : https://wa.me/6285298027445
• YouTube        : https://www.youtube.com/@ZassOnee
• Official Channel: https://whatsapp.com/channel/0029Vb615brAzNbywHCyRc1w
• Support Group  : https://zass.cloud/suppgc

• Gudang Script : https://neolabsofficial.my.id
• Panel Bot : https://pteroku-desu.zass.cloud

────────────── 「 BASE SOURCE STRUCTURE 」 ─────────────────

• Core Framework : Hikari MD V3  
• Framework Dev  : IkyJs  
• Source Channel : https://whatsapp.com/channel/0029VbApPgC9Bb67KkOAG70s
• Language       : Node.js (JavaScript)  
• Libraries Used : Baileys, Moment, Axios, Chalk, Ora, etc.  
• Hosting Option : Pterodactyl Panel / Railway / VPS  

──────────── 「 ADDITIONAL ACKNOWLEDGEMENTS 」──────────────

• Catbox API     – File hosting support for media uploads  
• ChatGPT        – For AI character-based command responses (.tanya, AI Group, etc.)  
• Users          – Who contributed ideas like AntiLink, Menu VN/Video, .addproduk, etc.  
• Admins & Staff – For managing communities and daily testing  

──────────────────────────────────────────────────────

Thank you to everyone who contributed, supported, or inspired this project.  
Please DO NOT REMOVE WATERMARK OR CREDITS, as a form of respect to the developers.  
Your support motivates continued development and free public access.

────────────────────────────────────────────────────────`;

function protex() {
  const ProtexPath = path.join(__dirname, '../../core.meta');

  if (!fs.existsSync(ProtexPath)) {
    for (let i = 0; i < 50; i++) {
      console.error(chalk.redBright('[ SYSTEM CRASH ] File core.meta tidak ditemukan! Dilarang keras menghapus file !'));
    }
    process.exit(1);
  }

  const content = fs.readFileSync(ProtexPath, 'utf-8').trim();

  if (!content.includes('DO NOT REMOVE WATERMARK')) {
    for (let i = 0; i < 50; i++) {
      console.error(chalk.redBright('[ SYSTEM CRASH ] Core hilang atau dirusak! Jangan hapus credits bot!'));
    }
    process.exit(1);
  }

  if (content !== expectedProtex.trim()) {
    for (let i = 0; i < 100; i++) {
      console.error(chalk.redBright('[ SYSTEM CRASH ] Credits telah dimodifikasi tanpa izin developer!'));
    }
    process.exit(1);
  }
}

module.exports = { protex };