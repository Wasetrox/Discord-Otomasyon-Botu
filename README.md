```markdown
# Ana Sunucu ve Yan Sunucu Otomasyon Botu

Bu proje, bir Discord botudur. Bot, ana sunucudan çıkan üyeleri yan sunuculardan otomatik olarak banlar ve ayrıca yan sunucudaki banlı kullanıcı sayısını kontrol eder. Bunun dışında belirli komutlarla yan sunuculardaki banları kaldırabilir ve sunucu ID'lerini ayarlayabilirsiniz.

## Özellikler

- **Ana Sunucu - Yan Sunucu Otomasyonu:** Ana sunucudan çıkan kullanıcılar, yan sunuculardan otomatik olarak banlanır.
- **Banlı Kullanıcılar:** Yan sunucudaki banlı kullanıcı sayısı embed mesajı ile görüntülenir.
- **Tüm Banları Kaldır:** Yan sunucudaki tüm banlı kullanıcıların banı kaldırılabilir.
- **Sunucu ID Ayarlama:** Ana ve yan sunucu ID'leri ayarlanabilir.

## Kurulum

1. **Node.js Yükleyin**  
   Bu projeyi çalıştırmak için [Node.js](https://nodejs.org/) yüklü olmalıdır.

2. **Bağımlılıkları Yükleyin**  
   Projeyi klonladıktan sonra, terminal üzerinden aşağıdaki komutu çalıştırarak gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. **Bot Token ve Client ID Ayarları**  
   `config.json` dosyasını oluşturun ve bot token'inizi, client ID'nizi ekleyin. Dosya şu şekilde olmalıdır:
   ```json
   {
       "token": "YOUR_BOT_TOKEN",
       "clientId": "YOUR_CLIENT_ID",
       "sesId": "BOTS_SES_ID",
       "sunucuId": "SES_SUNUCU_ID"
   }
   ```

4. **ServerData JSON Ayarları**  
   `serverData.json` dosyasını oluşturun ve ana/yan sunucu ID'lerinizi buraya ekleyin. Örnek dosya içeriği:
   ```json
   {
       "mainServer": "MAIN_SERVER_ID",
       "sideServer": "SIDE_SERVER_ID",
       "bannedUsers": []
   }
   ```

## Komutlar

- **/banaffı**: Yan sunucudaki tüm banlı kullanıcıların banlarını kaldırır.
- **/banlılar**: Yan sunucudaki toplam banlı kullanıcı sayısını gösterir.



# Contact & Support
[![Discord Banner](https://api.weblutions.com/discord/invite/novadev/)](https://discord.gg/novadev)

## Yapımcı

**Discord Bot** - Geliştirici: [Wasetrox](https://github.com/Wasetrox)

## Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
```
