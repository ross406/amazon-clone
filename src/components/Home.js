import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          className='home__image'
          src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/3000x1200_Hero-Tall_np._CB407694131_.jpg'
          alt=''
        />
        <div className='home__row'>
          <Product
            id='12321341'
            title='The Lean Startup: How Constant Innovation Creates Radically Successful business Paperback'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
            rating={4}
          />
          <Product
            id='49538094'
            title='Kenwood Kmix Stand Mixer for Backing, Stylish Kitchen Mixer with K-beater, Dough hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._SL1500_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='4903850'
            title='LG 29 inch Ultrawide Full HD IPS Gaming, 75Hz Refresh Rate'
            price={199.99}
            rating={3}
            image='https://images-na.ssl-images-amazon.com/images/I/81t1tAzEgGL._SX466_.jpg'
          />
          <Product
            id='23445930'
            title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
            price={98.99}
            rating={5}
            image='https://www.mytechnobro.com/wp-content/uploads/2020/04/echo.png'
          />
          <Product
            id='3254354345'
            title='New Apple iPad Pro (12.p-inch, Wi-Fi, 1280GB) - Silver (4th Generation)'
            price={598.99}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/81oFAZ9N6bL._SL1500_.jpg'
          />
        </div>
        <div className='home__row'>
          <Product
            id='90829332'
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Duel WQHD 5120 * 1440"
            price={1094.98}
            rating={4}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
