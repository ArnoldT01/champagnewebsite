import './ParallelScrollingBelts.css';

const ParallelScrollingBelts = () => {
  return (
    <div className="centered-bottle-belts">
      <div className="scrolling-belt belt-top">
        <div className="belt-content">
          <span>Elevating Every Celebration with Timeless Classics</span>
          <span>Elevating Every Celebration with Timeless Classics</span>
        </div>
      </div>

      <div className="center-bottle">
        <img src="/wine-bottle.png" alt="Champagne Bottle" />
      </div>

      <div className="scrolling-belt belt-bottom">
        <div className="belt-content">
          <span>Elevating Every Celebration with Timeless Classics</span>
          <span>Elevating Every Celebration with Timeless Classics</span>
        </div>
      </div>
    </div>
  );
};

export default ParallelScrollingBelts;
