import { Card, Button } from "react-bootstrap";

function LegalCard() {
  return (
    <Card className="bg-success text-white p-0">
      <Card.Body>
        <Card.Text as="p">
          This project is inspired by my job as a legal program manager. I built
          the Legal-Inquiry-Submission app to allow clients to submit legal
          inquiries to their lawyers easily and securely from anywhere. This
          platform is designed to streamline the legal process and make it more
          convenient for clients to communicate with their lawyers.{" "}
          <Button variant="outline-warning">
            <Card.Link
              href="https://legal-inquiry.herokuapp.com/"
              target="_blank"
            >
              Try it
            </Card.Link>
          </Button>
        </Card.Text>
        <Card.Img variant="top" src="../legalSub.jpg" />
      </Card.Body>
    </Card>
  );
}

export default LegalCard;
