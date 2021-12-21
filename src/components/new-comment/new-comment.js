import React from "react";
import './new-comment.css';


export const NewComment = ({defaultValue, getter, setter}) => {

  const onInputChange = (event) => {
    const value = event.target.value

    setter(value)
  }

    return (
        <div className={'new-comment'}>
            <input
              className={'input-comments'}
              placeholder={defaultValue}
              value={getter}
              min={1}
              type="text"
              onChange={onInputChange}
              required
              autoFocus={'getter'}
            />
        </div>
    )
}