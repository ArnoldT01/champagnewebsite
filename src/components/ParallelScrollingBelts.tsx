import './ParallelScrollingBelts.css';

const ParallelScrollingBelts = () => {
  return (
    <div className="centered-bottle-belts">
      <div className="parallel-scrolling-belt belt-top">
        <div className="parallel-belt-content">
          <span>Elevating Every Celebration with Timeless Classics</span>
          <span>Elevating Every Celebration with Timeless Classics</span>
        </div>
      </div>

      <div className="center-bottle">
        <img src="/bottle1.png" alt="Champagne Bottle" />
      </div>

      <div className="parallel-scrolling-belt belt-bottom">
        <div className="parallel-belt-content">
          <span>Elevating Every Celebration with Timeless Classics</span>
          <span>Elevating Every Celebration with Timeless Classics</span>
        </div>
      </div>
    </div>
  );
};

export default ParallelScrollingBelts;

// take in the path of the image and alt in the calling site of this component