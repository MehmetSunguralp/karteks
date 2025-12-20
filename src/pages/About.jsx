import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import "./About.css";

const About = () => {
	return (
		<div className="about-page">
			<SectionWrapper>
				<div className="section-content">
					<motion.h1
						className="page-title"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						Hakkımızda
					</motion.h1>

					<motion.div
						className="about-content"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className="about-text">
							<p>
								DMS İş Kıyafetleri ve İş Elbiseleri, çalışma hayatına yönelik tekstil çözümleri alanında uzun yıllara dayanan
								sektör tecrübesiyle faaliyet göstermektedir. Firmamız, üretimden satışa uzanan yapısıyla; farklı sektörlerin
								ihtiyaçlarına uygun, fonksiyonel ve konforlu ürünler sunmayı amaçlamaktadır. Kurulduğumuz günden bu yana, çalışma
								ortamlarında kullanılan kıyafetlerin yalnızca bir gereklilik değil, çalışma konforunu, güvenliği ve kurumsal
								duruşu destekleyen önemli bir unsur olduğuna inanıyoruz. Bu anlayış doğrultusunda üretim süreçlerimizde tam
								otomatik tekstil makineleri ve güncel üretim teknolojileri kullanılmakta, üretim altyapımıza yönelik yatırımlar
								düzenli olarak sürdürülmektedir.
							</p>
							<p>
								DMS, müşteri taleplerine bağlı olarak; markaya özel ürün ve model tasarımları, özel kalıp ve ölçü çalışmaları,
								fason üretim ve toplu siparişler gibi farklı üretim modelleri sunabilen esnek bir yapıya sahiptir. Bu sayede,
								farklı sektörlerden gelen taleplere uygun çözümler geliştirilebilmektedir.
							</p>
							<p>
								Üretim anlayışımızın temelinde kalite, güvenilirlik ve zamanında teslimat yer almaktadır. Ürünlerimiz; uzun süreli
								kullanım, dayanıklılık ve hareket özgürlüğü dikkate alınarak seçilen kumaşlar ve ergonomik kesimler ile
								hazırlanmaktadır. Üretimin her aşamasında uygulanan kontrol süreçleriyle belirlenen kalite standartlarının
								sürekliliği sağlanmaktadır. Bugün DMS İş Kıyafetleri ve İş Elbiseleri, sahada ve kapalı alanlarda aktif olarak
								çalışan personelin ihtiyaçlarını merkeze alan yaklaşımıyla; güvenilir, konforlu ve sürdürülebilir tekstil
								çözümleri sunmaya devam etmektedir.
							</p>
						</div>

						<div className="about-values">
							<h2>Değerlerimiz</h2>
							<div className="values-grid">
								{[
									{
										title: "Kalite",
										description: "En yüksek kalite standartlarında ürünler sunuyoruz.",
										icon: "⭐",
									},
									{
										title: "Güvenilirlik",
										description: "Müşterilerimizle uzun vadeli güven ilişkisi kuruyoruz.",
										icon: "🤝",
									},
									{
										title: "İnovasyon",
										description: "Sürekli gelişen teknoloji ve trendleri takip ediyoruz.",
										icon: "💡",
									},
									{
										title: "Müşteri Odaklılık",
										description: "Müşteri ihtiyaçlarını anlamak ve karşılamak önceliğimizdir.",
										icon: "🎯",
									},
								].map((value, index) => (
									<motion.div
										key={value.title}
										className="value-card"
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.2, delay: index * 0.05 }}
									>
										<div className="value-icon">{value.icon}</div>
										<h3 className="value-title">{value.title}</h3>
										<p className="value-description">{value.description}</p>
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</SectionWrapper>
		</div>
	);
};

export default About;
