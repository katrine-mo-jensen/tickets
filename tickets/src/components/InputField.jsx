/**
 * @param {*} props
 * @param props.name - the name of the input
 * @param props.type - type of input
 * @param props.placeholder - placeholder text of input
 * @returns a label and an input field
 */
export const InputField = (props) => {
    return (
      <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
        <label htmlFor={props.name}>{props.name}</label>
        <input
          autoComplete="on"
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </div>
    );
  };