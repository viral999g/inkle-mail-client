import { CCol, CContainer, CListGroupItem, CRow } from "@coreui/react";
import React from "react";
import { useParams } from "react-router-dom";

const CircleWithInitial = ({ name }) => {
  const initial = name ? name[0].toUpperCase() : "";
  return <div className="avatar w-55 h-55 fs-22">{initial}</div>;
};

const EmailItem = ({ body, subject, name, onOpenModal, tag }) => {
  const { tag: filter } = useParams();

  return (
    <CListGroupItem
      className="email-item pointer no-padding"
      component="div"
      onClick={onOpenModal}
    >
      <CContainer className="pr-16" fluid>
        <CRow>
          <CCol className="flex row-center column-center px-16" xs={1}>
            <CircleWithInitial name={name} />
          </CCol>
          <CCol xs={11} className="email-content no-padding py-24">
            <div className="name flex row column-center">
              <b className="no-padding">{name}</b>
              {filter === "all" && (
                <span className="tag py-2 px-4 ml-8 fs-10 lh-12">{tag}</span>
              )}
            </div>
            <div>
              <i className="fs-18">{subject}</i>
            </div>
            <div>{body}</div>
          </CCol>
        </CRow>
      </CContainer>
    </CListGroupItem>
  );
};

export default EmailItem;
