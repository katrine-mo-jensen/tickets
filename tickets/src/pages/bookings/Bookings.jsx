import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/userContext";
import { useNavigate, Link } from "react-router-dom";
import style from "../bookings/booking.module.scss";

//~~!!Edit button doesnt work yet!!~~

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
        /* console.log("booking event:", data); */
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
  const handleDeleteAll = () => {
    let url = `http://localhost:8081/deleteAll`;
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
    <section className={style.back}>
      <section className={style.neck}>
        <h1>Mine bookings</h1>

        {Array.isArray(eventData) &&
          eventData.map((item, index) => (
            <article key={index}>
              <p>{item.title}</p>
              <p>Sted: {item.location}</p>
              <p>
                Tid: {item.time} - {item.date}
              </p>
              <div>
                <button
                  className={style.remove}
                  onClick={() => handleDelete(item.id)}
                >
                  Fjern
                </button>
                <button className={style.edit}>
                  <Link className={style.reg} to={`/edit/${item.id}`}>
                    Rediger
                  </Link>
                </button>
              </div>
            </article>
          ))}
        <button className={style.remove} onClick={() => handleDeleteAll()}>
          Fjern alle
        </button>
        <button className={style.register}>
          <Link className={style.reg} to="/register">
            Opret
          </Link>
        </button>
      </section>
    </section>
  );
};
