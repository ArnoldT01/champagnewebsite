import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ScrollingBelts from './components/ScrollingBelts';
import SpecialOfferSection from './components/SpecialOfferSection';
import ParallelScrollingBelts from './components/ParallelScrollingBelts';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <section className='hero'>
          <h1 className='heading-text'>Essence Of Champagne</h1>

          <p className='hero-p content'>Lorem Ipsum epitomizes champagne craftsmanship with excellence in vineyard practices, blending the finest grapes for complexity and balance. It's sensory journey features ripe fruits, toasted nuts, and a lingering finish, perfect for special occasions.</p>

          <ScrollingBelts/>

        </section>

        <section className='products-container'>
          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>
        </section>

        <SpecialOfferSection/>

        <section className='products-container'>
          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>

          <ProductCard product={{
            image_path: './bottle1.png',
            name: 'Champagne Vintage 2009',
            price: '$6,890' }}/>
        </section>

        <ParallelScrollingBelts/>

        <section className='discover'>
          <p className='content'>Discover An Exclusive Offer On Lorem Ipsum Champagne, Crafted With Unparalleled Expertise And Renowned For Its Exquisite Taste</p>
          <button>Learn More</button>
        </section>

        <section className='limited-editions'>
          <h1 className='heading-text'>Limited Editions</h1>
          <div className='products-container'>
            <ProductCard product={{
              image_path: './bottle1.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>
            <ProductCard product={{
              image_path: './bottle1.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>
            <ProductCard product={{
              image_path: './bottle1.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>
            <ProductCard product={{
              image_path: './bottle1.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>
          </div>
        </section>

        <Footer/>

      </main>
    </>
  )
}

export default App