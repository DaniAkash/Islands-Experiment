import { useEffect, useState } from "react";
import { Container, List } from "reactstrap";

export default function Location() {
  const [location, setLocation] = useState<[number, number]>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation([position.coords.latitude, position.coords.longitude]);
    });
  }, []);

  return (
    <div>
      <Container className="jumbotron">
        <h2>Current Location</h2>
        {location ? (
          <List>
            <li>latitude: {location[0]}</li>
            <li>longitude: {location[1]}</li>
          </List>
        ) : null}
      </Container>
    </div>
  );
}
