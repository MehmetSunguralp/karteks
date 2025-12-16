// Normalize products to always have images array
const normalizeProduct = (product) => {
  if (Array.isArray(product.image)) {
    return { ...product, images: product.image };
  }
  return { ...product, images: [product.image] };
};

const rawProducts = [
  {
    "id": 1,
    "name": "İş Önlüğü",
    "image": "https://i.hizliresim.com/3vuuoct.jpeg",
    "category": ["önlük"],
    "description": "Gün boyu kullanım için tasarlanmış, rahat ve dayanıklı iş önlüğü modeli. Hafif yapısı sayesinde hareket özgürlüğü sunar ve profesyonel kullanım için idealdir.",
    "shortDescription": "Rahat ve dayanıklı iş önlüğü modeli."
  },
  {
    "id": 2,
    "name": "İş Önlüğü 2",
    "image": "https://i.hizliresim.com/3u9lsgx.jpeg",
    "category": ["önlük"],
    "description": "Uzun süreli çalışmalarda konfor sağlayan, pratik ve dayanıklı iş önlüğü. Çeşitli sektörlerde güvenle kullanılabilecek ergonomik bir tasarıma sahiptir.",
    "shortDescription": "Konforlu ve dayanıklı iş önlüğü."
  },
  {
    "id": 3,
    "name": "İş Önlüğü 3",
    "image": "https://i.hizliresim.com/mqfsani.jpeg",
    "category": ["önlük"],
    "description": "Üst ve alt parçadan oluşan iş önlüğü takımı, rahat hareket imkanı sunan tasarımı ve dayanıklılığıyla yoğun iş temposuna uyum sağlar.",
    "shortDescription": "Rahat ve dayanıklı iş önlüğü takımı."
  },
  {
    "id": 4,
    "name": "İş Önlüğü Takımı",
    "image": "https://i.hizliresim.com/kk7viid.jpeg",
    "category": ["önlük"],
    "description": "Profesyonel kullanım için tasarlanmış iş önlüğü takımı, fonksiyonel yapısı ve dayanıklı tasarımıyla iş süreçlerinde maksimum konfor sunar.",
    "shortDescription": "Dayanıklı ve fonksiyonel iş önlüğü takımı."
  },
  {
    "id": 5,
    "name": "Aşçı Önlüğü",
    "image": "https://i.hizliresim.com/l6nam4p.jpeg",
    "category": ["önlük"],
    "description": "Mutfak ortamları için tasarlanmış, rahat ve dayanıklı aşçı önlüğü modeli. Hareket özgürlüğü sağlayan kesimiyle pratik kullanım sunar.",
    "shortDescription": "Rahat ve dayanıklı aşçı önlüğü."
  },
  {
    "id": 6,
    "name": "Aşçı Önlüğü Takımı",
    "image": "https://i.hizliresim.com/no7h4wh.jpeg",
    "category": ["önlük"],
    "description": "Profesyonel mutfaklarda kullanım için geliştirilmiş aşçı önlüğü takımı. Ergonomik yapısı ve yüksek dayanıklılığıyla rahat bir çalışma deneyimi sunar.",
    "shortDescription": "Dayanıklı ve ergonomik aşçı önlüğü takımı."
  },
  {
    "id": 7,
    "name": "Sağlık Personeli Önlüğü",
    "image": "https://i.hizliresim.com/qqczea3.jpeg",
    "category": ["önlük"],
    "description": "Yoğun çalışma temposuna uygun, hafif ve dayanıklı sağlık personeli önlüğü. Gün boyu konfor sağlayan sade ve işlevsel bir tasarıma sahiptir.",
    "shortDescription": "Rahat ve dayanıklı sağlık personeli önlüğü."
  },
  {
    "id": 8,
    "name": "Softshell İş Yeleği Üç Cepli",
    "image": "https://i.hizliresim.com/g1fiexz.jpeg",
    "category": ["yelek", "softshell"],
    "description": "Zorlu iş koşullarında maksimum konfor sunmak için tasarlanan softshell siyah iş ceketi, esnek yapısı sayesinde gün boyu rahat hareket imkânı sağlar. Dayanıklı yüzeyi ile hem saha hem fabrika ortamlarında güvenilir koruma sunar.",
    "shortDescription": "Dayanıklı ve konforlu softshell iş ceketi."
  },
  {
    "id": 9,
    "name": "Softshell Fermuarlı İş Yeleği İki Cepli",
    "image": "https://i.hizliresim.com/9dby0fw.jpeg",
    "category": ["yelek", "softshell"],
    "description": "Hafif yapısı ve ergonomik kesimiyle uzun süreli kullanımda konfor sağlayan haki softshell çalışma ceketi, rüzgar tutmayan yapısı ile dış mekân çalışmalarında ideal bir performans sunar.",
    "shortDescription": "Ergonomik ve hafif softshell çalışma ceketi."
  },
  {
    "id": 10,
    "name": "Softshell Fermuarlı İş Yeleği Üç Cepli",
    "image": "https://i.hizliresim.com/ouleqbb.jpeg",
    "category": ["yelek", "softshell"],
    "description": "Dikkat çekici rengi ve fonksiyonel tasarımıyla öne çıkan kırmızı softshell ceket, hafif dokusu ve esnek yapısıyla aktif çalışma alanlarında yüksek konfor sunar.",
    "shortDescription": "Hafif ve ergonomik kırmızı softshell ceket."
  },
  {
    "id": 11,
    "name": "Reflektörlü İş Yeleği",
    "image": "https://i.hizliresim.com/5smk7uv.jpeg",
    "category": ["yelek"],
    "description": "Geniş reflektör bantlarıyla görünürlüğü artıran siyah iş güvenliği ceketi, dayanıklı dokusu sayesinde yoğun iş temposuna uyum sağlar. İç ve dış mekânlarda güvenilir bir kullanım sunar.",
    "shortDescription": "Yüksek görünürlüklü güvenlik ceketi."
  },
  {
    "id": 12,
    "name": "Reflektörlü İkaz Yeleği",
    "image": "https://i.hizliresim.com/tirx0ff.jpeg",
    "category": ["yelek"],
    "description": "Turuncu tasarımı ve güçlü reflektör bantlarıyla maksimum görünürlük sağlayan bu güvenlik ceketi, hafif yapısı ile uzun süreli kullanımlarda bile rahatlık sunar.",
    "shortDescription": "Rahat ve yüksek görünürlüklü güvenlik ceketi."
  },
  {
    "id": 13,
    "name": "Reflektörlü İkaz Yeleği",
    "image": "https://i.hizliresim.com/e8bsn3o.jpeg",
    "category": ["yelek"],
    "description": "Turuncu tasarımı ve güçlü reflektör bantlarıyla maksimum görünürlük sağlayan bu güvenlik ceketi, hafif yapısı ile uzun süreli kullanımlarda bile rahatlık sunar.",
    "shortDescription": "Rahat ve yüksek görünürlüklü güvenlik ceketi."
  },
  {
    "id": 14,
    "name": "Softshell İş Ceketi",
    "image": "https://i.hizliresim.com/4dyxdmi.jpeg",
    "category": ["ceket", "softshell"],
    "description": "Zorlu çalışma koşullarında dayanıklılık sunmak için tasarlanan siyah softshell iş ceketi, rüzgâr geçirmeyen yapısı ve esnek kumaşıyla gün boyu konfor sağlar. Kapüşonlu tasarımı sayesinde dış mekân kullanımlarında ekstra koruma sunar.",
    "shortDescription": "Dayanıklı ve konforlu siyah softshell iş ceketi."
  },
  {
    "id": 15,
    "name": "Softshell Üç Cepli İş Ceketi",
    "image": "https://i.hizliresim.com/5kj1vs2.jpeg",
    "category": ["ceket", "softshell"],
    "description": "Minimal ve profesyonel bir görünüme sahip bu siyah softshell çalışma ceketi, hafif yapısı ve ergonomik kesimiyle gün boyu rahat hareket imkânı sunar. Hem iç hem dış mekânlarda güvenilir performans sağlar.",
    "shortDescription": "Hafif ve ergonomik siyah softshell çalışma ceketi."
  },
  {
    "id": 16,
    "name": "Softshell İki Cepli İş Ceketi",
    "image": "https://i.hizliresim.com/t85f0ch.jpeg",
    "category": ["ceket", "softshell"],
    "description": "Gri tonlarla modern bir görünüm sunan bu softshell iş ceketi, rüzgâr geçirmeyen yapısı ve esnek kumaşıyla uzun süreli çalışmalarda yüksek konfor sağlar. Kapüşonlu yapısı dış mekân kullanımına uygun hale getirir.",
    "shortDescription": "Rahat ve dayanıklı gri softshell iş ceketi."
  },
  {
    "id": 17,
    "name": "Softshell İş Ceketi",
    "image": "https://i.hizliresim.com/5ze7413.jpeg",
    "category": ["ceket", "softshell"],
    "description": "Canlı kırmızı rengiyle dikkat çeken bu softshell iş ceketi, hafif kumaşı ve nefes alabilen yapısıyla aktif çalışma ortamlarında üstün konfor sunar. Gün boyu hareket özgürlüğünü destekleyen ergonomik bir kesime sahiptir.",
    "shortDescription": "Hafif ve konforlu kırmızı softshell iş ceketi."
  },
  {
    "id": 18,
    "name": "Softshell Çift Renk İş Ceketi",
    "image": "https://i.hizliresim.com/7ooaw9l.jpeg",
    "category": ["ceket", "softshell"],
    "description": "Reflektif detayları ve sade tasarımıyla öne çıkan siyah softshell iş ceketi, dayanıklı yapısıyla yoğun iş temposunda konfor sağlar. Hafif dokusu ve modern görünümü profesyonel kullanım için idealdir.",
    "shortDescription": "Dayanıklı ve modern siyah softshell iş ceketi."
  },
  {
    "id": 19,
    "name": "Softshell Çift Renk İş Ceketi",
    "image": "https://i.hizliresim.com/cptgr8s.jpeg",
    "category": ["ceket", "softshell"],
    "description": "Kırmızı-siyah çift renk tasarımıyla dinamik bir görünüm sunan softshell iş ceketi, dış etkenlere karşı dayanıklı yapısıyla profesyonel sahalarda güvenilir kullanım sağlar. Esnek kumaşı sayesinde uzun süreli çalışmalarda konfor sunar.",
    "shortDescription": "Dayanıklı ve modern çift renk softshell iş ceketi."
  },
  {
    "id": 20,
    "name": "Reflektörlü İş Pantolonu",
    "image": "https://i.hizliresim.com/sx5k89h.jpeg",
    "category": ["pantolon"],
    "description": "Gün boyu kullanım için tasarlanan lacivert reflektörlü iş pantolonu, dayanıklı yapısı ve rahat kesimiyle profesyonel çalışma alanlarında konfor sağlar. Yanal cep detayları işlevsel kullanım sunarken reflektör şeritleri görünürlüğü artırır.",
    "shortDescription": "Rahat ve dayanıklı reflektörlü iş pantolonu."
  },
  {
    "id": 21,
    "name": "Reflektörlü Kot İş Pantolonu",
    "image": "https://i.hizliresim.com/l2wcx98.jpeg",
    "category": ["pantolon"],
    "description": "Yan cep detaylarıyla pratik kullanım sunan lacivert reflektörlü iş pantolonu, esnek yapısı sayesinde yoğun çalışma temposunda rahat hareket imkanı sağlar. Reflektör bantlar farklı ışık koşullarında görünürlüğü artırır.",
    "shortDescription": "Fonksiyonel ve yüksek görünürlüklü iş pantolonu."
  },
  {
    "id": 22,
    "name": "Çok Cepli İş Pantolonu",
    "image": "https://i.hizliresim.com/apppkqi.jpeg",
    "category": ["pantolon"],
    "description": "Çok cepli yapısıyla öne çıkan gri iş pantolonu, hafif ve esnek tasarımıyla gün boyu konfor sunar. Arka ve yan cepleri işlevselliği artırırken sade görünümü profesyonel kullanım sağlar.",
    "shortDescription": "Konforlu ve çok cepli gri iş pantolonu."
  },
  {
    "id": 23,
    "name": "Kargo Detaylı İş Pantolonu",
    "image": "https://i.hizliresim.com/6g5vnvz.jpeg",
    "category": ["pantolon"],
    "description": "Kargo cepleriyle geniş kullanım alanı sunan gri iş pantolonu, dayanıklı dokusu ve rahat kesimiyle uzun süreli çalışmalarda konfor sağlar. Modern görünümü sayesinde birçok iş koluna uygundur.",
    "shortDescription": "Dayanıklı ve fonksiyonel gri iş pantolonu."
  },
  {
    "id": 25,
    "name": "İş Pantolonu",
    "image": "https://i.hizliresim.com/63vwadf.jpeg",
    "category": ["pantolon"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 26,
    "name": "Baret",
    "image": ["https://r.resimlink.com/guDf1H.png",
      "https://r.resimlink.com/5fv81NJxiWs.png",
      "https://r.resimlink.com/C1kf2uM.png"
    ],
    "category": ["baret"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 27,
    "name": "Bisiklet Yaka Sweatshirt",
    "image": [
      "https://r.resimlink.com/tR402HGAs.png",
      "https://r.resimlink.com/cb7mP.png",
      "https://r.resimlink.com/BAwMFZ5.png",
      "https://r.resimlink.com/qA4rUY6.png",
      "https://r.resimlink.com/0Xo2MejFO8rn.png",
      "https://r.resimlink.com/uE8P_lgtH.png",
      "https://r.resimlink.com/AY3oZaz.png",
      "https://r.resimlink.com/bGEsvU.png",
    ],
    "category": ["sweatshirt"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 28,
    "name": "İkaz Yeleği",
    "image": [
      "https://r.resimlink.com/k6fiTX.png",
      "https://r.resimlink.com/ofX8DaS3Ow.png",
      "https://r.resimlink.com/xBqW_jT4A1.png",
    ],
    "category": ["ikaz yelekleri"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 29,
    "name": "İkaz Yeleği",
    "image": [
      "https://r.resimlink.com/2SLVe.png",
      "https://r.resimlink.com/sU6teM.png",
      "https://r.resimlink.com/krCjdz.png",
    ],
    "category": ["ikaz yelekleri"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 30,
    "name": "Polo Yaka T-Shirt",
    "image": [
      "https://r.resimlink.com/nEFSqI0U8Oe.png",
      "https://r.resimlink.com/3KXJsu.png",
      "https://r.resimlink.com/i5CORdm.png",
      "https://r.resimlink.com/1SVweXv.png",
      "https://r.resimlink.com/tick0m.png",
      "https://r.resimlink.com/zfUCGVu9-rq.png",
    ],
    "category": ["t-shirt"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 31,
    "name": "Kollu Önlük Takımı",
    "image": [
      "https://r.resimlink.com/T8Kq6JP1egSi.png",
      "https://r.resimlink.com/tS78Oo9c24.png",
    ],
    "category": ["aşçı grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 32,
    "name": "Önlük",
    "image": [
      "https://r.resimlink.com/UqQZfrn.png",
      "https://r.resimlink.com/GnLQBa9mvEhC.png",
      "https://r.resimlink.com/h4vemps0A83.png",
      "https://r.resimlink.com/GyeTC.png",
    ],
    "category": ["aşçı grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 33,
    "name": "Erkek Aşçı Önlüğü",
    "image": [
      "https://r.resimlink.com/basTM.png",
      "https://r.resimlink.com/UtR-Xev_.png"
    ],
    "category": ["aşçı grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 34,
    "name": "Kadın Aşçı Önlüğü",
    "image": [
      "https://r.resimlink.com/96Aj_Lk.png",
      "https://r.resimlink.com/e1mF_P.png"
    ],
    "category": ["aşçı grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 35,
    "name": "Bere",
    "image": [
      "https://r.resimlink.com/MpJgdtzh.png",
      "https://r.resimlink.com/qKIM2srmzfg.png",
      "https://r.resimlink.com/qRuZH.png"
    ],
    "category": ["bere"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 36,
    "name": "Güvenlik Montu",
    "image": [
      "https://r.resimlink.com/zRnJ1My.png",
    ],
    "category": ["güvenlik grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 37,
    "name": "Güvenlik Pantolonu",
    "image": [
      "https://r.resimlink.com/eI5aMHgv.png",
    ],
    "category": ["güvenlik grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 38,
    "name": "Güvenlik Pantolonu",
    "image": [
      "https://r.resimlink.com/eI5aMHgv.png",
    ],
    "category": ["güvenlik grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 39,
    "name": "Hemşire Önlüğü",
    "image": [
      "https://r.resimlink.com/uCJ72PgsQVb9.png",
      "https://r.resimlink.com/GQAMyoXx2p4.png",
      "https://r.resimlink.com/mCIKM.png",
      "https://r.resimlink.com/ovyprPF5iZ.png",
      "https://r.resimlink.com/o6lxs4I-.png",
    ],
    "category": ["sağlık personeli grubu"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  },
  {
    "id": 40,
    "name": "Kadın Personel Önlüğü",
    "image": [
      "https://r.resimlink.com/N-wtuK8S.png",
      "https://r.resimlink.com/W-PE0K3zV9B.png",
      "https://r.resimlink.com/2hxfCgz.png",
      "https://r.resimlink.com/afK6R.png",
      "https://r.resimlink.com/mhCNcyIDT19.png",
    ],
    "category": ["önlük"],
    "description": "Lacivert reflektör bantlı iş pantolonu, esnek yapısı ve dayanıklı dokusuyla farklı çalışma ortamlarında güvenilir bir kullanım sunar. Rahat kalıbı sayesinde gün boyu hareket özgürlüğü sağlar.",
    "shortDescription": "Konforlu ve dayanıklı reflektör bantlı iş pantolonu."
  }
];

export const products = rawProducts.map(normalizeProduct);
