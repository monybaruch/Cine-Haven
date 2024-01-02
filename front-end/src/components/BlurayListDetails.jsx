import { ListGroup, ListGroupItem } from 'react-bootstrap';
const BlurayListDetails = ({ bluray }) => {
  return (
    <ListGroup className="list-group-flush">
      <ListGroupItem>Director: {bluray.director}</ListGroupItem>
      <ListGroupItem>Cast: {bluray.cast.join(', ')}</ListGroupItem>
      <ListGroupItem>Genre: {bluray.genre.join(', ')}</ListGroupItem>
      <ListGroupItem>Release Year: {bluray.releaseYear}</ListGroupItem>
      <ListGroupItem>Rating: {bluray.rating}</ListGroupItem>
      <ListGroupItem>Duration: {bluray.duration}</ListGroupItem>
      <ListGroupItem>
        Prices: ${bluray.price.purchase} (Purchase) ${bluray.price.rental.oneWeek} (1-Week Rental), <br />$
        {bluray.price.rental.twoWeek} (2-Weeks Rental),
        <br />${bluray.price.rental.oneMonth} (1-Month Rental)
      </ListGroupItem>
      <ListGroupItem>Stock: {bluray.stock}</ListGroupItem>
      <ListGroupItem>Viewers Rating: {bluray.viewrsRating} / 10</ListGroupItem>
    </ListGroup>
  );
};
export default BlurayListDetails;
