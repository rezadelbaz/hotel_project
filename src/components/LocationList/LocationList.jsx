import React from "react";
import useFetch from "../Hooks/useFetch";

function LocationList() {
  const { data, isLoading } = useFetch("http://localhost:5000/hotels");

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="nearbyLocation">
      <h2>Nearby Location</h2>
      <div className="locationList">
        {data.map((item) => {
          return (
            <div className="locationItem" key={item.id}>
              <img
                src={`https://picsum.photos/300/200?random=${item.id}`}
                alt={item.name}
              />
              <div className="locationItemDesc">
                <p className="location">{item.smart_location}</p>
                <p className="name">{item.name}</p>
                <p className="price">
                  $&nbsp;{item.price}&nbsp;
                  <span>night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LocationList;
