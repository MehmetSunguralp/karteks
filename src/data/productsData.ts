export interface Product {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  category: 'tshirt' | 'pantolon' | 'tulum' | 'yelek' | 'mont';
  price?: number;
  details?: {
    material?: string;
    sizes?: string[];
    colors?: string[];
    features?: string[];
  };
}

export const products: Product[] = [
  // T-Shirts
  {
    id: 1,
    name: 'Klasik İş T-Shirt',
    description: 'Rahat ve dayanıklı iş t-shirt modeli. %100 pamuklu kumaştan üretilmiştir.',
    shortDescription: 'Rahat ve dayanıklı iş t-shirt modeli.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    category: 'tshirt',
    price: 150,
    details: {
      material: '100% Pamuk',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Beyaz', 'Lacivert', 'Siyah'],
    },
  },
  {
    id: 2,
    name: 'Polo Yaka İş T-Shirt',
    description: 'Profesyonel görünümlü polo yaka t-shirt. Terletmeyen nefes alabilir kumaş.',
    shortDescription: 'Profesyonel görünümlü polo yaka t-shirt.',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=500&fit=crop',
    category: 'tshirt',
    price: 180,
    details: {
      material: 'Polyester-Pamuk Karışımı',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Mavi', 'Kırmızı', 'Beyaz'],
    },
  },
  {
    id: 3,
    name: 'Uzun Kollu İş T-Shirt',
    description: 'Soğuk havalar için ideal uzun kollu iş t-shirt modeli.',
    shortDescription: 'Soğuk havalar için ideal uzun kollu model.',
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop',
    category: 'tshirt',
    price: 200,
    details: {
      material: '100% Pamuk',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Siyah', 'Lacivert', 'Gri'],
    },
  },
  // Pantolons
  {
    id: 4,
    name: 'Klasik İş Pantolonu',
    description: 'Rahat kesimli, dayanıklı iş pantolonu. Çoklu cep tasarımı.',
    shortDescription: 'Rahat kesimli, dayanıklı iş pantolonu.',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&h=500&fit=crop',
    category: 'pantolon',
    price: 350,
    details: {
      material: 'Polyester-Pamuk Karışımı',
      sizes: ['30', '32', '34', '36', '38', '40', '42'],
      colors: ['Siyah', 'Lacivert', 'Bej'],
    },
  },
  {
    id: 5,
    name: 'Dar Kesim İş Pantolonu',
    description: 'Modern dar kesim iş pantolonu. Şık ve konforlu.',
    shortDescription: 'Modern dar kesim iş pantolonu.',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=500&fit=crop',
    category: 'pantolon',
    price: 380,
    details: {
      material: 'Polyester-Pamuk Karışımı',
      sizes: ['30', '32', '34', '36', '38'],
      colors: ['Siyah', 'Lacivert'],
    },
  },
  {
    id: 6,
    name: 'Kargo İş Pantolonu',
    description: `Profesyonel sahalarda yüksek konfor ve dayanıklılık sunan bu siyah reflektörlü iş pantolonu, hem güvenlik hem de rahatlık odaklı tasarlanmıştır.
Geniş kargo cepleri alet ve kişisel eşyalar için ekstra depolama alanı sağlar. Reflektör şeritleri sayesinde düşük ışık koşullarında görünürlüğü artırır.
Pamuk-polyester karışımı kumaşı, uzun süreli kullanımlarda nefes alabilirlik ve sağlamlık dengesini korur.`,
    shortDescription: 'Fonksiyonel kargo pantolon, çok sayıda cep.',
    image: 'https://i.hizliresim.com/64t5otq.jpeg',
    category: 'pantolon',
    price: 420,
    details: {
      material: '100% Pamuk',
      sizes: ['30', '32', '34', '36', '38', '40'],
      colors: ['Haki', 'Siyah', 'Bej'],
      features: [
        'Kumaş Türü: Dayanıklı pamuk-polyester karışımı',
        'Kumaş Gramajı: 260 gr/m²',
        'Kesim: Rahat kalıp (Regular Fit)',
        'Detaylar: Çift reflektör şerit, yan ve arka cepler, kapaklı kargo cep',
      ],
    },
  },
  // Tulum
  {
    id: 7,
    name: 'Tek Parça İş Tulumu',
    description: 'Tam koruma sağlayan tek parça iş tulumu. Dayanıklı ve pratik.',
    shortDescription: 'Tam koruma sağlayan tek parça iş tulumu.',
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=500&h=500&fit=crop',
    category: 'tulum',
    price: 650,
    details: {
      material: 'Polyester-Kotton Karışımı',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Mavi', 'Gri', 'Turuncu'],
    },
  },
  {
    id: 8,
    name: 'Yarım İş Tulumu',
    description: 'Üst kısmı açık, pratik kullanımlı yarım iş tulumu.',
    shortDescription: 'Üst kısmı açık, pratik yarım iş tulumu.',
    image: 'https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=500&h=500&fit=crop',
    category: 'tulum',
    price: 550,
    details: {
      material: '100% Pamuk',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Mavi', 'Gri'],
    },
  },
  {
    id: 9,
    name: 'Alev Geciktirici İş Tulumu',
    description: 'Özel koruma sağlayan alev geciktirici iş tulumu.',
    shortDescription: 'Özel koruma sağlayan alev geciktirici tulum.',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=500&h=500&fit=crop',
    category: 'tulum',
    price: 850,
    details: {
      material: 'Alev Geciktirici Kumaş',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Turuncu', 'Sarı', 'Mavi'],
    },
  },
  // Yelek
  {
    id: 10,
    name: 'Yansıtıcı İş Yeleği',
    description: 'Gece görünürlüğü için yansıtıcı şeritli iş yeleği.',
    shortDescription: 'Gece görünürlüğü için yansıtıcı iş yeleği.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    category: 'yelek',
    price: 250,
    details: {
      material: 'Polyester',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Turuncu', 'Sarı', 'Lime'],
    },
  },
  {
    id: 11,
    name: 'Cepli İş Yeleği',
    description: 'Çok sayıda cep ile pratik kullanım sunan iş yeleği.',
    shortDescription: 'Çok sayıda cep ile pratik iş yeleği.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop',
    category: 'yelek',
    price: 280,
    details: {
      material: 'Polyester-Pamuk Karışımı',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Siyah', 'Lacivert', 'Gri'],
    },
  },
  {
    id: 12,
    name: 'Isıtmalı İş Yeleği',
    description: 'Soğuk havalar için özel tasarımlı ısıtmalı iş yeleği.',
    shortDescription: 'Soğuk havalar için ısıtmalı iş yeleği.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop',
    category: 'yelek',
    price: 450,
    details: {
      material: 'Polyester-İzolasyon',
      sizes: ['M', 'L', 'XL'],
      colors: ['Siyah', 'Gri'],
    },
  },
  // Mont
  {
    id: 13,
    name: 'Kışlık İş Montu',
    description: 'Soğuk havalara dayanıklı, su geçirmez iş montu.',
    shortDescription: 'Soğuk havalara dayanıklı iş montu.',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
    category: 'mont',
    price: 750,
    details: {
      material: 'Polyester-Polar',
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Siyah', 'Lacivert', 'Gri'],
    },
  },
  {
    id: 14,
    name: 'Rüzgarlık İş Montu',
    description: 'Rüzgara karşı koruma sağlayan hafif iş montu.',
    shortDescription: 'Rüzgara karşı koruma sağlayan hafif mont.',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=500&fit=crop',
    category: 'mont',
    price: 520,
    details: {
      material: 'Polyester',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Siyah', 'Mavi', 'Turuncu'],
    },
  },
  {
    id: 15,
    name: '3-in-1 İş Montu',
    description: 'İç ve dış katman ayrılabilen, 3 farklı kullanım seçeneği sunan mont.',
    shortDescription: 'İç ve dış katman ayrılabilen 3-in-1 mont.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
    category: 'mont',
    price: 950,
    details: {
      material: 'Polyester-Polar',
      sizes: ['M', 'L', 'XL', 'XXL'],
      colors: ['Siyah', 'Lacivert'],
    },
  },
];
