import data from "../utils/testData.json";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Компонент для рендера главной таблицы

function MainTable() {
  const style = {
    border: "1px solid #000",
    width: "10px",
    padding: "5px",
    textAlign: "center",
    cursor: "pointer",
  };
  const _dates = [2017, 2018, 2019];
  const _categories = ["xx", "yy", "zz"];

  // Functions
  const renderValuesfromDB = (city, year) => {
    const result = [];

    for (let i = 0; i <= 2; i++) {
      switch (i) {
        case 0: {
          result.push(data[city]["G"][year]?.["XX"]["value"]);
          break;
        }
        case 1: {
          result.push(data[city]["G"][year]?.["YY"]["value"]);
          break;
        }
        case 2: {
          result.push(data[city]["G"][year]?.["ZZ"]["value"]);
          break;
        }
      }
    }

    return result.map((item) =>
      item ? (
        <TableCell
          onClick={() =>
            window.open(
              "/secondary",
              "Secondary table",
              "width=1000,height=700,left=500,top=200"
            )
          }
          style={style}
        >
          {item}
        </TableCell>
      ) : (
        <TableCell
          onClick={() =>
            window.open(
              "/secondary",
              "Secondary table",
              "width=1000,height=700,top=200"
            )
          }
          style={style}
        >
          -
        </TableCell>
      )
    );
  };

  const categoriesRender = () => {
    let list = [];
    for (let i = 0; i < _dates.length; i++) {
      _categories.map((category) =>
        list.push(<TableCell>{category}</TableCell>)
      );
    }
    return list.map((item) => item);
  };

  return (
    <>
      <Table aria-label="spanning table">
        <TableHead>
          <TableContainer align="center">
            <TableRow>
              <TableCell rowSpan={2} colSpan={1} align="left">
                Regions
              </TableCell>
              {_dates.map((year) => (
                <TableCell colSpan={3} align="center">
                  {year}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>{categoriesRender()}</TableRow>
          </TableContainer>
        </TableHead>
        <TableBody align="center">
          <TableContainer>
            <TableRow>
              <TableCell colSpan={1} component="th" scope="row">
                Kyivska
              </TableCell>
              {renderValuesfromDB("Kyivska", "2017")}
              {renderValuesfromDB("Kyivska", "2018")}
              {renderValuesfromDB("Kyivska", "2019")}
            </TableRow>

            <TableRow>
              <TableCell colSpan={1} component="th" scope="row">
                Odeska
              </TableCell>
              {renderValuesfromDB("Odeska", "2017")}
              {renderValuesfromDB("Odeska", "2018")}
              {renderValuesfromDB("Odeska", "2019")}
            </TableRow>

            <TableRow>
              <TableCell colSpan={1} component="th" scope="row">
                Lvivska
              </TableCell>
              {renderValuesfromDB("Lvivska", "2017")}
              {renderValuesfromDB("Lvivska", "2018")}
              {renderValuesfromDB("Lvivska", "2019")}
            </TableRow>
          </TableContainer>
        </TableBody>
      </Table>
    </>
  );
}

export default MainTable;
