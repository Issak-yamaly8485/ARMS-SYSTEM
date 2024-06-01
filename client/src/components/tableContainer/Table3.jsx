import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ConfirmationModal from "../Modals/ConfirmationModal.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faDownload } from "@fortawesome/free-solid-svg-icons";
import EditFormModal from "../Modals/EditFormModal.jsx";

const Table3 = ({
  userInfo,
  rows,
  page,
  route,
  title,
  handleDelete,
  handleGet,
  pageSection,
}) => {
  const isAdmin = () => {
    return userInfo.role === "admin" || userInfo.role === "superadmin";
  };
  return (
    <Table sx={{ minWidth: 250 }} aria-label="simple table">
      <TableHead sx={{ backgroundColor: "#f5f5f4" }}>
        <TableRow>
          <TableCell align="center">Download</TableCell>
          <TableCell align="center">File Name</TableCell>
          <TableCell align="center">target date</TableCell>
          <TableCell align="center">actual date</TableCell>
          {isAdmin() && pageSection !== "tcr" && (
            <>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>{" "}
            </>
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row._id}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell align="center">
              {" "}
              <FontAwesomeIcon
                onClick={() => {
                  handleGet(row._id, row.displayName);
                }}
                style={{ color: "black" }}
                className="icon-button fa-lg edit-icon"
                icon={faDownload}
              />
            </TableCell>
            <TableCell align="center">{row.displayName}</TableCell>
            <TableCell align="center">{row.targetDate}</TableCell>
            <TableCell align="center">{row.actualDate}</TableCell>
            {isAdmin() && pageSection !== "tcr" && (
              <>
                <TableCell align="center">
                  <EditFormModal
                    page={page}
                    title={title}
                    route={route}
                    rowID={row._id}
                  />
                </TableCell>
                <TableCell align="center">
                  <ConfirmationModal
                    classIcon="trash-icon"
                    icon={faTrash}
                    onConfirm={() => {
                      handleDelete(row._id);
                    }}
                  />
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Table3;
