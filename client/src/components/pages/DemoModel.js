import React from 'react'
import {Button,Card,Figure,Form,Jumbotron} from 'react-bootstrap'
function DemoModel() {
    return (
        <>
        <Jumbotron>
        <Form>
        
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter the sentence you want to analyse!</Form.Label>
                <Form.Control as="textarea" rows={3} />
                
            </Form.Group>
            <Button
                    className="formbutton" variant="primary"  type = "submit" value = "Submit">
                        Submit</Button>
        </Form> 

        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </Jumbotron>
        </>
    )
}

export default DemoModel
