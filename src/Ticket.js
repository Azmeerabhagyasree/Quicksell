import React from 'react';

function Ticket({ ticket }) {
  const getStatusIcon = () => {
    if (ticket.status === 'In progress') {
      return '1'; // Unicode character for right arrow
    } else if (ticket.status === 'Backlog') {
      return '2'; // Unicode character for checkmark
    }
    return '3';
  };

  const getPriorityIcon = () => {
    switch (ticket.priority) {
      case 4:
        return '****'; // Unicode character for a filled square
      case 3:
        return '***'; // Unicode characters for two filled squares
      case 2:
        return '**'; // Unicode characters for three filled squares
      case 1:
        return '*'; // Unicode character for red circle
      default:
        return null; // Unicode character for a dotted circle
    }
  };

  
  return (
    <div className="card">

      <p>{ticket.id}</p>
      <h4>{ticket.title}</h4>
      <p>{ticket.tag}</p>
    </div>
  );
}

export default Ticket;