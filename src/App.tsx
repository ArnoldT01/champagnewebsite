import './App.css'
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ScrollingBelts from './components/ScrollingBelts';

const App = () => {
  return (
    <>
      <Navbar/>
      <main>
        <section className='hero'>
          <h1 className='hero-text'>ESSENCE OF CHAMPAGNE</h1>

          <p className='hero-p'>Lorem Ipsum epitomizes champagne craftsmanship with excellence in vineyard practices, blending the finest grapes for complexity and balance. It's sensory journey features ripe fruits, toasted nuts, and a lingering finish, perfect for special occasions.</p>

          <ScrollingBelts/>

          <div className='products-container'>
            <ProductCard product={{
              image_path: '/wine-bottle.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>

            <ProductCard product={{
              image_path: '/wine-bottle.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>

            <ProductCard product={{
              image_path: '/wine-bottle.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>

            <ProductCard product={{
              image_path: '/wine-bottle.png',
              name: 'Champagne Vintage 2009',
              price: '$6,890' }}/>
          </div>

        </section>
      </main>
    </>
  )
}

export default App