import React from "react";
import  Card from "react-bootstrap/Card";

const cards = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
// ===================== map code if I can get cards working ==========
// function App() {
//     return( <div>
//       {
//         alertData.map(function(currentObject) {
//           return <Alert key={currentObject.id} type={currentObject.type}>{currentObject.text}</Alert>
//         })
//       }
//     </div>
//     )
//   }

export default cards;