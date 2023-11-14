import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function ErrorAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" >
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Please enter a valid city name
        </p>
      </Alert>
    );
  }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ErrorAlert;