import style from "./inputField.module.scss";

export const InputField = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <div className={style.drip}>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        autoComplete="on"
        name={props.name}
        type={props.type}
        value={props.value} // Add the value prop to bind to the data
        onChange={handleChange}
      />
    </div>
  );
};
