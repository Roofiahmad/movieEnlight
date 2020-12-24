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
  const formProperty = [
    {
      label: "filmTitle",
      classname: `w-75 ${classCss.center}`,
      type: "text",
      name: "filmTitle",
      id: "filmTitle",
      placeholder: "",
      text: "Film Title",
    },
    {
      label: "coverPicture",
      classname: `${classCss.center} ${classCss.file}`,
      type: "file",
      name: "coverPicture",
      id: "coverPicture",
      placeholder: null,
      text: "Cover Picture",
    },
    {
      label: "trailerURL",
      classname: `w-100 ${classCss.center}`,
      type: "text",
      name: "trailerURL",
      id: "trailerURL",
      placeholder: "example = https://www.youtube.com/watch?v=XlDRFRaH9hI",
      text: "Trailer URL",
    },
    {
      label: "filmDescription",
      classname: `w-100 ${classCss.center}`,
      type: "textarea",
      name: "filmDescription",
      id: "filmDescription",
      placeholder: "input film decription here",
      text: "Film Description",
    },
    {
      label: "synopsis",
      classname: `w-100 ${classCss.center}`,
      type: "textarea",
      name: "synopsis",
      id: "synopsis",
      placeholder: "input synopsis film here",
      text: "Synopsis",
    },
  ];
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
          {formProperty.map((data, index) => (
            <FormGroup key={index}>
              <Label for={data.label}>{data.text}</Label>
              <Input
                className={data.classname}
                type={data.type}
                name={data.name}
                id={data.id}
                placeholder={data.placeholder}
              />
            </FormGroup>
          ))}
        </Col>
        <Button>Update Film</Button>
      </Form>
    </Container>
  );
}
