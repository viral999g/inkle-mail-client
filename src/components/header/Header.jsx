import { CCol, CContainer, CImage, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilHamburgerMenu } from "@coreui/icons";
import React from "react";

import logo from "./../../assets/images/inkleLogo.svg";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../redux/actions";

const Header = () => {
  const dispatch = useDispatch();

  const handleOnClickHamburger = () => {
    dispatch(toggleSideBar());
  };

  return (
    <CContainer fluid>
      <CRow className="column-center">
        <CCol sm={4} className="flex column-center">
          <CIcon
            className="mr-16 pointer"
            icon={cilHamburgerMenu}
            width={30}
            height={25}
            onClick={handleOnClickHamburger}
          />
          <CImage fluid src={logo} />
        </CCol>
        <CCol sm={8} className="flex column-center">
          <SearchBar />
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Header;
