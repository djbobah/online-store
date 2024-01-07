import { observer } from "mobx-react-lite";
import { useContext } from "react";

import { Context } from "..";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/esm/Card";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          className="p-3"
          style={{ width: "100px", cursor: "pointer" }}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
export default BrandBar;
