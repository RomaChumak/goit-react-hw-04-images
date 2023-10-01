import React, { useEffect, useState } from 'react';
import { fetchImages } from './api';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './Gallery/GalleryImg';
import { Button } from './LoadMore/LoadMore';
import { GlobalStyled } from './GlobalStyled';
import { Loader } from './Loader/Loader';
export const App = () => {

  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)
  const [img, setImg] = useState([]);
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (!query) {
      return;
    }
      async function LoadImg() {
    
        try {
          setLoading(true);
        const gallery = await fetchImages(query, page)
        if (!gallery.totalHits) {
          toast.error('Nothing was found for your request')
          return;
        };

          setImg(pImg => [...pImg, ...gallery.hits,]);
          setTotalHits(gallery.totalHits);

        if (page === 1) {
          return toast.success(`We found ${gallery.totalHits} images`)
        }

     } catch (error) {
          setErr(true);
        toast.error(' Something went wrong. Try again later')
        } finally {
          setErr(false);
          setLoading(false);
     }
     }
    LoadImg();
  }, [query, page])

  const handleSubmit = (search) => {
    setQuery(search);
    setImg([]);
    setPage(1);
  }
  const handleLoad = () => {
    setPage(pPage =>  pPage + 1 )
    // console.log(5)
  }
  
  const pages = Math.ceil(totalHits / img.length);
    return (
      <div>
        <SearchBar onSubmit={handleSubmit} />
        {img.length > 0 && <ImageGallery images={img} />}
        {loading > 0 && <Loader/> }
        {img.length > 0 && pages > 1 && !loading &&(<Button onLoad={handleLoad} />)}
        <Toaster position='butom' />
        <GlobalStyled/>
      </div>
    );
  
}
