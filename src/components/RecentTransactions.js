import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function RecentTransactions (){
    return (
        <Card className="mb-4">
        <Card.Body>
          <h2>Hey Jordan 👋</h2>
          <p>Here are your recent transactions:</p>
          <ListGroup variant="flush">
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/30/30" alt="Mailchimp" className="me-2 rounded-circle" />
                Mailchimp
              </div>
              <span>-$350</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/30/30" alt="Atlassian" className="me-2 rounded-circle" />
                Atlassian
              </div>
              <span>-$1,469</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-center">
              <div>
                <img src="/api/placeholder/30/30" alt="DigitalOcean" className="me-2 rounded-circle" />
                DigitalOcean
              </div>
              <span>-$150</span>
            </ListGroup.Item>
          </ListGroup>
          <a href="#" className="mt-3 d-inline-block">VIEW ALL</a>
        </Card.Body>
      </Card>
    );
}

export default RecentTransactions;