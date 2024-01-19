import { ListGroup, ListGroupItem } from 'react-bootstrap';
const BlurayListDetails = ({ bluray }) => {
  return (
    <ListGroup className="list-group-flush">
      <ListGroupItem>Director: {bluray.director}</ListGroupItem>
      <ListGroupItem>Cast: {bluray.cast.join(', ')}</ListGroupItem>
      <ListGroupItem>Genre: {bluray.genre.join(', ')}</ListGroupItem>
      <ListGroupItem>Release Year: {bluray.releaseYear}</ListGroupItem>
      <ListGroupItem>Duration: {bluray.duration}</ListGroupItem>
      <ListGroupItem>Description: {bluray.description}</ListGroupItem>
    </ListGroup>
  );
};
export default BlurayListDetails;
