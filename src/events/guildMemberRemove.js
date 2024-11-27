const fs = require('fs');
const path = require('path');

// Dosya yolunu ayarla
const dataFile = path.resolve(__dirname, '../../serverData.json');

// Dosyayı oku
let data;
try {
    data = JSON.parse(fs.readFileSync(dataFile, 'utf-8'));
} catch (error) {
    console.error('JSON dosyasını okurken hata oluştu:', error);
    return;
}

module.exports = {
    name: 'guildMemberRemove',
    async execute(member) {
        // Ana sunucudan çıkan üyeyi kontrol et
        if (member.guild.id === data.mainServer) {
            const sideServer = member.client.guilds.cache.get(data.sideServer);
            
            // Yan sunucu var mı?
            if (!sideServer) {
                console.error('Yan sunucu bulunamadı.');
                return;
            }

            console.log('Yan sunucu bulundu:', sideServer.name);

            try {
                // Yan sunucudan üyeyi yasakla
                await sideServer.members.ban(member.id, { reason: 'Ana sunucudan çıkan' });
                console.log(`Kullanıcı ${member.user.tag} yan sunucudan yasaklandı.`);

                // Yasaklanan kullanıcıyı data.bannedUsers dizisine ekle
                if (!data.bannedUsers.includes(member.id)) {
                    data.bannedUsers.push(member.id);
                }

                // JSON dosyasını güncelle
                fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
                console.log('Veriler başarıyla kaydedildi.');
            } catch (error) {
                console.error('Yan sunucuda yasaklama işlemi sırasında hata oluştu:', error);
            }
        }
    },
};
