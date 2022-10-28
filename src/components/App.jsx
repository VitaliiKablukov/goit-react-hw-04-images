import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import { WrapperApp } from './App.styled';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { RequesPictures } from '../components/Services/ServicesApi';
import { useState, useEffect } from 'react';
export const App = () => {
  const [picture, setPicture] = useState([]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalPicture, setModalPicture] = useState('');

  const onSubmit = data => {
    setPicture(() => []);
    setInputText(() => data);
    setPage(() => 1);
    setTotalHits(() => null);
  };
  const counterPage = () => {
    setPage(page => page + 1);
  };

  const fetchImages = async (query, pages, controller) => {
    setLoading(() => true);
    const response = await RequesPictures(query, pages, controller);
    console.log(response);
    const pictures = response.data.hits;
    const aryyPictures = pictures.map(elem => {
      const picture = {
        id: elem.id,
        webformatURL: elem.webformatURL,
        largeImageURL: elem.largeImageURL,
        tags: elem.tags,
      };
      return picture;
    });
    if (!pictures.length) {
      alert('Упс, по вашому запиту картинки не знайдені');
    } else {
      setPicture(picture => [...picture, ...aryyPictures]);
      setTotalHits(() => response.data.totalHits);
    }
    setLoading(() => false);
  };
  useEffect(() => {
    console.log('click');
    const controller = new AbortController();
    fetchImages(inputText, page, controller);
    return () => {
      controller.abort();
    };
  }, [inputText, page]);

  const openModal = e => {
    const srcPicture = e.target.name;
    setModalPicture(() => srcPicture);
    this.toggleModal();
  };
  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };

  return (
    <WrapperApp>
      <Searchbar onSubmit={onSubmit} />
      {loading && <Loader />}

      {picture !== [] && (
        <ImageGallery cardInfo={picture} openModal={openModal} />
      )}
      {totalHits && totalHits !== picture.length && !loading && (
        <Button counterPage={counterPage} />
      )}
      {showModal && <Modal picture={modalPicture} onClose={toggleModal} />}
    </WrapperApp>
  );
};
