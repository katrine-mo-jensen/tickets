import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";

export const BookingPage = () => {
  const [eventData, setEventData] = useState([]);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchEventData = () => {
    let url = "http://localhost:8081/getAll";
    let options = {
      headers: { Authorization: `Bearer ${user.accessToken}` },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setEventData(data);
        console.log("Data event:", data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (user) {
      fetchEventData();
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleDelete = (_id) => {
    let url = `http://localhost:8081/delete/${_id}`;
    let options = {
      method: "DELETE",
      headers: { Authorization: `Bearer ${user.accessToken}` },
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) =>
        data.message ? fetchEventData() : alert("Der skete en fejl")
      )
      .catch((error) => console.error("Error deleting data:", error));
  };

  return (
    <section>
      <section>
        <h1>Mine bookings</h1>

        {Array.isArray(eventData) &&
          eventData.map((item, index) => (
            <article key={index}>
              <p>{item.title}</p>
              <p>Sted: {item.location}</p>
              <p>Tid: {item.time}</p>
              <button onClick={() => handleDelete(item.id)}>Fjern</button>
              <button>Rediger</button>
            </article>
          ))}
      </section>
    </section>
  );
};
