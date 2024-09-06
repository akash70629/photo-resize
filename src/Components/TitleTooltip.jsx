import React, { useState } from "react";

const TitleTooltip = () => {
  const [tooltip, setTooltip] = useState({ visible: false, text: '', x: 0, y: 0 });

  const clicked = (event) => {
    if(window.innerWidth < 912){
        handleClick(event);
    }
  }
  const handleClick = (event) => {
    const titleText = event.target.getAttribute('title');

    
    
    setTooltip({
      visible: true,
      text: titleText,
      x: event.pageX,
      y: event.pageY + 20,
    });

    setTimeout(() => {
      setTooltip({ visible: false, text: '', x: 0, y: 0 });
    }, 3000);
  };

  return (
    <>
      <span
        className="ibutton"
        title="Locks width and height to make the final image proportional to the original"
        onClick={clicked}
      >
        ⓘ
      </span>

      {tooltip.visible && (
        <div
          style={{
            position: 'absolute',
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
            backgroundColor: '#333',
            color: 'white',
            padding: '5px',
            borderRadius: '0px',
            fontSize: '11.7px',
            zIndex: 1000,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
};
 export default TitleTooltip
