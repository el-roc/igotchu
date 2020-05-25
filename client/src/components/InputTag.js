import React, { useState, useRef } from "react";
import ReactDOM from 'react-dom';
import '../css/InputTags.css';

function InputTag() {
    // set state hook from react
  let tagInput = useRef(null);
  const [tagState, setTags] = useState({ tags: ["Tags", "Input"] });
  const {tags} = tagState;
  const removeTag = (i) => {
    const newTags = [tags];
    newTags.splice(i, 1);
    setTags({ tags: newTags });
  };
  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags({ tags: [tags, val] });
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };
  return (
    <div className="input-tag">
      <ul className="input-tag__tags">
        {tags.map((tag, i) => (
          <li key={tag}>
            {tag}
            <button
              type="button"
              onClick={() => {
                removeTag(i);
              }}
            >
              +
            </button>
          </li>
        ))}
        <li className="input-tag__tags__input">
          <input ref={tagInput}
            type="text"
            onKeyDown={inputKeyDown}
            ref={(c) => {
              tagInput = c;
            }}
          />
        </li>
      </ul>
    </div>
  );
}
ReactDOM.render(<InputTag />, document.getElementById("root"));

export default InputTag;
