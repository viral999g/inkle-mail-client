import { CContainer, CForm, CFormInput } from "@coreui/react";
import React, { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const searchedValue = searchParams.get("search");
  const [searchValue, setSearchValue] = useState(searchedValue);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchValue(searchedValue || "");
  }, [searchedValue]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    navigate({
      search: createSearchParams(
        searchValue
          ? {
              search: searchValue,
            }
          : {}
      ).toString(),
    });
  };

  return (
    <CContainer fluid>
      <CForm onSubmit={handleOnSubmit}>
        <CFormInput
          type="text"
          id="search"
          placeholder="Search mail"
          aria-describedby="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </CForm>
    </CContainer>
  );
};

export default SearchBar;
