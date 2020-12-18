import React from "react";
import { Card } from "react-bootstrap";
import "../../style/Home.css";

export default function CategoryBox() {
  return (
    <div className="category-container">
      <Card
        style={{
          width: "16rem",
          backgroundColor: "transparent",
          border: "none",
        }}
      >
        <div className="category-col1">
          <div className="men category-item">
            <Card.Img
              variant="top"
              src="https://previews.123rf.com/images/koszubarev/koszubarev1706/koszubarev170600022/80129453-summer-collection-men-clothes-set-with-checkered-shirt-jeans-shoes-and-belt-isolated-on-white-backgr.jpg"
            />
            <p
              style={{
                textAlign: "center",
                lineHeight: 1.2,
                fontSize: "8px",
                paddingTop: "6pxg",
              }}
            >
              Men gift guide
            </p>
          </div>

          <span className="margin-span"> </span>
          <div className="women category-item">
            <Card.Img
              variant="top"
              src="https://image.made-in-china.com/2f0j00QkARoTIgbwcM/High-Quality-Gown-Private-Label-New-Design-Factory-Spring-Private-Label-Fashion-Women-Clothes-Beautiful-Dresses-Ladies-Dress.jpg"
            />
            <p
              style={{
                textAlign: "center",
                lineHeight: 1.2,
                fontSize: "8px",
                paddingTop: "6pxg",
              }}
            >
              Women fashion guide
            </p>
          </div>
        </div>

        <div className="category-col1">
          <div className="toy category-item">
            <Card.Img
              variant="top"
              src="https://www.ascentialedge.com/sites/default/files/styles/image_text_vert/public/image/grid/2016-Toy-Category-Report.png?itok=n5A-CEyA"
            />
            <p
              style={{
                textAlign: "center",
                lineHeight: 1.2,
                fontSize: "8px",
                paddingTop: "6pxg",
              }}
            >
              Toys gift guide
            </p>
          </div>
          <span className="margin-span"></span>
          <div className="electronic category-item">
            <Card.Img
              variant="top"
              src="https://images-na.ssl-images-amazon.com/images/I/615LSep2qnL._AC_SL1000_.jpg"
            />
            <p
              style={{
                textAlign: "center",
                lineHeight: 1.2,
                fontSize: "8px",
                paddingTop: "6pxg",
              }}
            >
              Electronics gift guide
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
