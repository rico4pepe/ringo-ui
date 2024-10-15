import React from 'react';
import { Nav } from 'react-bootstrap';
import { Home, RefreshCcw, CreditCard, User, Plus } from 'lucide-react';
import GoalCard from './GoalCard';

function Sidebar() {
  return (
    <>
    <div className="d-flex align-items-center mb-4">
    <Plus className="me-2" />
    <h5 className="mb-0">universe</h5>
  </div>

    <Nav className="flex-column">
    <Nav.Link href="#home"><Home className="me-2" /> Home</Nav.Link>
    <Nav.Link href="#transactions"><RefreshCcw className="me-2" /> Transactions</Nav.Link>
    <Nav.Link href="#payments"><CreditCard className="me-2" /> Payments</Nav.Link>
    <Nav.Link href="#accounts"><User className="me-2" /> Accounts</Nav.Link>
  </Nav>

  {/* Goal Card Section with space */}
  <div className="my-4"> {/* Space above GoalCard */}
        <GoalCard />
      </div>

      <footer className="mt-auto text-center">
        <small>&copy; universe Ltd 2022</small>
      </footer>

  </>
  );
}

export default Sidebar;
