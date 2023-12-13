import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/userContext";
import { useNavigate } from "react-router-dom";
import style from "../overview/overview.module.scss";
import { Modal } from "../../components/modal/Modal";

//~~!!Edit button doesnt work yet!!~~

export const OverviewPage = () => {
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
        /* console.log("overview event:", data); */
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (user) {
      fetchEventData();
    } else {
      navigate("/login");
      alert("Du skal være logget ind")
    }
  }, [user, navigate]);

  return (
    <section className={style.container}>
      <h1>Min oversigt</h1>
      <section>
        {Array.isArray(eventData) &&
          eventData.map((item, index) => (
            <article key={index}>
              <img src={item.image} alt={item.title} />
              <p>{item.title}</p>
              <p>Sted: {item.location}</p>
              <p>
                Tid: {item.time} {item.date}
              </p>
              <Modal />
            </article>
          ))}
      </section>
    </section>
  );
};
