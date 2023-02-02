import {Card, Button} from "react-bootstrap";

function TodoCard() {
  return (
    <Card border="warning" >
      <Card.Img variant="top" src="./todoImage.jpg"  />
      <Card.Header as="h5" className="text-center">
        TodoList App
      </Card.Header>
      <Card.Body>
        <Card.Text as="p">This, under construction, is a React Todolist app that fetches todos from an Airtable API and allows for CRUD (Create, Read, Update, Delete) features. Users can view a list of their todos, add new ones, update existing ones, and delete ones that are no longer needed. The app uses the Airtable API to store and retrieve the todos, providing a convenient and secure way for users to manage their tasks.</Card.Text>
        <Button variant="outline-warning">

        <Card.Link href="/projects/todolist" target="_blank">
          Try it
        </Card.Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;
