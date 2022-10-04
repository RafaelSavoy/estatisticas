import { useState } from "react";
import { Button, InputDatas, InputGroup } from "./styles";

interface CurrentData {
  itemName: string;
  itemQuantity: number;
}
interface GraphicDataProps {
  setGraphicName: (name: string) => void;
  addData: (itemName: string, quantity: number) => void;
}

const GraphicData = (props: GraphicDataProps) => {
  const [currentData, setCurrentData] = useState<CurrentData>({
    itemName: "",
    itemQuantity: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const inputName = e.target.name;
    if (inputName != "graphicName") {
      if (inputName == "itemQuantity") {
        setCurrentData({
          ...currentData,
          itemQuantity: parseInt(e.target.value.replace(/\D/g, "0")),
        });
      } else {
        setCurrentData({
          ...currentData,
          itemName: e.target.value,
        });
      }
    } else {
      props.setGraphicName(e.target.value);
    }
  }
  return (
    <InputDatas>
      <input
        type="text"
        name="itemName"
        onChange={handleChange}
        value={currentData.itemName}
        placeholder="Item"
      />
      <input
        type="number"
        name="itemQuantity"
        onChange={handleChange}
        value={currentData.itemQuantity}
        placeholder="Quantidade"
      />
      <Button
        onClick={() =>
          props.addData(currentData.itemName, currentData.itemQuantity)
        }
      >
        Adicionar item
      </Button>
    </InputDatas>
  );
};

export default GraphicData;
