import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import bigStar from "../assets/big_star.png";
import Button from "react-bootstrap/esm/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceApi";

const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });

  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  // const device = {
  //   id: 1,
  //   name: "Iphone 12 pro",
  //   price: 100000,
  //   rating: 5,
  //   img: "https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png",
  // };
  // const description = [
  //   { id: 1, title: "Оперативня память", description: "5 гб" },
  //   { id: 2, title: "Камера", description: "12 мп" },
  //   { id: 3, title: "Процессор", description: "Пентиум 3" },
  //   { id: 4, title: "Кол-во ядер", description: "2" },
  //   { id: 5, title: "Аккумулятор", description: "4000" },
  // ];
  return (
    <Container className="mt-3">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + "/" + device.img}
            //process.env.REACT_APP_API_URL +
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center text-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: "240px",
                height: 240,
                backgroundSize: "cover",
                fontSize: 64,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: "5px solid lightgray",
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={"outline-dark"}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
      <Row className="d-flex flex-column m-3">
        <h1>Характеристики:</h1>
        {device.info.map((info, index) => (
          <Row
            key={info.id}
            style={{
              background: index % 2 === 0 ? "lightgray" : "transparent",
            }}
          >
            {info.title} : {info.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};

export default DevicePage;
