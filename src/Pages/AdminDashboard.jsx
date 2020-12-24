import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import classCss from "./AdminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <Container className={classCss.admin_dashboard_container}>
      <h4>Admin Only</h4>
      <div className={classCss.admin_image_container}>
        <img
          className={classCss.admin_image}
          src="https://i.pinimg.com/originals/4d/db/99/4ddb99836d52fba00f321c7764d698a8.jpg"
          alt="user image"
        />
      </div>
      <Form className="form ">
        <Col>
          <FormGroup>
            <Label for="filmTitle">Film Title</Label>
            <Input
              className={`w-75 ${classCss.center}`}
              type="text"
              name="filmTitle"
              id="filmTitle"
              placeholder=""
            />
          </FormGroup>
          <FormGroup>
            <Label for="coverPicture">Cover Picture</Label>
            <Input
              className={`${classCss.center} ${classCss.file}`}
              type="file"
              name="coverPicture"
              id="coverPicture"
            />
          </FormGroup>
          <FormGroup>
            <Label for="trailerURL">Trailer URL</Label>
            <Input
              className={`w-100 ${classCss.center}`}
              type="text"
              name="trailerURL"
              id="trailerURL"
              placeholder="example = https://www.youtube.com/watch?v=XlDRFRaH9hI"
            />
          </FormGroup>
          <FormGroup>
            <Label for="filmDescription">Film Description</Label>
            <Input
              className={`w-100 ${classCss.center}`}
              type="textarea"
              name="filmDescription"
              id="filmDescription"
              placeholder="input film decription here"
            />
          </FormGroup>
          <FormGroup>
            <Label for="synopsis">Synosis</Label>
            <Input
              className={`w-100 ${classCss.center}`}
              type="textarea"
              name="synopsis"
              id="synopsis"
              placeholder="input synopsis film here"
            />
          </FormGroup>
        </Col>
        <Button>Update Film</Button>
      </Form>
    </Container>
  );
}
