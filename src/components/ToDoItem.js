import React from "react";

function ToDoItem(props) {
  const styles = {
    textAlign: "center",
    fontFamily: "Patrick Hand",
    fontSize: 40,
    color: "#66ffcc",
    margin: 50
  };
  return (
    <div style={styles}>
      <label for={props.obj.id} style={{ paddingRight: 0 }}>
        {" "}
        {props.obj.name}
      </label>
      <input type="checkbox" id={props.obj.id} name={props.obj.name} />
    </div>
  );
}
export default ToDoItem;
