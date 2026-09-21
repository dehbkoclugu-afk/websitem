# Cey Studios

Cey Studios için Türkçe, mobil uyumlu uygulama portföyü. Ana sayfa, sekiz bağımsız uygulama tanıtım sayfası ve 404 sayfası. JavaScript kapalıyken de bütün içerik ve gezinme çalışır.

## Çalıştırma

Node.js 20+ yeterlidir; paket kurulumu veya API anahtarı gerekmez.

```sh
npm run build
npm run check
python3 -m http.server 8080 --directory dist
```

## Uygulama ekleme veya düzenleme

`data/apps.json` tek içerik kaynağıdır. Mevcut bir kaydı kopyala; `slug`, ad, kategori, açıklama ve özellikleri düzenle. `image` alanına `dist/assets` içindeki dosya adını yaz. Görsel yoksa uygulama adı kendi renk alanında gösterilir. `storeUrl` alanına doğrulanmış Google Play veya App Store bağlantısını ekle; boşken indirme düğmesi gösterilmez. Sonra `npm run build` ve `npm run check` çalıştır.

`repo` alanı yalnızca içerik kaynağını belirtir, ziyaretçiye gösterilmez. Uygulama eklemek kod dosyalarını değiştirmeyi gerektirmez. Bir yönetim paneli bulunmaz.

## Yayınlama

`dist/` statik yayın klasörüdür. Vercel için `vercel.json` dahildir. Netlify için `netlify.toml` dahildir. Sites kimliği `.openai/hosting.json` içindedir. Mağaza bağlantıları kullanıcı tarafından doğrulanıp içerik dosyasına girilmelidir; paket adlarından tahmin edilmemiştir.

## Kaynaklar

Tasarım kaynakları, alınan kararlar ve görsel/font kökenleri `docs/SOURCES.md` içindedir. Yeni uygulamalar yayınlanırken gerçek mağaza adı ve durumunu doğrulayın. Selaora, kullanıcının yeni marka adıdır; kaynak deposunda eski Lumen adı hâlâ bulunur.
