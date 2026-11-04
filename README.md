# CEY Studio

ceystudios.com.tr için Türkçe, mobil uyumlu stüdyo portfolyosu. Google Play'de yayındaki beş uygulama (Hayatını Planla, FastTrack, 852Hz, Selaora, Döngü Takip), geliştirmedeki dört proje ve her uygulama için ayrı detay sayfası. JavaScript kapalıyken de bütün içerik ve gezinme çalışır; animasyonlar `prefers-reduced-motion` ile kapanır. Açık ve koyu tema sistem ayarını izler.

## Çalıştırma

Node.js 20+ yeterli; paket kurulumu gerekmez.

```sh
npm run build
npm run check
python -m http.server 8080 --directory dist
```

## İçerik

`data/apps.json` tek içerik kaynağı:

- `live`: Google Play'deki uygulamalar. Puan, yorum, indirme, sürüm ve güncelleme tarihi Play sayfasından elle alınır; değiştiğinde burada güncelle.
- `upcoming`: henüz mağazada olmayan projeler.
- Ekran görüntüleri ve ikonlar `dist/assets/play/<slug>/` altında (`icon.webp`, `shot-N.webp`). `shots` alanı dosya sayısıyla eşleşmeli.

Sonra `npm run build` ve `npm run check`. Check; kırık bağlantıları, eksik ekran görüntülerini ve görünür metinde uzun tire kullanımını yakalar.

## Yayınlama

`dist/` statik yayın klasörü. Vercel (`vercel.json`) ve Netlify (`netlify.toml`) ayarları dahil.

## Kaynaklar

`docs/SOURCES.md`.
