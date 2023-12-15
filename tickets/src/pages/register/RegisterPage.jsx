import React, { useState, useContext, useEffect } from "react";
import { InputField } from "../../components/input/InputField";
import { UserContext } from "../../components/context/userContext";
import style from "./register.module.scss";
import { useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    time: "",
    description: "",
    date: "",
    image: "",
  });

  const { user, saveUserData } = useContext(UserContext);
  const navigate = useNavigate();

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
      handleRegistration();
    } else {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleRegistration = () => {
    const { title, location, time, description, date, image } = formData;

    if (!title || !location || !time || !date) {
      setErrorMsg("Du skal udfylde alle påkrævede felter.");
    } else {
      setErrorMsg("");
      const url = `http://localhost:8081/create`;
      const body = new URLSearchParams();
      body.append("title", title);
      body.append("date", date);
      body.append("location", location);
      body.append("time", time);
      body.append("image", image);
      body.append("description", description);

      let options = {
        body: body,
        method: "POST",
        headers: { Authorization: `Bearer ${user.accessToken}` },
      };

      fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
          console.log("Data from oprettelse:", data);
        });
    }
  };

  return (
    <section className={style.container}>
      <section className={style.neck}>
        <h1>Opret ny</h1>
        <form onSubmit={handleRegistration}>
          <InputField name="title" type="text" onChange={handleInputChange} />
          <InputField
            name="location"
            type="text"
            onChange={handleInputChange}
          />
          <InputField name="time" type="time" onChange={handleInputChange} />
          <InputField
            name="description"
            type="text"
            onChange={handleInputChange}
          />
          <InputField name="date" type="date" onChange={handleInputChange} />
          <InputField
            name="image"
            type="text"
            onChange={handleInputChange}
            placeholder="Enter image URL"
          />
          <button type="submit">Opret</button>
        </form>
        {errorMsg && <p>{errorMsg}</p>}
      </section>
    </section>
  );
};
