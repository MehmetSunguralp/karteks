import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroImage } from "../data/assetData";
import LogoNoDesc from "../assets/Logo_No_Desc.svg";
import "./HeroSection.css";

const HeroSection = () => {
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

	return (
		<section ref={heroRef} className="hero-section">
			<motion.div className="hero-image-wrapper" style={{ opacity, scale }}>
				<img src={heroImage} alt="DMS Tekstil Hero" className="hero-image" loading="eager" />
				<div className="hero-overlay"></div>
			</motion.div>
			<motion.div
				className="hero-content"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3 }}
			>
				<img src={LogoNoDesc} alt="DMS Tekstil Logo" className="hero-logo" />
				<h1 className="hero-title">Profesyonel İş Kıyafeti Çözümleri</h1>
				<p className="hero-subtitle">Profesyonel çözümler, dayanıklı kumaşlar, müşteri memnuniyeti</p>
				<Link to="/urunler" className="hero-cta-button">
					Ürünlerimizi Keşfedin
				</Link>
			</motion.div>
		</section>
	);
};

export default HeroSection;
