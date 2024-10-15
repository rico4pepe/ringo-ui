import React from 'react';
import { Card } from 'react-bootstrap';

function Wallet() {
    return (
        <Card>
        <Card.Body>
          <h5>Your wallet</h5>
          <Card bg="light" className="mt-3">
            <Card.Body>
              <h2>$109,795</h2>
              <img src="/api/placeholder/50/30" alt="Card" className="mt-2" />
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    );
}

export default Wallet;