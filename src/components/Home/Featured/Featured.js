import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import top1 from '../../../images/top/top1.jpg'
import top2 from '../../../images/top/top2.jpg'
import top3 from '../../../images/top/top3.jpg'
const Featured = () => {
  return (
    <div>
      <CardGroup className="mt-4">
        <Card>
          <Card.Img variant="top"  src={top1} />
          <Card.Body>
            <Card.Title>Top-1</Card.Title>
            <Card.Text>
              This is our top selling product!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top"  src={top2} />
          <Card.Body>
            <Card.Title>Top-2</Card.Title>
            <Card.Text>
            This is our top selling product!
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={top3} />
          <Card.Body>
            <Card.Title>Top-3</Card.Title>
            <Card.Text>
            This is our top selling product!
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Featured;
