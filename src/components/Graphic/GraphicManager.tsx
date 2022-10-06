import React, { useState } from "react";
import Graphic from "./Graphic";
import GraphicData from "./GraphicDatas";
import GraphicDataTable from "./GraphicDataTable";
import { Container, InputGroup, StyledSection, Title } from "./styles";

interface GraphicInfos {
  graphicName: string;
  graphicData: [string, number][];
  graphicStatus: boolean;
}

const GraphicManager = () => {
  const [graphicInfos, setGraphicInfos] = useState<GraphicInfos>({
    graphicName: "",
    graphicData: [],
    graphicStatus: false,
  });

  function removeData(index: number): void {
    const datas = [...graphicInfos.graphicData];
    datas.splice(index, 1);
    if (graphicInfos.graphicData.length <= 1) {
      setGraphicInfos({
        ...graphicInfos,
        graphicData: datas,
        graphicStatus: false,
      });
    } else {
      setGraphicInfos({ ...graphicInfos, graphicData: datas });
    }
  }
  function setGraphicName(name: string) {
    setGraphicInfos({ ...graphicInfos, graphicName: name });
  }
  function addData(itemName: string, quantity: number) {
    if (new RegExp(/\D/g).test(quantity.toString())) {
      quantity = 0;
    }
    setGraphicInfos({
      ...graphicInfos,
      graphicData: [
        ...graphicInfos.graphicData,
        [itemName == "" ? "Sem" : itemName, quantity],
      ],
    });
  }
  function clearData(): void {
    setGraphicInfos({ ...graphicInfos, graphicData: [], graphicStatus: false });
  }
  function toggleGraphicStatus(): void {
    setGraphicInfos({
      ...graphicInfos,
      graphicStatus: !graphicInfos.graphicStatus,
    });
  }
  function generateGraphic(): void {
    setGraphicInfos({ ...graphicInfos, graphicStatus: true });
  }

  return (
    <>
      <StyledSection>
        <Container>
          <Title>Gerador de gráfico</Title>
          <InputGroup>
            <label>Título</label>
            <input
              type="text"
              name="graphicName"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGraphicName(e.target.value)
              }
              value={graphicInfos.graphicName}
            />
          </InputGroup>
          <GraphicData setGraphicName={setGraphicName} addData={addData} />
          <GraphicDataTable
            data={graphicInfos.graphicData}
            removeData={removeData}
            clearData={clearData}
            generateGraphic={generateGraphic}
          />
        </Container>
        {graphicInfos.graphicStatus ? (
          <Graphic
            name={graphicInfos.graphicName}
            data={graphicInfos.graphicData}
            backToInput={toggleGraphicStatus}
          />
        ) : (
          ""
        )}
      </StyledSection>
    </>
  );
};

export default GraphicManager;

