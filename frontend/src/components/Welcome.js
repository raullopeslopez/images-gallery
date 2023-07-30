import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';

const Welcome = () => (
  <Jumbotron>
    <h1>Images Gallery</h1>
    <p>
      This a simple application that retrieves photos using Unsplash API. Search
      anything you want and see what happens
    </p>
    <p>
      <Button variant="primary" href="https://unsplash.com" target={'_blank'}>
        Learn more
      </Button>
    </p>
  </Jumbotron>
);

export default Welcome;
