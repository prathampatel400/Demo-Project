import React from "react";
import "./Allproducts.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import Pagination from "./Pagination";
import { addItemsInCart } from "../../Slices/ApiSlice";
import StarRating from "./StarRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import DetailsCart from "./DetailsCart";

const Allproducts = () => {
  const [photos, setPhotos] = useState([]);
  const [Products, setProducts] = useState([]);
  // const [searchPage,setSearchPage] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();

  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    name: `Product ${index + 1}`,
  }));
  const itemsPerPage = 6;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = Products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // function search() {
  //   const searchInput = document.getElementById('searchInput');
  //   const searchTerm = searchInput.value.toLowerCase();
  //   const filteredData = photos.filter(item => item.toLowerCase().includes(searchTerm))
  //   setCurrentPage(filteredData, 1);
  // }
  // console.log(searchPage)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPhotos(data);
        setProducts(data);
      });
  }, []);

  const addData = (photos) => {
    console.log("dispatch called");
    dispatch(addItemsInCart(photos));
    console.log(photos);
    if (photos) {
      toast.success(
        photos.title,
        {position:toast.POSITION.TOP_LEFT
         }
      );
    }
  };

  const filterProduct = (category) => {
    const filterData = photos.filter((photo) =>
      photo.category.toLowerCase().includes(category.toLowerCase())
    );
    setProducts(filterData);
  };
  if (currentProducts.length === 0)
    return (
      <div className="loadingBox">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      <ToastContainer />
      <div className="Slider">
        <h2>Best Selling Products</h2>
        <Slider {...setting}>
          <div>
            <img
              src={img7}
              alt="image7"
              style={{ cursor: "pointer" }}
              onClick={() => filterProduct("jewelery")}
            />
            <h3>jewelery</h3>
          </div>
          <div>
            <img
              src={img8}
              alt="image8"
              style={{ cursor: "pointer" }}
              onClick={() => filterProduct("women's clothing")}
            />
            <h3>Women's clothing</h3>
          </div>
          <div>
            <img src={img3} alt="image3" style={{ cursor: "pointer" }} />
            <h3>Camera & handles</h3>
          </div>
          <div>
            <img src={img4} alt="image4" style={{ cursor: "pointer" }} />
            <h3>Apple Laptops</h3>
          </div>
          <div>
            <img
              src={img5}
              alt="image5"
              style={{ cursor: "pointer" }}
              onClick={() => filterProduct(`men's clothing`)}
            />
            <h3>Men's Clothes</h3>
          </div>
          <div>
            <img
              src={img6}
              alt="image6"
              style={{ cursor: "pointer" }}
              onClick={() => filterProduct("electronics")}
            />
            <h3>electronics</h3>
          </div>
        </Slider>
      </div>

      <div className="MyCart">
        {/* <DetailsCart onClick={currentProducts=currentProducts}/> */}
        {currentProducts.map((photos, star, index) => {
          index += 1;
          return (
            <div className="productCard">
              <Link to={`/productDetail/${photos.id}`}>
                {" "}
                <img src={photos.image} alt={photos.title} />
              </Link>
              <hr></hr>
              <span>{photos.title}</span>
              <h4>${photos.price}</h4>
              <h6>{photos.category}</h6>
              <h4>
                <StarRating currentProducts={currentProducts} />
                {/* {photos.rating.rate} */}
              </h4>
              <button type="submit" onClick={() => addData(photos)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="Pages">
        <h3>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
          {/*<p>
         <input type="text" id="searchInput" placeholder="Search page no." onChange={(e)=>{setSearchPage(e.target.value)}}/>
         <button onClick={() => setCurrentPage(parseInt(searchPage))}>Search</button>
          </p> */}
        </h3>
      </div>
    </>
  );
};

export default Allproducts;
