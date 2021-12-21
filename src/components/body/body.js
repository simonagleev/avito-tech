import React, {useEffect, useState} from "react";
import './body.css';
import './body.sass'
import {ModalWindow} from "../modal-window/modal-window";


export const Body = ({}) => {

    const [photoId, setPhotoId] = useState([])
    const [isShowModal, setIsShowModal] = useState(false)

    const choosePhoto = (id) => {
        setPhotoId(id)
        setIsShowModal(true)
    }

    const [photos, setPhotos] = useState([])

    const gettingPictures = () => {                                      //Получение всех картинок (запрос на сервер)
        fetch('https://boiling-refuge-66454.herokuapp.com/images')
          .then(res => res.json())
          .then(data => {
              setPhotos(data)
          })
    }


    useEffect(() => {
        gettingPictures()
    }, [])


    const onCloseModal = () => {
        setIsShowModal(false)
    }


    return (
        <div className={'body test-bg'}>
            {
                (isShowModal)
                  ? <ModalWindow onCloseModal={onCloseModal} photoId={photoId} />
                  : null
            }

            {
              photos.map(i => (
                <div
                  className={'photo-container'}
                  onClick={() => choosePhoto(i.id)}
                >
                    <img className={'image-item'}
                      key={i.id}
                      src={i.url}
                    />
                </div>
              ))
            }
        </div>
    )
}