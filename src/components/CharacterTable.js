import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

// Компонент для рендера второй таблицы, которая должна открыться в попапе

const CharacterTable = () => {
  const getTodayDate = () => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth() + 1}.${+date.getFullYear()}`;
  };

  const addnewData = (e) => {
    e.preventDefault();
    setInfromation([...information, { value, date, user, comment }]);
  };

  const addInfoToState = (e, type) => {
    switch (type) {
      case "value":
        setValue(e.target.value);
        break;
      case "user":
        setUser(e.target.value);
        break;
      case "comment":
        setComment(e.target.value);
        break;
    }
  };

  const styleforInputs = { border: "1px solid #000", textAlign: "center" };

  const [value, setValue] = useState("");
  const date = getTodayDate();
  const [user, setUser] = useState("Andrew");
  const [comment, setComment] = useState("");
  const [information, setInfromation] = useState(() => [
    {
      value: "4",
      date: "20.02.2022",
      user: "Petro",
      comment: "any",
    },
    {
      value: "5",
      date: "21.02.2022",
      user: "Roman",
      comment: "",
    },
    {
      value: "6",
      date: "22.02.2022",
      user: "Anna",
      comment: "",
    },
  ]);

  return (
    <>
      <Table>
        <TableContainer align="center">
          <TableHead>
            <TableRow>
              <TableCell align="center">value</TableCell>
              <TableCell align="center">date</TableCell>
              <TableCell align="center">user</TableCell>
              <TableCell align="center">comment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {information.map((item) => {
              return (
                <TableRow align="center">
                  <TableCell align="center">{item.value}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                  <TableCell align="center">{item.user}</TableCell>
                  <TableCell align="center">{item.comment}</TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell align="center">
                <input
                  style={styleforInputs}
                  type="number"
                  value={value}
                  onChange={(e) => addInfoToState(e, "value")}
                />
              </TableCell>
              <TableCell align="center">
                <input style={styleforInputs} placeholder={date} disabled />
              </TableCell>
              <TableCell align="center">
                <select
                  name="select"
                  value={user}
                  onChange={(e) => addInfoToState(e, "user")}
                >
                  <option value="Andrew">Andrew</option>
                  <option value="Mirek">Mirek</option>
                  <option value="Foxy">Foxy</option>
                </select>
              </TableCell>
              <TableCell align="center">
                <input
                  style={styleforInputs}
                  type="text"
                  value={comment}
                  onChange={(e) => addInfoToState(e, "comment")}
                />
              </TableCell>
              <Button
                sx={{ m: "7px 0 0 15px" }}
                variant="contained"
                onClick={(e) => addnewData(e)}
              >
                Add
              </Button>
            </TableRow>
          </TableBody>
          <Button
            sx={{ m: "25px" }}
            variant="contained"
            onClick={() => window.close()}
          >
            Close
          </Button>
        </TableContainer>
      </Table>
    </>
  );
};

export default CharacterTable;