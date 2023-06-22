import { CListGroup } from "@coreui/react";
import React, { useState } from "react";
import EmailItem from "./EmailItem";
import EmailModal from "./EmailModal";

const EmailList = ({ emails = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [emailDetails, setEmailDetails] = useState(null);

  const openModalHandler = (email) => {
    setEmailDetails({ ...email });
    setShowModal(true);
  };

  return (
    <>
      <EmailModal
        showModal={showModal}
        setShowModal={setShowModal}
        email={emailDetails}
      />
      <CListGroup className="email-list">
        {emails.map((email) => (
          <EmailItem
            onOpenModal={() => openModalHandler(email)}
            key={email?.id}
            {...email}
          />
        ))}
      </CListGroup>
    </>
  );
};

export default EmailList;
