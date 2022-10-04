import React from 'react'

import { usePagination, useSearchBox } from "react-instantsearch-hooks";
import { autocomplete, AutocompleteOptions } from "@algolia/autocomplete-js";
import { BaseItem } from "@algolia/autocomplete-core";

import "@algolia/autocomplete-theme-classic";

type AutocompleteProps = Partial<AutocompleteOptions<BaseItem>> & {
  className?: string;
};

type SetInstantSearchUiStateOptions = {
  query: string;
};

const AutoSearch = () => {
  return (
    <div>AutoSearch</div>
  )
}

export default AutoSearch