import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/product.model.js";

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(
      (image) => image !== undefined
    );
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {
          resource_type: "auto",
        });
        return result.secure_url;
      })
    );
    console.log(
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller
    );
    console.log(imagesUrl);
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now(),
    };
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product added" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Failed to add product" });
  }
};

const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ success: false, message: error.message || "Failed to fetch products" });
  }
};

const removeProduct = async (req, res) => {
    try { 
        await productModel.findByIdAndDelete(req.params.id);
        res.json({success: true, message: "Product removed"});
    } catch (error) {
        console.log(error)
        res.json({success: false, message: "Failed to remove product"});
    }
};

//single product info
const singleProduct = async (req, res) => {
  try {
    const {id} = req.body
    const product = await productModel.findById(id)
    res.json({success: true, product})
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addProduct, listProducts, removeProduct, singleProduct };
