import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "../data/productsData";
import "./Products.css";

const Products = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const rawCategory = searchParams.get("kategori");

	// Get unique categories
	const categories = useMemo(() => {
		const allCategories = products.flatMap((p) => p.category);
		const cats = ["all", ...new Set(allCategories)];
		return cats;
	}, []);

	// Validate and normalize selected category
	const selectedCategory = useMemo(() => {
		if (!rawCategory || rawCategory === "all") {
			return "all";
		}
		// Decode URL-encoded category and check if it exists in categories
		const decodedCategory = decodeURIComponent(rawCategory);
		return categories.includes(decodedCategory) ? decodedCategory : "all";
	}, [rawCategory, categories]);

	// Filter products based on selected category
	const filteredProducts = useMemo(() => {
		if (selectedCategory === "all") {
			return products;
		}
		return products.filter((p) => p.category.includes(selectedCategory));
	}, [selectedCategory]);

	const handleCategoryChange = (category) => {
		if (category === "all") {
			setSearchParams({});
		} else {
			setSearchParams({ kategori: category });
		}
	};

	return (
		<div className="products-page">
			<div className="products-container">
				<motion.h1
					className="products-title"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Ürünlerimiz
				</motion.h1>

				{/* Category Filters */}
				<motion.div
					className="category-filters"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{categories.map((category) => (
						<button
							key={category}
							className={`category-filter ${selectedCategory === category ? "active" : ""}`}
							onClick={() => handleCategoryChange(category)}
						>
							{category === "all" ? "Tümü" : category.charAt(0).toLocaleUpperCase("tr-TR") + category.slice(1)}
						</button>
					))}
				</motion.div>

				{/* Products Grid */}
				<motion.div
					className="products-grid"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					{filteredProducts.length > 0 ? (
						filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} />)
					) : (
						<div className="no-products">
							<p>Bu kategoride ürün bulunamadı.</p>
						</div>
					)}
				</motion.div>
			</div>
		</div>
	);
};

const ProductCard = ({ product }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const images = product.images || [];
	const hasMultipleImages = images.length > 1;

	const handlePrevImage = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (currentImageIndex > 0) {
			setCurrentImageIndex(currentImageIndex - 1);
		}
	};

	const handleNextImage = (e) => {
		e.preventDefault();
		e.stopPropagation();
		if (currentImageIndex < images.length - 1) {
			setCurrentImageIndex(currentImageIndex + 1);
		}
	};

	return (
		<motion.div className="product-card" whileHover={{ y: -5 }}>
			<Link to={`/urunler/${product.id}`}>
				<div className="product-image-wrapper">
					<div className="product-image-slider">
						<motion.div
							className="product-image-container"
							animate={{ x: `-${currentImageIndex * 100}%` }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
						>
							{images.map((image, index) => (
								<img
									key={index}
									src={image}
									alt={`${product.name} - ${index + 1}`}
									className="product-image"
									loading={index === 0 ? "lazy" : "eager"}
								/>
							))}
						</motion.div>
					</div>
					{hasMultipleImages && (
						<>
							{currentImageIndex > 0 && (
								<button className="product-image-nav product-image-nav-left" onClick={handlePrevImage} aria-label="Önceki resim">
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M15 18L9 12L15 6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							)}
							{currentImageIndex < images.length - 1 && (
								<button
									className="product-image-nav product-image-nav-right"
									onClick={handleNextImage}
									aria-label="Sonraki resim"
								>
									<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path
											d="M9 18L15 12L9 6"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</button>
							)}
							<div className="product-image-indicator">
								{currentImageIndex + 1} / {images.length}
							</div>
						</>
					)}
				</div>
				<div className="product-info">
					<h3 className="product-name">{product.name}</h3>
					<p className="product-short-description">{product.shortDescription}</p>
					<div className="product-footer">
						<span className="product-category">{product.category.join(", ")}</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default Products;
