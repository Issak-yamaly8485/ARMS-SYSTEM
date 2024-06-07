import React, { useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import FormModal from "../Modals/FormModal.jsx";
import { useLocation } from "react-router-dom";
import "./DataTable.css";
import Table1 from "./Table1.jsx";
import Table2 from "./Table2.jsx";
import Table3 from "./Table3.jsx";

import FileTable from "./FileTable.jsx";
import LocTable from "./LocTable.jsx";

const DataTable = ({
  title,
  rows,
  route,
  onDelete,
  onDownload,
  page,
  descInput,
  form,
}) => {
  const currentroute = useLocation().pathname;
  const { userInfo } = useSelector((state) => state.auth);
  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleGet = (id, downlaodname) => {
    onDownload(id, downlaodname);
  };

  const pageSection = currentroute.split("/")[1].toLowerCase();
  const isAdmin = () => {
    return userInfo.role === "admin" || userInfo.role === "superadmin";
  };
  function desiredTable(form) {
    switch (form) {
      case "Form1":
        return (
          <Table1
            userInfo={userInfo}
            rows={rows}
            page={page}
            route={route}
            title={title}
            handleDelete={handleDelete}
            handleGet={handleGet}
            pageSection={pageSection}
          />
        );
      case "Form2":
        return (
          <Table2
            userInfo={userInfo}
            rows={rows}
            page={page}
            route={route}
            title={title}
            handleDelete={handleDelete}
            handleGet={handleGet}
            pageSection={pageSection}
          />
        );
      case "Form3":
        return (
          <Table3
            userInfo={userInfo}
            rows={rows}
            page={page}
            route={route}
            title={title}
            handleDelete={handleDelete}
            handleGet={handleGet}
            pageSection={pageSection}
          />
        );
      case "LocForm":
        return (
          <LocTable
            userInfo={userInfo}
            rows={rows}
            page={page}
            route={route}
            title={title}
            handleDelete={handleDelete}
            handleGet={handleGet}
            pageSection={pageSection}
          />
        );
      case "FileForm":
        return (
          <FileTable
            userInfo={userInfo}
            rows={rows}
            page={page}
            route={route}
            title={title}
            handleDelete={handleDelete}
            handleGet={handleGet}
            pageSection={pageSection}
          />
        );
      default:
        return <h1>No Form</h1>;
    }
  }
  return (
    <>
      <TableContainer sx={{ margin: 1 }} component={Paper}>
        <div className="table-title">
          <Typography sx={{ padding: 2, color: "black" }} variant="h5">
            {title}
          </Typography>
          {isAdmin() && pageSection !== "tcr" && (
            <>
              <FormModal
                descInput={descInput}
                page={page}
                title={title}
                route={route}
                form={form}
              />
            </>
          )}
        </div>

        {desiredTable(form)}
      </TableContainer>
    </>
  );
};

export default DataTable;
