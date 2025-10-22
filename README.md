# 🎨 Renk Paleti Oluşturucu# 🎨 Renk Paleti Oluşturucu



React ile yapmış olduğum renk paleti oluşturucu projesi. Boşluk tuşuna basarak rastgele renk paletleri oluşturabilir, beğendiğiniz renkleri kilitleyebilir ve renk kodlarını kopyalayabilirsiniz.React ile yapmış olduğum renk paleti oluşturucu projesi. Boşluk tuşuna basarak rastgele renk paletleri oluşturabilir, beğendiğiniz renkleri kilitleyebilir ve renk kodlarını kopyalayabilirsiniz.



## 📝 Projenin Amacı## 📝 Projenin Amacı



Bu projeyi yaparken amacım, web tasarımcıların ve geliştiricilerin hızlıca renk paletleri oluşturabilmesini sağlamaktı. Coolors.co sitesinden ilham aldım ve bunu React ile yapmaya karar verdim.Bu projeyi yaparken amacım, web tasarımcıların ve geliştiricilerin hızlıca renk paletleri oluşturabilmesini sağlamaktı. Coolors.co sitesinden ilham aldım ve bunu React ile yapmaya karar verdim.


## 🛠️ Nasıl Yaptım?## � 



Bu projeyi yaparken şunları kullandım:<div align="center">



- **React** - Arayüzü oluşturmak için### Ana Ekran

- **Vite** - Projeyi hızlıca ayağa kaldırmak için![Ana Ekran](./screenshots/main-screen.png)

- **CSS** - Animasyonlar ve stil için*5 rastgele renkten oluşan dinamik palet*

- **JavaScript** - Renk üretme ve diğer fonksiyonlar için

### Renk Kilitleme

### Temel Mantık![Kilitleme](./screenshots/lock-feature.png)

*Beğendiğiniz renkleri sabitleyin*

1. Her boşluk tuşuna basıldığında rastgele HEX renk kodları üretiyorum

2. Kilitlenen renkleri state'te tutup, yeni palet oluştururken onları koruyorum### Kopyalama

3. Renklerin açık mı koyu mu olduğunu hesaplayıp, metin rengini ona göre ayarlıyorum![Kopyalama](./screenshots/copy-feature.png)

4. Clipboard API ile renk kodlarını kopyalıyorum*Tek tıkla renk kodunu kopyalayın*



## 🚀 Nasıl Kullanılır?</div>



## 📂 Proje Dosyaları3️⃣ **Geliştirme Sunucusunu Başlatın**

```bash

```npm run dev

react-renk-paleti-olusturucu/# veya

├── src/yarn dev

│   ├── components/```

│   │   └── ColorBox.jsx      # Her bir renk kutusu

│   ├── App.jsx                # Ana uygulama4️⃣ **Tarayıcıda Açın**

│   ├── App.css                # Stiller```

│   └── main.jsx               # Başlangıç dosyasıhttp://localhost:5173

├── index.html```

└── package.json

```### 🏗️ Production Build



## 💡 Kod Örnekleri```bash

npm run build

### Rastgele Renk Üretme# veya

yarn build

```javascript```

const generateRandomColor = () => {

  const letters = '0123456789ABCDEF';Build dosyaları `dist/` klasöründe oluşturulacaktır.

  let color = '#';

  for (let i = 0; i < 6; i++) {## 📖 Kullanım

    color += letters[Math.floor(Math.random() * 16)];

  }### ⌨️ Klavye Kısayolları

  return color;

};| Tuş | Aksiyon | Açıklama |

```|-----|---------|----------|

| <kbd>SPACE</kbd> | Yeni Palet | Kilitli olmayan renkleri yenile |

### Renk Parlaklığı Hesaplama

### 🖱️ Fare İşlemleri

```javascript

const isLightColor = (hexColor) => {| İşlem | Aksiyon | Sonuç |

  const hex = hexColor.replace('#', '');|-------|---------|-------|

  const r = parseInt(hex.substr(0, 2), 16);| **Renk Kutusuna Tıklama** | Kopyala | Renk kodu panoya kopyalanır |

  const g = parseInt(hex.substr(2, 2), 16);| **Kilit İkonuna Tıklama** | Kilitle/Aç | Rengi sabitler veya serbest bırakır |

  const b = parseInt(hex.substr(4, 2), 16);| **Renk Üzerine Hover** | Önizle | Kopyalama ikonu görünür |

  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 155;### 🎯 Kullanım Senaryoları

};

```**Web Tasarımcılar İçin**

```

