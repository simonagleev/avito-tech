import React, {useEffect, useState} from "react";
import './modal-window.css';
import CloseIcon from '../../attachments/Close.svg';
import {NewComment} from "../new-comment/new-comment";

export const ModalWindow = ({photoId, onCloseModal}) => {

  const [modalWindowData, setModalWindowData] = useState(null)

  const fetchData = () => {                                         // Запрос на выбраную фотографию
    fetch('https://boiling-refuge-66454.herokuapp.com/images/' + photoId)
      .then(res => res.json())
      .then(data => {
        setModalWindowData(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [photoId])

  const parseDate = (unixTimeStamp) => {                                    // Время
    return new Date(unixTimeStamp).toLocaleDateString()
  }

  const [name, setName] = useState('');
  const [yourComment, setYourComment] = useState('')

  const inputs = [                                                      // Комментярий пользователя (новый)
    {
      defaultValue: 'Ваше имя',
      getter: name,
      setter: setName,
    },
    {
      defaultValue: 'Ваш комментарий',
      getter: yourComment,
      setter: setYourComment,
    }
  ]

  const onSend = (name, yourComment) => {

    const commentData = {
      name: name,
      yourComment: yourComment
    }
    const url = 'https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments'

    console.log(JSON.stringify(commentData))        //Проверка

    fetch(url, {                                  //Отправка нового коммента
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
      .then(data => {
        fetchData()
      })
  }
  //
  const handleKeyPress = (event) => {
    if(event.keyCode === 27){
      onCloseModal()
    } else
    console.log('Нажми Esc для выхода')
  }

    //
    return (
        <div className={'modal-window'}
             onKeyUp={handleKeyPress}
             tabIndex="1"
        >
          <div
            className={'black-div'}
            onClick={onCloseModal}
          />

          {
            (modalWindowData !== null)
              ? (
                <div className="content">
                  <img
                    className={'modal-picture'}
                    src={modalWindowData.url}
                  />

                  <div className={'modal-comment-container'}>
                    {
                      modalWindowData.comments.map(i => (
                        <div className={'modal-comment-item'}>
                          <div className={"modal-comment-date"}>
                            {
                              parseDate(i.date)
                            }
                          </div>
                          <div className={'modal-comment'}>
                            {
                              i.text
                            }
                          </div>
                        </div>
                      ))
                    }
                  </div>

                  <button
                    className={'modal-close-btn'}
                    onClick={onCloseModal}
                  >
                    <img
                      src={CloseIcon}
                    />
                  </button>

                  <div className={'modal-new-comment'}>
                    {
                      inputs.map(i => (
                        <NewComment
                          defaultValue={i.defaultValue}
                          getter={i.getter}
                          setter={i.setter}
                        />
                      ))
                    }

                    <button
                      className={'send-comment-btn'}
                      onClick={() => onSend(name, yourComment)}
                    >
                      Оставить комментарий
                    </button>

                  </div>
                </div>
              )
              : null
          }
        </div>
    )
}