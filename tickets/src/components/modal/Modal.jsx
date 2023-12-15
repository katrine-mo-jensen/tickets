import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../components/context/userContext";
import style from "../modal/modal.module.scss";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Modal = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState([]);

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchEventData = () => {
    let url = `http://localhost:8081/getOne/${props.id}`;
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
    }
  }, [user, navigate]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return (
      <button className={style.toggle} onClick={openModal}>
        Læs mere
      </button>
    );
  }
console.log(eventData)
  return (
    <div>
      <p>{eventData.description}</p>
      <div className="actions">
        <button className={style.toggle} onClick={closeModal}>
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};
