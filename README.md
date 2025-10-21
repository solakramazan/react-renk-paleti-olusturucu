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

## 💡 Temel Fonksiyonlar

### 🎲 Rastgele Renk Üretimi

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

### 🔍 Akıllı Kontrast Hesaplama

```javascript
const isLightColor = (hexColor) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Renk parlaklığını hesapla
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155;
};
```

### 🔒 Akıllı Palet Oluşturma

```javascript
const generatePalette = () => {
  const newColors = colors.map((color, index) => {
    // Kilitli renkleri koru, diğerlerini yenile
    return lockedColors[index] ? color : generateRandomColor();
  });
  setColors(newColors);
};
```

## 🎨 Özelleştirme

### Renk Sayısını Değiştirme

`App.jsx` dosyasında palet renk sayısını özelleştirebilirsiniz:

```javascript
// İlk yüklemede 5 yerine istediğiniz sayıda renk
useEffect(() => {
  setColors(Array(7).fill(null).map(() => generateRandomColor()));
  setLockedColors(Array(7).fill(false));
}, []);
```

### Tema Renklerini Özelleştirme

`index.css` ve `App.css` dosyalarında gradient renklerini değiştirin:

```css
/* Header gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Özel gradientler deneyin */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### Animasyon Hızlarını Ayarlama

```css
.color-box {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Daha hızlı animasyon için */
.color-box {
  transition: all 0.15s ease;
}
```

## 🌟 Gelecek Özellikler

- [ ] 📜 **Renk Geçmişi** - Önceki paletleri geri yükleme
- [ ] 🎨 **Çoklu Format Desteği** - RGB, HSL, CMYK formatları
- [ ] 💾 **Palet Export** - PNG, CSS, JSON, SVG formatlarında dışa aktarma
- [ ] 🎭 **Palet Şablonları** - Hazır renk şemaları (Monochrome, Analogous, vb.)
- [ ] 🧠 **AI Renk Önerileri** - Yapay zeka destekli uyumlu renk önerileri
- [ ] 🌙 **Karanlık Mod** - Göz dostu karanlık tema
- [ ] ➕ **Manuel Renk Ekleme** - Kullanıcı tanımlı renk girişi
- [ ] 🔄 **Gradient Oluşturucu** - Seçili renklerle gradient üretme
- [ ] 📱 **PWA Desteği** - Çevrimdışı kullanım ve mobil uygulama
- [ ] 🌍 **Çoklu Dil Desteği** - İngilizce, Türkçe ve diğer diller

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Her türlü katkı değerlidir. 💙

### Katkı Süreci

1️⃣ **Fork** yapın

2️⃣ **Feature branch** oluşturun
```bash
git checkout -b feature/harika-ozellik
```

3️⃣ **Değişikliklerinizi commit** edin
```bash
git commit -m 'feat: Harika özellik eklendi'
```

4️⃣ **Branch'inizi push** edin
```bash
git push origin feature/harika-ozellik
```

5️⃣ **Pull Request** açın

### Commit Mesaj Kuralları

- `feat:` Yeni özellik
- `fix:` Hata düzeltme
- `docs:` Dokümantasyon değişikliği
- `style:` Kod formatı (işlevselliği etkilemez)
- `refactor:` Kod iyileştirme
- `test:` Test ekleme/düzeltme
- `chore:` Yapılandırma değişikliği

### Geliştirme Ortamı

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Linting kontrolü
npm run lint

# Production build
npm run build
```

## 🐛 Hata Bildirimi

Bir hata mı buldunuz? [Issue açın](https://github.com/solakramazan/react-renk-paleti-olusturucu/issues/new)

**Lütfen şunları ekleyin:**
- Hatanın açıklaması
- Hata adımlarını yeniden oluşturma
- Beklenen davranış
- Ekran görüntüleri (varsa)
- Tarayıcı ve işletim sistemi bilgisi

## 📝 Lisans

Bu proje **MIT lisansı** altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

```
MIT License

Copyright (c) 2025 Ramazan Solak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software...
```

## 👤 Geliştirici

<div align="center">

### **Ramazan Solak**

[![GitHub](https://img.shields.io/badge/GitHub-solakramazan-181717?style=for-the-badge&logo=github)](https://github.com/solakramazan)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Profile-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/solakramazan)
[![Portfolio](https://img.shields.io/badge/Portfolio-Website-FF6B6B?style=for-the-badge&logo=google-chrome)](https://solakramazan.github.io)

</div>

## 🙏 Teşekkürler

Bu proje geliştirilirken ilham alınan kaynaklar:

- 🎨 [**Coolors.co**](https://coolors.co/) - Kullanıcı deneyimi ve tasarım ilhamı
- ⚛️ [**React**](https://react.dev/) - Güçlü ve esnek UI kütüphanesi
- ⚡ [**Vite**](https://vitejs.dev/) - Hızlı ve modern build aracı
- � [**MDN Web Docs**](https://developer.mozilla.org/) - Web teknolojileri referansı
- 🌈 [**Color Theory**](https://www.interaction-design.org/literature/topics/color-theory) - Renk teorisi kaynakları

## 📊 Proje İstatistikleri

![GitHub stars](https://img.shields.io/github/stars/solakramazan/react-renk-paleti-olusturucu?style=social)
![GitHub forks](https://img.shields.io/github/forks/solakramazan/react-renk-paleti-olusturucu?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/solakramazan/react-renk-paleti-olusturucu?style=social)

## 🔗 İlgili Projeler

Diğer React projelerime göz atın:

- [BMI Hesaplayıcı](https://github.com/solakramazan/react-bmi-hesaplayici)
- [Döviz Çevirici](https://github.com/solakramazan/react-doviz-cevirici)
- [Hava Durumu](https://github.com/solakramazan/react-hava-durumu)
- [Hesap Makinesi](https://github.com/solakramazan/react-hesap-makinesi)

## ❓ SSS (Sık Sorulan Sorular)

<details>
<summary><b>Renk formatını nasıl değiştirebilirim?</b></summary>
<br>
Şu an sadece HEX formatı desteklenmektedir. RGB ve HSL desteği gelecek güncellemelerde eklenecektir.
</details>

<details>
<summary><b>Kilitli renk sayısında sınır var mı?</b></summary>
<br>
Hayır, istediğiniz kadar rengi kilitleyebilirsiniz. Ancak tüm renkleri kilitlerseniz yeni palet oluşturulamaz.
</details>

<details>
<summary><b>Mobilde nasıl çalışır?</b></summary>
<br>
Mobil cihazlarda boşluk tuşu yerine ekrana dokunarak (tap) yeni palet oluşturabilirsiniz.
</details>

<details>
<summary><b>Paletleri nasıl kaydedebilirim?</b></summary>
<br>
Şu an manuel kaydetme özelliği yoktur. Renk kodlarını kopyalayıp başka bir yerde saklayabilirsiniz. Gelecek güncellemelerde export özelliği eklenecektir.
</details>

---

<div align="center">

### ⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Made with ❤️ by [Ramazan Solak](https://github.com/solakramazan)**

</div>
