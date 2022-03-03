client.on("guildMemberAdd", member => {
    require("moment-duration-format")
      var üyesayısı = member.guild.members.cache.size.toString().replace(/ /g, "    ")
      var üs = üyesayısı.match(/([0-999])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9999])/g, d => {
          return {
            '0': `0`, // SAYI EMOJİ ID
            '1': `1`, // SAYI EMOJİ ID
            '2': `2`, // SAYI EMOJİ ID
            '3': `3`, // SAYI EMOJİ ID
            '4': `4`, // SAYI EMOJİ ID
            '5': `5`, // SAYI EMOJİ ID
            '6': `6`, // SAYI EMOJİ ID
            '7': `7`, // SAYI EMOJİ ID
            '8': `8`, // SAYI EMOJİ ID
            '9': `9`}[d];})}
    Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
    }  
    let seskanal = [
    `<#v.Confirmed kanal id 1>`,
    `<#v.Confirmed kanal id 2>`,
    `<#v.Confirmed kanal id 3>`
]; 
  const kanal = member.guild.channels.cache.find(r => r.id === `hgkanalid`);
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
         const kurulu2 =  moment(member.user.createdTimestamp).fromNow()    
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
     const gecen = moment.duration(kurulus).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
    var kontrol;
  if (kurulus < 1296000000) kontrol = '<a:çarpıemojiisim:çarpıemojiid>'
  if (kurulus > 1296000000) kontrol = '<a:tikemojiisim:tikemojiid>'
    moment.locale("tr");
    kanal.send(`
 🎉 Sunucuismi'a hoş geldin <@`+ member + `>🎉

  \`••❯\` Hesabın **`+ moment(member.user.createdTimestamp).format("LLL") +`** tarihinde (\``+kurulu2+`\`) `+kontrol+` 

  \`••❯\` Sunucu kurallarımız <#kurallarkanalid> kanalında belirtilmiştir. Unutma sunucu içerisinde ki ceza 
  işlemlerin kuralları okuduğunu varsayarak gerçekleştirilicek.

  \`••❯\` Sunucumuzun `+üyesayısı+`. üyesisin Tagımız (\`TAG\`) alarak bizlere destek olaiblirsin. Kayıt olmak için teyit odalarına girip ses teyit vermen gerekiyor yetkililerimiz seninle ilgilenecektir! İyi eğlenceler.

**>**`+ seskanal.random() +` **Kanalına girerek saniyeler içerisinde kayıt olabilirsiniz <**`)});
