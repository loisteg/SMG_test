import data from "../utils/testData.json";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// Component for rendering the main table

function MainTable(props) {
  // Variables
  const _dates = getInfo("date");
  const _categories = getInfo("categories");
  const style = {
    border: "1px solid #000",
    width: "10px",
    padding: "5px",
    textAlign: "center",
    cursor: "pointer",
  };
  const items = getItemsValues();
  const [idForChange, setIdForChange] = useState("");

  console.log(props.value);

  useEffect(() => {
    if (!idForChange) return;
    items.forEach((arr) => {
      arr.forEach((item) => {
        if (item.id === idForChange) {
          item.value = props.value;
        }
      });
    });
  }, [props.value]);

  // A method that retrieves information about years and catogeries, atc.
  function getInfo(type) {
    const cities = Object.keys(data);
    let res = [];
    switch (type) {
      case "date":
        for (let i = 0; i < cities.length; i++) {
          res = [...res, ...Object.keys(data[cities[i]]["G"])];
        }
        break;
      case "categories":
        for (let i = 0; i < cities.length; i++) {
          let dates = Object.keys(data[cities[i]]["G"]);
          for (let j = 0; j < dates.length; j++) {
            res = [...res, ...Object.keys(data[cities[i]]["G"][dates[j]])];
          }
        }
        res = res.map((item) => item.toLowerCase());
        break;
      default:
        break;
    }
    return [...new Set(res)];
  }

  function getItemsValues() {
    const cities = Object.keys(data);
    let res = [];

    for (let i = 0; i < cities.length; i++) {
      let region = cities[i];
      let values = [];
      values.push({ value: cities[i], id: uuid() });

      for (let j = 0; j < _dates.length; j++) {
        for (let m = 0; m < _categories.length; m++) {
          let point;
          const condition =
            data[region]["G"]?.[_dates[j]]?.[_categories[m].toUpperCase()]
              ?.value === undefined ||
            data[region]["G"]?.[_dates[j]]?.[_categories[m].toUpperCase()]
              ?.value === 0;

          if (!condition) {
            point =
              data[region]["G"]?.[_dates[j]]?.[_categories[m].toUpperCase()]
                ?.value;
          } else {
            point = "-";
          }
          values.push({ value: point, id: uuid() });
        }
      }

      res.push(values);
    }

    return res;
  }

  // Methods for render
  function renderValues() {
    return items.map((arr, i) => {
      return (
        <TableRow key={i}>
          {arr.map((item) => {
            return (
              <TableCell
                onClick={() => {
                  setIdForChange(item.id);
                  window.open(
                    "/secondary",
                    "",
                    "width=1000,height=700,top=200"
                  );
                }}
                key={item.id}
                style={style}
              >
                {item.value}
              </TableCell>
            );
          })}
        </TableRow>
      );
    });
  }

  function categoriesRender() {
    let list = [];
    for (let i = 0; i < _dates.length; i++) {
      _categories.map((category) =>
        list.push(
          <TableCell key={uuid()} align="center">
            {category}
          </TableCell>
        )
      );
    }
    return list.map((item) => item);
  }

  return (
    <>
      <Table aria-label="spanning table">
        <TableHead align="center">
          <TableRow>
            <TableCell rowSpan={2} colSpan={1} align="center">
              Regions
            </TableCell>
            {_dates.map((year) => (
              <TableCell colSpan={3} align="center" key={year}>
                {year}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>{categoriesRender()}</TableRow>
        </TableHead>
        <TableBody align="center">{renderValues()}</TableBody>
      </Table>
    </>
  );
}

export default MainTable;
