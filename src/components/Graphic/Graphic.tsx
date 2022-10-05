import React from "react";
import Chart from "react-google-charts";
import { Button, GraphicContainer } from "./styles";

interface GraphicInfos {
  name: string;
  data: [string, number][];
  backToInput: () => void;
}
const Graphic = ({ name, data, backToInput }: GraphicInfos) => {
  console.log("..." + data);
  return (
    <GraphicContainer>
      <Chart
        data={[["", ""], ...data]}
        chartType={"PieChart"}
        options={{
          title: name,
          titleTextStyle: {
            color: "#4678de",
            fontSize: 30,
            fontName: "Poppins",
          },
          backgroundColor: "transparent",
          legend: { position: "bottom" },
        }}
        width={"100%"}
        height={"100vh"}
      />
    </GraphicContainer>
  );
};

export default Graphic;
