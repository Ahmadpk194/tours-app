import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getUser = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://course-api.com/react-tours-project");
      const tours = await res.json();
      setTours(tours);
      console.log(tours);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  return (
    <div className="main">
      {!isLoading && <Tours tours={tours} removeTour={removeTour} />}
      {isLoading && <Loading />}
    </div>
  );
}

export default Dashboard;
