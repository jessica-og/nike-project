import  { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useAuthRedirect from './../hooks/useAuthRedirect';
import './styles/addProduct.css';
import { addProduct, uploadImageToCloudinary} from '../firebase/utils';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';


const AddProduct = () => {
  useAuthRedirect();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    sellerRank: "",
    description: "",
    image: null,
  });

  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null); 

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = "Product name is required.";
    if (!formData.price || parseFloat(formData.price) <= 0) validationErrors.price = "Price must be a positive number.";
    if (!formData.sellerRank.trim()) validationErrors.sellerRank = "Seller rank is required.";
    if (!formData.description.trim()) validationErrors.description = "Description is required.";
    if (!formData.image) validationErrors.image = "Product image is required.";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({ ...prevData, image: e.target.files[0] }));
    setErrors((prevErrors) => ({ ...prevErrors, image: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const imageUrl = await uploadImageToCloudinary(formData.image);

      const productData = {
        name: formData.name,
        price: parseFloat(formData.price),
        sellerRank: formData.sellerRank,
        description: formData.description,
        imageUrl,
        createdAt: new Date(),
      };

      await addProduct(productData);

      alert("Product added successfully!");
      setFormData({ name: "", price: "", sellerRank: "", description: "", image: null });
      setErrors({});
      if (fileInputRef.current) fileInputRef.current.value = ""; 
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="add-product-container">
      <Link to='/home' className='back-link'>
      <IoIosArrowBack /></Link>
      <h1 className="title">Add New Product</h1>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($)</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Enter product price"
          />
          {errors.price && <p className="error">{errors.price}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="seller-rank">Seller Rank</label>
          <input
            type="text"
            id="seller-rank"
            name="sellerRank"
            value={formData.sellerRank}
            onChange={handleChange}
            placeholder="Seller Rank"
          />
          {errors.sellerRank && <p className="error">{errors.sellerRank}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter product description"
            rows="4"
          ></textarea>
          {errors.description && <p className="error">{errors.description}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="image">Product Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef} 
          />
          {errors.image && <p className="error">{errors.image}</p>}
        </div>

        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

AddProduct.propTypes = {
  uploadImageToCloudinary: PropTypes.func,
  addProduct: PropTypes.func,
};

export default AddProduct;