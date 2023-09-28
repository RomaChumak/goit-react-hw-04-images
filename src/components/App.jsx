import React, { Component } from 'react';
import { fetchImages } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './Gallery/GalleryImg';
import { Button } from './LoadMore/LoadMore';
import { GlobalStyled } from './GlobalStyled';
import { Loader } from './Loader/Loader';
export class App extends Component {
  state = {
    query: '',
    img: [],
    page: 1,
    totalHits: 0,
    loading: false,
    err: false,
  }; 
  
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.query !== prevState.query || this.state.page !== prevState.page) {
      try {
       this.setState({loading: true})
        const gallery = await fetchImages(this.state.query, this.state.page)
        if (!gallery.totalHits) {
          toast.error('Nothing was found for your request')
        };

        this.setState(pState => ({ img: [...pState.img, ...gallery.hits], totalHits: gallery.totalHits, }))

        if (this.state.img.length < 12 && gallery.totalHits) {
          return toast.success(`We found ${gallery.totalHits} images`)
        }

     } catch (error) {
        this.setState({ err: true });
        toast.error(' Something went wrong. Try again later')
      } finally {
        this.setState({loading: false, err: false})
     }
     }
 
  
 }
  handleSubmit = (search) => {
    this.setState({
      query: `${search}`,
      img: [],
      page: 1,
  })
  }
  handleLoad = () => {
    this.setState(pState =>({
      page: pState.page + 1
    }))
    // console.log(5)
  }
  render() {
    const Load = this.handleLoad;
    const submit = this.handleSubmit;
    const { img } = this.state;
    const { totalHits } = this.state;
    const { loading } = this.state
    const pages = totalHits / 12
    return (
      <div>
        <SearchBar onSubmit={submit} />
        {totalHits > 0 && <ImageGallery images={img} />}
        {loading > 0 && <Loader/> }
        {totalHits > 0 && pages > 1 && !loading && (<Button onLoad={Load} />)}
        <Toaster position='butom' />
        <GlobalStyled/>
      </div>
    );
  }
}
