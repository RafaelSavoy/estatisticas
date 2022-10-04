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
          legend: { position: "top" },
        }}
        width={"100%"}
        height={"100%"}
      />
      <Button
        style={{ alignSelf: "center", margin: "10px" }}
        onClick={backToInput}
      >
        Voltar
      </Button>
    </GraphicContainer>
  );
};

export default Graphic;
