import {
  CButton,
  CCol,
  CFormTextarea,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CRow,
} from "@coreui/react";
import React from "react";

const EmailModal = ({ showModal, setShowModal, email }) => {
  return (
    <CModal
      alignment="center"
      visible={showModal}
      onClose={() => setShowModal(false)}
      size="lg"
    >
      <CModalHeader>
        <CModalTitle>From: {email?.name}</CModalTitle>
      </CModalHeader>
      <CModalBody>
        <CRow>
          <CCol xs={2}>Subject: </CCol>
          <CCol xs={10}>
            <CFormTextarea
              value={email?.subject}
              aria-label="Readonly textarea example"
              readOnly
              disabled
              aria-expanded={false}
            ></CFormTextarea>
          </CCol>
        </CRow>
        <CRow className="mt-16">
          <CCol xs={2}>Body: </CCol>
          <CCol xs={10}>
            <CFormTextarea
              value={email?.body}
              aria-label="Readonly textarea example"
              readOnly
              disabled
              aria-expanded={false}
            ></CFormTextarea>
          </CCol>
        </CRow>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setShowModal(false)}>
          Close
        </CButton>
      </CModalFooter>
    </CModal>
  );
};

export default EmailModal;
