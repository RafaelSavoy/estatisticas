import React from "react";
import {
  Button,
  DataTable,
  RemoveData,
  Subtitle,
  TableContainer,
  Title,
} from "./styles";
import { FaTrashAlt } from "react-icons/fa";

interface GraphicTableProps {
  data: [string, number][];
  removeData: (index: number) => void;
  clearData: () => void;
  generateGraphic: () => void;
}

const GraphicDataTable = ({
  data,
  removeData,
  clearData,
  generateGraphic,
}: GraphicTableProps) => {
  return (
    <TableContainer visible={data.length > 0}>
      <Title as={Subtitle}>Dados do gráfico</Title>
      <DataTable>
        <col />
        <col />
        <thead>
          <tr>
            <th>Item</th>
            <th colSpan={2}>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => {
            return (
              <tr key={index}>
                <td>
                  <p>{data[0]} </p>
                </td>
                <td>
                  <p>{data[1]}</p>
                  <RemoveData onClick={() => removeData(index)}>
                    <FaTrashAlt />
                  </RemoveData>
                </td>
              </tr>
            );
          })}
        </tbody>
      </DataTable>
      <div>
        <Button onClick={clearData}>Limpar dados</Button>
        <Button onClick={generateGraphic}>Gerar gráfico</Button>
      </div>
    </TableContainer>
  );
};

export default GraphicDataTable;
