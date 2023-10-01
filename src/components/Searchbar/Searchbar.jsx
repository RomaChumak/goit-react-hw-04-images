import { GoSearch } from "react-icons/go";
import { useState } from "react";
import toast from 'react-hot-toast';
import { SearchbarHeader, SearchForm, SearchFormBtn,  SearchFormInput } from "./Searchbar.styled"
export const SearchBar = ({onSubmit}) =>{
  const [value, setValue] = useState('');
  const handleChange = (evt) => {
    setValue(evt.target.value.toLowerCase())
    // console.log(evt.target.value)
  };

 const handleSubmit = (evt) => {
    evt.preventDefault();
    if (value.trim() === '') {
     return toast.error('Please enter your request')
    }
    onSubmit(value)
    setValue('');
    // console.log(onSubmit(value))
  };


  return( <SearchbarHeader>
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormBtn type="submit" >
        <span><GoSearch size={25} color="blue"/></span>
      </SearchFormBtn>

      <SearchFormInput
        type="text"
        placeholder="Search images and photos"
        name="query"
        autoComplete="off"
        autoFocus
        onChange={handleChange}
        value={value}
      />
    </SearchForm>
  </SearchbarHeader>)
  }
