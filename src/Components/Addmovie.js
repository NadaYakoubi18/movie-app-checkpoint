import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function AddMovie({ movies, setMovies }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState(0);
  const handleAdd = () => {
    setMovies([
      ...movies,
      { name, description, image, date, rating, type, id: Math.random() },
    ]);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adding a movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please add your favorite movie here :)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <label>name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>description</label>
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <label>image </label>
            <input
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <label>date</label>
            <input
              type="text"
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
            <label>rating</label>
            <input
              type="number"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
            <label>type</label>
            <input
              type="text"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Noted! Thank you
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;
