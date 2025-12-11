import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import "./CategoriesPreviewSection.css";
import { categoryData } from "../data/assetData";

const CategoriesPreviewSection = () => {
	return (
		<SectionWrapper className="products-preview-section">
			<div className="section-content">
				<motion.h2
					className="section-title"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Ürün Yelpazemiz
				</motion.h2>
				<div className="categories-grid">
					{categoryData.map((category, index) => {
						return (
							<motion.div key={category.name} className="category-card" whileHover={{ scale: 1.05, y: -5 }}>
								<Link to="/urunler">
									<div className="category-image-wrapper">
										<img src={category.image} alt={category.name} className="category-image" loading="lazy" />
									</div>
									<div className="category-info">
										<h3 className="category-name">{category.name.charAt(0).toUpperCase() + category.name.slice(1)}</h3>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</div>
				<motion.div
					className="section-cta"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Link to="/urunler" className="cta-link-button">
						Tüm Ürünleri Görüntüle
					</Link>
				</motion.div>
			</div>
		</SectionWrapper>
	);
};

export default CategoriesPreviewSection;
