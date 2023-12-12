export const InputField = (props) => {
  const handleChange = (event) => {
    if (props.onChange) {
      props.onChange(event); // Propagate the event to the parent component
    }
  };

  return (
    <div>
      <label htmlFor={props.name}>{props.name}</label>
      <input
        autoComplete="on"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange} // Trigger the onChange event
      />
    </div>
  );
};