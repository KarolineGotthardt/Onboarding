import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const btnText = "Delete";
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDelete() {
    console.log("clicked: " + props.text);
    setIsModalOpen(true);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          {btnText}
        </button>
      </div>
      {isModalOpen && <Modal />}
      {isModalOpen && <Backdrop />}
    </div>
  );
}

/*
Make exportable: https://stackoverflow.com/questions/21117160/what-is-export-default-in-javascript
 */
export default Todo;
