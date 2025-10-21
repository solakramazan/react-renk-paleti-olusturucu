# 🎨 Renk Paleti Oluşturucu

<div align="center">

![Color Palette Generator](https://img.shields.io/badge/Color-Palette-blueviolet?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-61dafb?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.4.1-646cff?style=for-the-badge&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Modern ve interaktif renk paleti oluşturucu uygulaması**

Coolors.co'dan ilham alınarak geliştirilmiş, UI/UX odaklı profesyonel bir araç.

[Demo](https://your-demo-link.com) • [Özellikler](#-özellikler) • [Kurulum](#-kurulum) • [Kullanım](#-kullanım)

</div>

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Ekran Görüntüleri](#-ekran-görüntüleri)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Teknolojiler](#-teknolojiler)
- [Katkıda Bulunma](#-katkıda-bulunma)
- [Lisans](#-lisans)

## ✨ Özellikler

### 🎯 Ana Özellikler

- ⚡ **Hızlı Palet Üretimi** - Boşluk tuşuna basarak anında yeni palet
- 🔒 **Akıllı Kilitleme** - Beğendiğiniz renkleri sabit tutun
- 📋 **Tek Tıkla Kopyalama** - HEX kodlarını kolayca kopyalayın
- 🎨 **Otomatik Kontrast** - Okunabilirlik için akıllı metin rengi
- 📱 **Tam Responsive** - Her cihazda mükemmel görünüm

### 💫 Kullanıcı Deneyimi

- ✨ Akıcı animasyonlar ve geçişler
- 🎭 İnteraktif hover efektleri
- 🔔 Görsel geri bildirimler
- ⌨️ Klavye kısayolları
- 🎯 Minimalist ve modern tasarım

## � Ekran Görüntüleri

<div align="center">

### Ana Ekran
![Ana Ekran](./screenshots/main-screen.png)
*5 rastgele renkten oluşan dinamik palet*

### Renk Kilitleme
![Kilitleme](./screenshots/lock-feature.png)
*Beğendiğiniz renkleri sabitleyin*

### Kopyalama
![Kopyalama](./screenshots/copy-feature.png)
*Tek tıkla renk kodunu kopyalayın*

</div>

## �🚀 Kurulum

### 📦 Gereksinimler

- **Node.js** (v14 veya üzeri)
- **npm** veya **yarn**

### ⚙️ Kurulum Adımları

1️⃣ **Projeyi Klonlayın**
```bash
git clone https://github.com/solakramazan/react-renk-paleti-olusturucu.git
cd react-renk-paleti-olusturucu
```

2️⃣ **Bağımlılıkları Yükleyin**
```bash
npm install
# veya
yarn install
```

3️⃣ **Geliştirme Sunucusunu Başlatın**
```bash
npm run dev
# veya
yarn dev
```

4️⃣ **Tarayıcıda Açın**
```
http://localhost:5173
```

### 🏗️ Production Build

```bash
npm run build
# veya
yarn build
```

Build dosyaları `dist/` klasöründe oluşturulacaktır.

## 📖 Kullanım

### ⌨️ Klavye Kısayolları

| Tuş | Aksiyon | Açıklama |
|-----|---------|----------|
| <kbd>SPACE</kbd> | Yeni Palet | Kilitli olmayan renkleri yenile |

### 🖱️ Fare İşlemleri

| İşlem | Aksiyon | Sonuç |
|-------|---------|-------|
| **Renk Kutusuna Tıklama** | Kopyala | Renk kodu panoya kopyalanır |
| **Kilit İkonuna Tıklama** | Kilitle/Aç | Rengi sabitler veya serbest bırakır |
| **Renk Üzerine Hover** | Önizle | Kopyalama ikonu görünür |

### 🎯 Kullanım Senaryoları

**Web Tasarımcılar İçin**
```
1. Boşluk tuşuna basarak paletler arasında gezin
2. Beğendiğiniz renkleri kilitleyin
3. Tamamlayıcı renkleri bulmak için yeni paletler oluşturun
4. Renk kodlarını kopyalayıp tasarımınızda kullanın
```

**Geliştiriciler İçin**
```
1. Proje için renk paleti oluşturun
2. HEX kodlarını CSS/SCSS değişkenlerine aktarın
3. Tutarlı renk şeması oluşturun
```

## 🏗️ Proje Yapısı

```
react-renk-paleti-olusturucu/
│
├── 📁 public/                    # Statik dosyalar
│   └── vite.svg
│
├── 📁 src/
│   ├── 📁 components/            # React bileşenleri
│   │   └── ColorBox.jsx          # Renk kutusu bileşeni
│   │
│   ├── App.jsx                   # Ana uygulama bileşeni
│   ├── App.css                   # Uygulama stilleri
│   ├── index.css                 # Global stiller
│   └── main.jsx                  # Giriş noktası
│
├── index.html                    # HTML şablonu
├── package.json                  # Proje bağımlılıkları
├── vite.config.js               # Vite yapılandırması
├── eslint.config.js             # ESLint kuralları
└── README.md                     # Dokümantasyon
```

## 🛠️ Teknolojiler

<table>
<tr>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="48" height="48" alt="React" />
<br>React
</td>
<td align="center" width="96">
<img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" />
<br>Vite
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="48" height="48" alt="JavaScript" />
<br>JavaScript
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="48" height="48" alt="CSS3" />
<br>CSS3
</td>
<td align="center" width="96">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="48" height="48" alt="HTML5" />
<br>HTML5
</td>
</tr>
</table>

### Ana Teknolojiler

- **⚛️ React 18.3.1** - Kullanıcı arayüzü kütüphanesi
- **⚡ Vite 5.4.1** - Modern ve hızlı build aracı
- **🎨 CSS3** - Animasyonlar ve responsive tasarım
- **📏 ESLint** - Kod kalitesi ve standartları

## 🎯 Temel Fonksiyonlar

### Renk Üretimi

```javascript
const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
```

### Renk Kontrast Hesaplama

```javascript
const isLightColor = (hexColor) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};
```

## 🎨 Özelleştirme

### Renk Sayısını Değiştirme

`App.jsx` dosyasında renk sayısını değiştirebilirsiniz:

```javascript
// 5 yerine istediğiniz sayıyı yazın
setColors(Array(5).fill(null).map(() => generateRandomColor()));
```

### Tema Renkleri

`index.css` ve `App.css` dosyalarındaki gradient renklerini değiştirerek kendi temanızı oluşturabilirsiniz:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🌟 Gelecek Özellikler

- [ ] Renk geçmişi (History)
- [ ] Farklı renk formatları (RGB, HSL, CMYK)
- [ ] Palet export (PNG, CSS, JSON)
- [ ] Önceden tanımlı palet şablonları
- [ ] Renk uyumu önerileri
- [ ] Karanlık mod
- [ ] Özel renk ekleme

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen şu adımları izleyin:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 👤 Geliştirici

**İsminiz**

- GitHub: [@kullaniciadi](https://github.com/kullaniciadi)
- LinkedIn: [İsminiz](https://linkedin.com/in/kullaniciadi)

## 🙏 Teşekkürler

- [Coolors.co](https://coolors.co/) - İlham kaynağı
- [React](https://react.dev/) - Harika bir kütüphane
- [Vite](https://vitejs.dev/) - Hızlı build aracı

## 📸 Ekran Görüntüleri

### Ana Ekran
Uygulamayı başlattığınızda 5 rastgele renkten oluşan bir palet görürsünüz.

### Renk Kilitleme
Beğendiğiniz renkleri kilitleyin, diğer renkler değişsin.

### Kopyalama
Renk kodunu tek tıkla kopyalayın, görsel geri bildirim alın.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
