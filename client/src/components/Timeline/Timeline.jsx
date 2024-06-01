import "./Timeline.css";
// import { TimelineData } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import { useEffect, useState } from "react";
import '../../App.css'

const Timeline = () => {
  const [TimelineData, setTimelineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/dashboard/timeline"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch Timeline data");
        }
        const fetchedData = await response.json();

        setTimelineData(fetchedData);
        console.log(fetchedData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="subgrid-two-item grid-one-item grid-common grid-c7">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Timeline</h3>
      </div>
      <hr className="dashbaord-line" />
      <div className="grid-c3-content">
        <ul className="data-list">
          {TimelineData <= 0 ? (
            <h3>No Timeline Data</h3>
          ) : (
            TimelineData.map((item, index) => (
              <div className="data-list-item" key={index}>
                <h3>{item.endDate}</h3>
                <li>
                  <span>
                    <img src={iconsImgs.rightArrow} width={15} />
                  </span>
                  {item.fileName}
                </li>
                <p>{item.scopeName}</p>
              </div>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
