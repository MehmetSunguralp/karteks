import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "../data/productsData";
import "./ProductDetail.css";

const ProductDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const product = products.find((p) => p.id === Number.parseInt(id, 10));
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);

	const images = product?.images || [];
	const hasMultipleImages = images.length > 1;

	if (!product) {
		return (
			<div className="product-detail-page">
				<div className="product-not-found">
					<h2>Ürün bulunamadı</h2>
					<Link to="/urunler" className="back-button">
						Ürünlere Dön
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="product-detail-page">
			<div className="product-detail-container">
				<motion.button
					className="back-button"
					onClick={() => navigate(-1)}
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					← Geri Dön
				</motion.button>

				<div className="product-detail-content">
					<motion.div
						className="product-image-section"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						<img src={images[selectedImageIndex]} alt={product.name} className="product-detail-image" loading="lazy" />
						{hasMultipleImages && (
							<div className="product-variant-images">
								{images.map((image, index) => (
									<motion.button
										key={`${product.id}-variant-${index}-${image}`}
										className={`variant-image-card ${selectedImageIndex === index ? "active" : ""}`}
										onClick={() => setSelectedImageIndex(index)}
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
										aria-label={`Varyant ${index + 1}`}
									>
										<img src={image} alt={`${product.name} - Varyant ${index + 1}`} />
									</motion.button>
								))}
							</div>
						)}
					</motion.div>

					<motion.div
						className="product-info-section"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h1 className="product-detail-name">{product.name}</h1>
						<p className="product-detail-description">{product.description}</p>

						<div className="product-price-section">
							<span className="product-detail-category">{product.category.join(", ")}</span>
						</div>

						<div className="product-actions">
							<button className="contact-button">İletişime Geçin</button>
							<Link to="/urunler" className="view-all-button">
								Tüm Ürünleri Gör
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
