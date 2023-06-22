import Header from "./components/header/Header";
import { CCol, CContainer, CRow } from "@coreui/react";
import SideBar from "./components/sideBar/SideBar";
import { Outlet } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.scss";
import { useDispatch } from "react-redux";
import { getMails } from "./redux/actions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMails());
  }, [dispatch]);
  return (
    <CContainer className="full-height no-padding" fluid>
      <CRow className="app-container no-margin">
        <CCol xs={12} className="py-16">
          <Header />
        </CCol>
        <CCol xs={12} className="main-content pt-32">
          <CRow className="full-height body">
            <CCol className="no-padding" xl={"auto"}>
              <SideBar />
            </CCol>
            <CCol className="no-padding px-16 holder">
              <Outlet />
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  );
}

export default App;
