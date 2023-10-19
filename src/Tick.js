import React from 'react';
import Ticket from './Ticket';

function Tick({ title, tickets}) {
  

  return (
    <div className="ticket-group">
      <h2>{title}</h2>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
}

export default Tick;