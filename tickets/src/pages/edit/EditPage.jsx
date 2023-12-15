import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState, useCallback } from "react";
import { UserContext } from "../../components/context/userContext";
import style from "../register/register.module.scss";
import { InputField } from "../../components/input/InputField";

export const EditPage = () => {
  const { id } = useParams();
  const [eventData, setEventData] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    time: "",
    description: "",
    date: "",
    image: "",
  });
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const fetchEventData = useCallback(() => {
    if (user && user.accessToken) {
      let url = `http://localhost:8081/getOne/${id}`;
      let options = {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      };
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          setEventData(data); // Store the fetched data in state
          setFormData(data); // Populate the form data with the fetched data
          /* console.log("get one event:", data); */
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      navigate("/login");
    }
  }, [id, user, navigate]);

  const updateEvent = useCallback(
    (event) => {
      event.preventDefault();
      if (user && user.accessToken) {
        let url = `http://localhost:8081/update/${id}`;
        let options = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(formData),
        };
        fetch(url, options)
          .then((res) => res.json())
          .then((updatedData) => {
            console.log("Event updated:", updatedData);
            navigate("/booking");
          })
          .catch((error) => console.error("Error updating event:", error));
      } else {
        navigate("/login");
      }
    },
    [formData, id, navigate, user]
  );

  const handleInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormData({
      ...formData,
      [fieldName]: fieldValue,
    });
  };

  useEffect(() => {
    if (user) {
      fetchEventData();
    } else {
      navigate("/login");
    }
  }, [user, fetchEventData, navigate]);

  return (
    <section className={style.container}>
      <section className={style.neck}>
        <h1>Rediger</h1>
        <form onSubmit={updateEvent}>
          {/* Update InputFields with the fetched data */}
          <InputField
            name="title"
            type="text"
            value={formData.title}
            onChange={handleInputChange}
          />
          <InputField
            name="location"
            type="text"
            value={formData.location}
            onChange={handleInputChange}
          />
          <InputField
            name="time"
            type="time"
            value={formData.time}
            onChange={handleInputChange}
          />
          <InputField
            name="description"
            type="text"
            value={formData.description}
            onChange={handleInputChange}
          />
          <InputField
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
          />
          <InputField
            name="image"
            type="text"
            value={formData.image}
            onChange={handleInputChange}
          />
          <button type="submit">Update event</button>
        </form>
      </section>
    </section>
  );
};
