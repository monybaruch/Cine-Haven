import { ListGroup, ListGroupItem } from 'react-bootstrap';
const BlurayListDetails = ({ bluray }) => {
  return (
    <ListGroup className="list-group-flush">
      <ListGroupItem>Director: {bluray.director}</ListGroupItem>
      <ListGroupItem>Cast: {bluray.cast.join(', ')}</ListGroupItem>
      <ListGroupItem>Genre: {bluray.genre.join(', ')}</ListGroupItem>
      <ListGroupItem>Release Year: {bluray.releaseYear}</ListGroupItem>
      <ListGroupItem>Duration: {bluray.duration}</ListGroupItem>
      <ListGroupItem>Rating: {bluray.rating}</ListGroupItem>
      <ListGroupItem>Number Of Reviews: {bluray.numReviews}</ListGroupItem>
    </ListGroup>
  );
};
export default BlurayListDetails;
