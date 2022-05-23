import styled from "@emotion/styled";
import { Button, ButtonProps, Collapse } from "@mui/material";
import { grey } from "@mui/material/colors";
import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { couldStartTrivia } from "typescript";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { CompanyModel } from "../../../../Models/CompanyModel";
import getAuthHeaders from "../../../../utils/tokenUtils";
// import { CompanyModel } from "../../../Models/CompanyModel";
import CompanyTable from "../CompanyTable/CompanyTable";
import "./GetAllCompanies.css";
//TODO: change to admin homepage architecture
//TODO: add pagination
function GetAllCompanies(): JSX.Element {
  const { setCompanies } = useActions();
  const { admin, users } = useTypedSelector((state) => state);

  useEffect(() => {
    const url = "http://localhost:8080/admin/getAllCompanies";
    axios
      .get(url, getAuthHeaders())
      .then((response) => {
        setCompanies(response.data);
      })
      .catch((error: AxiosError) => {
        console.log(error);
      });
  }, [users.userRole]);

  return <CompanyTable companies={admin.companies} />;
}

export default GetAllCompanies;
