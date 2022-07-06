const { Discord, Client, MessageEmbed } = require('discord.js');
const client = new Client({ fetchAllMembers: true })
const system = require('KENDIN YAZ')
const request = require('request')
const token = require('KENDIN YAZ')
const fs = require('fs')
const whitelists = require("KENDIN YAZ") 

class guardMain {
  static async axualury() {
    const settings = require('KENDIN YAZ')
    Array.prototype.shuffle = function () {
      let i = this.length;
      while (i) {
        let j = Math.floor(Math.random() * i);
        let t = this[--i];
        this[i] = this[j];
        this[j] = t;
      }
      return this;
    };
    const Tokens = token.DGUARDS
    class CLIENT {
      constructor(token) {
        this.token = token;
        this.client = new Client();
        this.client.login(token).then(x => console.log(`${this.client.user.tag} İsmi ile giriş yapıldı.Yan Guard Bot Online`));
      }
    };

    function createClient(token) {
      let c = new CLIENT(token);
      return c.client;
    };

    let clientObject = {}
    for (var i = 0; i < Tokens.length; i++) {
      let c = createClient(Tokens[i])
      clientObject[i] = c
    };

    for (let c in clientObject) {
      c = clientObject[c];
      c.on("ready", async () => {
        c.user.setActivity("AKIL SAGLIGINI KAYBET",
          { type: 'PLAYING' });
      });
      c.on("ready", async () => {

        /*     let botVoiceChannel = c.channels.cache.get(system.Bot_Voice_Channel);
             if (botVoiceChannel) botVoiceChannel.join().catch(err => console.error("Hata(Guard Sağlayıcısı): Botunuz ses kanalına bağlantıyı sağlayamadı!"));*/
      });



      const yetkiPermleri = ["ADMINISTRATOR", "MANAGE_ROLES", "MANAGE_CHANNELS", "MANAGE_GUILD", "BAN_MEMBERS", "KICK_MEMBERS", "MANAGE_NICKNAMES", "MANAGE_EMOJIS", "MANAGE_WEBHOOKS"];

      function guvenli1(kisiID) {
        let member = client.guilds.cache.get(system.GuildID).members.cache.get(kisiID);
        if (whitelists.whitelist2.some(x => member.id === x)) return;
        if (whitelists.whitelist3.some(x => member.id === x)) return;
        if (whitelists.whitelist4.some(x => member.id === x)) return;
        let whitelist = whitelists.whitelist1 || [];
        if (!member || member.id === client.user.id || member.id === member.guild.owner.id || whitelist.some(x => member.id === x || member.roles.cache.has(x))) return true
        else
          return false
      };

      function databasekapat(kisiID) {
        db.set(`backupdurum`, `true`)
      };

      function guvenli4(kisiID) {
        let member = client.guilds.cache.get(system.GuildID).members.cache.get(kisiID);
        let whitelist = whitelists.whitelist4 || [];
        if (!member || member.id === client.user.id || member.id === member.guild.owner.id || whitelist.some(x => member.id === x || member.roles.cache.some(y => y.id == x)) || member.id === member.guild.owner.id) return true
        else
          return false
      };

      function guvenli2(kisiID) {
        let member = client.guilds.cache.get(system.GuildID).members.cache.get(kisiID);
        if (whitelists.whitelist3.some(x => member.id === x)) return;
        if (whitelists.whitelist4.some(x => member.id === x)) return;
        let whitelist = whitelists.whitelist2 || [];
        if (!member || member.id === client.user.id || member.id === member.guild.owner.id || whitelist.some(x => member.id === x || member.roles.cache.has(x))) return true
        else
          return false
      };


      function guvenli3(kisiID) {
        let member = client.guilds.cache.get(system.GuildID).members.cache.get(kisiID);
        if (whitelists.whitelist4.some(x => member.id === x)) return;
        let whitelist = whitelists.whitelist3 || [];
        let bots = settings.Bots
        if (!member || member.id === client.user.id || member.id === member.guild.owner.id || whitelist.some(x => member.id === x || member.roles.cache.has(x))) return true
        else
          return false
      };

      function cezalandir(kisiID, tur) {
        let userID = client.guilds.cache.get(system.GuildID).members.cache.get(kisiID);
        if (!userID) return;
        if (tur == "jail") return userID.roles.cache.has(roles.Cezalı) ? userID.roles.set([roles.Booster, roles.Cezalı]) : userID.roles.set([roles.Cezalı]);
        if (tur == "ban") {
          if (userID.roles.cache.has(roles.Booster)) return userID.roles.set([roles.Booster, roles.Cezalı])
          userID.ban({ reason: "AKIL SAGLIGINI KAYBET" }).catch();
        }

      };

      function loglandırma(tur) {
        const embed = new MessageEmbed()
        let logkanali = client.guilds.cache.get(system.GuildID).channels.cache.get(settings.GuardLog)
        let dm = client.guilds.cache.get(system.GuildID).members.cache.get("ASD")
        if (!logkanali) {
          dm.send(embed.setDescription(`${tur}\n\`${moment(Date.now()).add(10, "hours").format("HH:mm:ss DD MMMM YYYY")}\` tarihinde gerçekleşti.`))
        }
        if (logkanali) {
          dm.send(embed.setDescription(`${tur}\n\`${moment(Date.now()).add(10, "hours").format("HH:mm:ss DD MMMM YYYY")}\` tarihinde gerçekleşti.`))
          logkanali.send(embed.setDescription(`${tur}\n\`${moment(Date.now()).add(10, "hours").format("HH:mm:ss DD MMMM YYYY")}\` tarihinde gerçekleşti.`))
        }
      };

      function limit1(tur) {

        let member = client.guilds.cache.get(system.GuildID).members.cache.get(tur);
        if (whitelists.whitelist1.some(x => member.id === x)) {
          db.add(`limit1.${member.guild.id}.${member.id}`, +1);
          let limitkontrol = db.get(`limit1.${member.guild.id}.${member.id}`)
          if (limitkontrol >= 5) {
            databasekapat()
            cezalandir(member.id, "jail");
            db.delete(`limit1.${member.guild.id}.${member.id}`)
            loglandırma(`${member} kullanıcısı 1.seviye bu whitelistte bulunmakta fakat kullanıcı 1 saat içinde 5 tane eylem gerçekleştirdi bu yüzden jail'e atıldı.`)
          }
          setTimeout(() => {
            if (db.has(`limit1.${member.guild.id}.${member.id}`)) {
              db.delete(`limit1.${member.guild.id}.${member.id}`)
            }
          }, ms("1h"))
        }
      }

      function limit2(tur) {
        let member = client.guilds.cache.get(system.GuildID).members.cache.get(tur);
        if (whitelists.whitelist2.some(x => member.id === x)) {
          db.add(`limit2.${member.guild.id}.${member.id}`, +2);
          let limitkontrol = db.get(`limit2.${member.guild.id}.${member.id}`)
          if (limitkontrol >= 10) {
            databasekapat()
            cezalandir(member.id, "jail");
            db.delete(`limit2.${member.guild.id}.${member.id}`)
            loglandırma(`${member} kullanıcısı 2.seviye whitelistte bulunmakta fakat kullanıcı 1 saat içinde 5 tane eylem gerçekleştirdi bu yüzden jail'e atıldı.`)
          }
          setTimeout(() => {
            if (db.has(`limit2.${member.guild.id}.${member.id}`)) {
              db.delete(`limit2.${member.guild.id}.${member.id}`)
            }
          }, ms("1h"))
        }
      }

      function limit2plus(tur) {
        let member = client.guilds.cache.get(system.GuildID).members.cache.get(tur);
        db.add(`limit2.${member.guild.id}.${member.id}`, +3);
        let limitkontrol = db.get(`limit2.${member.guild.id}.${member.id}`)
        if (limitkontrol >= 10) {
          databasekapat()
          cezalandir(member.id, "jail");
          db.delete(`limit2.${member.guild.id}.${member.id}`)
          loglandırma(`${member} kullanıcısı 2.seviye whitelistte bulunmakta fakat kullanıcı 1 saat içinde 5 tane eylem gerçekleştirdi bu yüzden jail'e atıldı.`)
        }
        setTimeout(() => {
          if (db.has(`limit2.${member.guild.id}.${member.id}`)) {
            db.delete(`limit2.${member.guild.id}.${member.id}`)
          }
        }, ms("1h"))
      }


      function yetkikapat() {
        let kapanmayacakroller = settings.kapanmayacakroller
        db.delete(`guardpermissionnums`)
        client.guilds.cache.get(system.GuildID).roles.cache.filter(a => yetkiPermleri.some(x => a.permissions.has(x)) == true && client.guilds.cache.get(system.GuildID).members.cache.get(client.user.id).roles.highest.rawPosition > a.rawPosition && !kapanmayacakroller.includes(a.id)).map(huh => {
          db.push("guardpermissionnums", {
            rolid: huh.id,
            rolPermission: huh.permissions.bitfield
          })
         /* setTimeout(function () {
            huh.setPermissions(0)
          }, 10000)*/
          db.set(`korumadurum`, "true")
        })
      };


      c.on('guildUpdate', async (oldGuild, newGuild) => {
        if (oldGuild.vanityURLCode === newGuild.vanityURLCode) return;
        let entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(audit => audit.entries.first());
        if (!entry.executor || Date.now() - entry.createdTimestamp > 1000 * 60 * 10 || entry.executor.id === c.user.id) return;
        if (guvenli4(entry.executor.id)) return;

        const ayar = {
          url: `https://discord.com/api/v6/guilds/${newGuild.id}/vanity-url`, body: { code: `${settings.VanityURL}` }, json: true, method: 'PATCH', headers: { "Authorization": `Bot ${token.Guard3}` }
        };
        await request(ayar, (err, res, body) => {
          if (err) {
            return console.log(err);
          }
        })

        await newGuild.members.ban(entry.executor.id, {
          reason: `${entry.executor.tag} adlı kişi vanity url'yi çalmaya çalıştığı için koruma tarafından banlandı.`
        });

        c.on("channelCreate", async channel => {
          let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_CREATE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 1000 * 60 * 5 || guvenli3(entry.executor.id) || guvenli2(entry.executor.id) || guvenli1(entry.executor.id) || guvenli4(entry.executor.id)) return;
          channel.delete({ reason: "guard" });
          cezalandir(entry.executor.id, "jail");
          loglandırma(`${entry.executor} kullanıcısı sunucuda kanal açtığından ötürü jail'e yollandı.`)
        });

        c.on("channelDelete", async channel => {
          let entry = await channel.guild.fetchAuditLogs({ type: 'CHANNEL_DELETE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || guvenli3(entry.executor.id) || guvenli2(entry.executor.id) || guvenli1(entry.executor.id) || guvenli4(entry.executor.id)) return;
          cezalandir(entry.executor.id, "ban");
          loglandırma(`${entry.executor} kullanıcısı \`${channel.name}\` kanalını sildiğinden ötürü sunucudan banlandı`)
        });

        c.on("channelUpdate", async (oldChannel, newChannel) => {
          let entry = await newChannel.guild.fetchAuditLogs({ type: 'CHANNEL_UPDATE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 1000 * 60 * 5 || !newChannel.guild.channels.cache.has(newChannel.id) || guvenli3(entry.executor.id) || guvenli2(entry.executor.id) || guvenli1(entry.executor.id) || guvenli4(entry.executor.id)) return;
          cezalandir(entry.executor.id, "jail");
          if (newChannel.type !== "category" && newChannel.parentID !== oldChannel.parentID) newChannel.setParent(oldChannel.parentID);
          if (newChannel.type === "category") {
            newChannel.edit({
              name: oldChannel.name,
            });
          } else if (newChannel.type === "text") {
            newChannel.edit({
              name: oldChannel.name,
              topic: oldChannel.topic,
              nsfw: oldChannel.nsfw,
              rateLimitPerUser: oldChannel.rateLimitPerUser
            });
          } else if (newChannel.type === "voice") {
            newChannel.edit({
              name: oldChannel.name,
              bitrate: oldChannel.bitrate,
              userLimit: oldChannel.userLimit,
            });
          };
          oldChannel.permissionOverwrites.forEach(perm => {
            let thisPermOverwrites = {};
            perm.allow.toArray().forEach(p => {
              thisPermOverwrites[p] = true;
            });
            perm.deny.toArray().forEach(p => {
              thisPermOverwrites[p] = false;
            });
            newChannel.createOverwrite(perm.id, thisPermOverwrites);
          });
        });

        c.on("roleCreate", async role => {
          let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_CREATE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 1000 * 60 * 5 || guvenli3(entry.executor.id) || guvenli2(entry.executor.id) || guvenli1(entry.executor.id) || guvenli4(entry.executor.id)) return;
          cezalandir(entry.executor.id, "ban");
          role.delete({ reason: "guard" });
        });

        c.on("roleUpdate", async (oldRole, newRole) => {
          let entry = await newRole.guild.fetchAuditLogs({ type: "ROLE_UPDATE" }).then(audit => audit.entries.first())
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 1000 * 60 * 5 || guvenli3(entry.executor.id) || guvenli2(entry.executor.id) || guvenli1(entry.executor.id) || guvenli4(entry.executor.id)) return;
          if (settings.whitelist2.some(x => entry.executor.id === x)) return limit2(`${entry.executor.id}`);
          if (whitelists.whitelist1.some(x => entry.executor.id === x)) return limit1(`${entry.executor.id}`);
          if (oldRole.permissions !== newRole.permissions) {
            cezalandir(entry.executor.id, "ban");

            newRole.edit({
              name: oldRole.name,
              color: oldRole.hexColor,
              hoist: oldRole.hoist,
              permissions: oldRole.permissions,
              mentionable: oldRole.mentionable
            });
            loglandırma(`${entry.executor.tag} adlı kişi sunucumuzda bulunan \`${newRole.name ? newRole.name : "Rol bulunamadı"}\` (\`${newRole.id ? newRole.id : "Rol ID bulunamadı"}\`) adlı rolü güncelledi ve banlandı.`)
          }
        })


        c.on("roleDelete", async role => {
          let entry = await role.guild.fetchAuditLogs({ type: 'ROLE_DELETE' }).then(audit => audit.entries.first());
          if (!entry || !entry.executor || Date.now() - entry.createdTimestamp > 1000 * 60 * 5 || guvenli3(entry.executor.id) || guvenli2(entry.executor.id) || guvenli1(entry.executor.id) || guvenli4(entry.executor.id)) return;
          if (settings.whitelist2.some(x => entry.executor.id === x)) return limit2plus(`${entry.executor.id}`);
          cezalandir(entry.executor.id, "ban");
          loglandırma(`${entry.executor} kullanıcısı sunucuda ${role.name} - ${role.id} rolünü sildiğinden ötürü sunucudan banlandı.`)
          yetkikapat()
        });
        /*  c.on('warn', m => console.log(`WARN AXUALURY - ${m}`));
          c.on('error', m => console.log(`ERROR AXUALURY - ${m}`));
              process.on('uncaughtException', error => console.log(`ERROR AXUALURY - ${error}`));
              process.on('unhandledRejection', (err) => console.log(`ERROR AXUALURY - ${err}`));*/
      });
    }
  }
}

module.exports = guardMain;
