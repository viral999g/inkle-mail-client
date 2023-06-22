import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getFilteredData } from "../../redux/actions";
import EmailList from "./EmailList";
import EmailShimmer from "./EmailShimmer";
import Pagination from "./Pagination";

const EmailContainer = () => {
  const itemsPerPage = 10;
  const { tag } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchedValue = searchParams.get("search");
  const { filteredData, data, loading } = useSelector(
    (state) => state.mailReducer
  );

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOnResetSearch = (e) => {
    e.preventDefault();
    navigate({});
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (data.length) {
      setCurrentPage(1);
      dispatch(getFilteredData({ tag, searchedValue }));
    }
  }, [data, tag, searchedValue, dispatch]);

  if (loading) {
    <EmailShimmer />;
  }
  return (
    <CContainer className="email-container full-height" fluid>
      <CRow className="no-padding flex row column-center py-20 px-8">
        <CCol
          className="no-padding flex row column-center search-metadata"
          xs={8}
        >
          <p className="no-margin">Showing {filteredData.length} Results</p>
          <CButton
            color="dark"
            variant="outline"
            disabled={!searchedValue}
            onClick={handleOnResetSearch}
          >
            Reset Search
          </CButton>
        </CCol>
        <CCol className="no-padding flex row column-center end" xs={4}>
          {totalPages !== 0 && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              changePage={handlePageChange}
            />
          )}
        </CCol>
      </CRow>

      {filteredData && filteredData.length !== 0 && (
        <EmailList emails={currentData} />
      )}
    </CContainer>
  );
};

export default EmailContainer;
