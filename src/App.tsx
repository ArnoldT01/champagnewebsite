import './App.css'
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <section className='hero'>
          <h1 className='hero-text'>ESSENCE OF CHAMPAGNE</h1>

          <p className='hero-p'>Lorem Ipsum epitomizes champagne craftsmanship with excellence in vineyard practices, blending the finest grapes for complexity and balance. It's sensory journey features ripe fruits, toasted nuts, and a lingering finish, perfect for special occasions.</p>

          <div className="scrolling-belt-container">
            <div className="scrolling-belt">
              <span>Lorem Ipsum's · Lorem Ipsum's · Lorem Ipsum's · Lorem Ipsum's · </span>
              <span>Lorem Ipsum's · Lorem Ipsum's · Lorem Ipsum's · Lorem Ipsum's · </span>
            </div>
          </div>

        </section>
      </main>
    </>
  )
}

export default App
