import React from "react";
import * as d3 from "d3";

const side = 400;
const start = 20;

export const Triangle = () => {
  const triangleRef = React.useRef(null);

  const data = [
    {
      x1: start,
      x2: start,
      y1: start,
      y2: side,
      style: "stroke-width: 6; stroke: black;",
    },
    {
      x1: start,
      x2: side,
      y1: start,
      y2: side,
      style: "stroke-width: 5; stroke: black;",
    },
    {
      x1: start,
      x2: side,
      y1: side,
      y2: side,
      style: "stroke-width: 10; stroke: black;",
    },
  ];

  console.log(data);

  React.useLayoutEffect(() => {
    if (triangleRef.current) {
      const triangle = d3
        .select(triangleRef.current)
        .append("svg")
        .attr("width", 400)
        .attr("height", 400);

      data.forEach((line) => {
        triangle
          .append("line")
          .attr("x1", line.x1)
          .attr("x2", line.x2)
          .attr("y1", line.y1)
          .attr("y2", line.y2)
          .attr("style", line.style);
      });
    }
  }, []);

  return <div ref={triangleRef} className="drawing"></div>;
};
