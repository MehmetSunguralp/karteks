import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/productsData';
import './Products.css';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('kategori') || 'all';

  // Get unique categories
  const categories = useMemo(() => {
    const cats = ['all', ...new Set(products.map((p) => p.category))];
    return cats;
  }, []);

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return products;
    }
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ kategori: category });
    }
  };

  return (
    <div className='products-page'>
      <div className='products-container'>
        <motion.h1
          className='products-title'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ürünlerimiz
        </motion.h1>

        {/* Category Filters */}
        <motion.div
          className='category-filters'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`category-filter ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category === 'all' ? 'Tümü' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className='products-grid'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className='product-card'
                whileHover={{ y: -5 }}
              >
                <Link to={`/urunler/${product.id}`}>
                  <div className='product-image-wrapper'>
                    <img
                      src={product.image}
                      alt={product.name}
                      className='product-image'
                      loading='lazy'
                    />
                  </div>
                  <div className='product-info'>
                    <h3 className='product-name'>{product.name}</h3>
                    <p className='product-short-description'>{product.shortDescription}</p>
                    <div className='product-footer'>
                      <span className='product-category'>{product.category}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className='no-products'>
              <p>Bu kategoride ürün bulunamadı.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
