import { GoSearch } from "react-icons/go";
import { Component } from "react";
import toast from 'react-hot-toast';
import { SearchbarHeader, SearchForm, SearchFormBtn,  SearchFormInput } from "./Searchbar.styled"
export class SearchBar extends Component {
  state = {
   value: '',
  }
  handleChange = (evt) => {
    this.setState({ value: evt.target.value.toLowerCase(), })
    // console.log(evt.target.value)
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const value = this.state.value;
    if (value.trim() === '') {
     return toast.error('Please enter your request')
    }
    this.props.onSubmit(value)
    this.setState({ value: '' })
    // console.log(this.props.onSubmit(value))
  };

  render() {
    const value = this.state.value;
    const submit = this.handleSubmit;
  return( <SearchbarHeader>
    <SearchForm onSubmit={submit}>
      <SearchFormBtn type="submit" >
        <span><GoSearch size={25} color="blue"/></span>
      </SearchFormBtn>

      <SearchFormInput
        type="text"
        placeholder="Search images and photos"
        name="query"
        autoComplete="off"
        autoFocus
        onChange={this.handleChange}
        value={value}
      />
    </SearchForm>
  </SearchbarHeader>)
  }
}