import React, { useState, useEffect } from 'react';

function NewArrivals() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/carts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);
  const {products} = data
  console.log(products);

  return (
    <>
      <div className='NewCarts'>
      <h1>Arrivals Page</h1>
      {data && (
        <ul>
          {data.map(item => {
            return(
                <div>
                <li key={item.id}>{item.userId}{item.date}</li>
               
                </div>
            )
          })}
        </ul>
      )}
      {products && products.map((product)=>{
        return(
            <div>
                <h2>{products.productId}</h2>
                <p>{products.quantity}</p>
            </div>
        )
      })}
      </div>
    </>
  );
}

export default NewArrivals;






