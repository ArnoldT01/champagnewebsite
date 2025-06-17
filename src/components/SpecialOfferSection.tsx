import ProductCard from './ProductCard';
import useMediaQuery from '../hooks/useMediaQuery';
import './SpecialOfferSection.css';

const SpecialOfferSection = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <section className='special-offer'>
      <div className='special-offer-first-div'>
        <h1 className='heading-text'>Special Offer</h1>
        <p className='content'>
          Experience Lorem Ipsum at an Exclusive Price, Indulge In The Timeless Elegance And Exquisite Flavours Of Our Champagne, Perfect For Celebrating Life's Moments.
        </p>
        <button>Learn More</button>
      </div>

      <div className='product-container'>
        <ProductCard
          product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890'
          }}
          size={isDesktop ? 'large' : 'small'}
        />
      </div>
    </section>
  );
};

export default SpecialOfferSection;
