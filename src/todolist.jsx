import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./todolist.css";

function TodoList() {
  const [Todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodo((prevtodo) => [...prevtodo, newTodo]);
      setNewTodo("");
    }
  };

  const delTodo = (todoIndex) => {
    const filteredTodo = Todo.filter((todo1, index) => index !== todoIndex);
    setTodo(filteredTodo);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="con">
        <h1>Do your task today!</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginBottom: "10px",
          }}
        >
          <Button variant="primary" onClick={handleShow}>
            Insert Todo Task
          </Button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title style={{ color: "black" }}>
              Insert Todo Task
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {" "}
            <input
              className="form-control"
              type="text"
              placeholder="Add your Todo task today !"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <br />
            <Button variant="primary" onClick={addTodo}>
              Insert Task
            </Button>
          </Modal.Body>
        </Modal>

        {/* <button onClick={addTodo}> Insert</button> */}

        <ul className="list-group">
          {Todo.map((todo, index) => (
            <>
              <div
                key={index}
                style={{
                  display: "flex",

                  justifyContent: "space-between",
                }}
              >
                <li
                  style={{
                    width: "100%",
                    textAlign: "start",
                    listStyle: "none",
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  Task {index + 1}: {todo}
                </li>
                <button
                  className="btn btn-success"
                  onClick={() => delTodo(index)}
                >
                  Delete
                </button>
              </div>
              <br />
            </>
          ))}
          <br />
        </ul>
      </div>
    </>
  );
}

export default TodoList;
