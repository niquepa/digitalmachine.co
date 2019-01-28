import React from 'react';
import PropTypes from 'prop-types';

const FormLoader = (props) => {
  const visible = props.isVisible ? 'block' : 'none';

  return (
    <div id="loader" style={{ display: visible }}>
      <svg
        width="200"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-pacman"
        style={{
          backgroundColor:
            'rgba(0, 0, 0, 0)',
        }}
      >
        <g display="block" fill="#0a0a0a">
          <circle cx="60" cy="50" r="4">
            <animate
              attributeName="cx"
              calcMode="linear"
              values="95;35"
              keyTimes="0;1"
              dur="1"
              begin="-0.67s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              calcMode="linear"
              values="0;1;1"
              keyTimes="0;0.2;1"
              dur="1"
              begin="-0.67s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="50" r="4">
            <animate
              attributeName="cx"
              calcMode="linear"
              values="95;35"
              keyTimes="0;1"
              dur="1"
              begin="-0.33s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              calcMode="linear"
              values="0;1;1"
              keyTimes="0;0.2;1"
              dur="1"
              begin="-0.33s"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="60" cy="50" r="4">
            <animate
              attributeName="cx"
              calcMode="linear"
              values="95;35"
              keyTimes="0;1"
              dur="1"
              begin="0s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="fill-opacity"
              calcMode="linear"
              values="0;1;1"
              keyTimes="0;0.2;1"
              dur="1"
              begin="0s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
        <g fill="#D4AF37">
          <path d="M50 50L20 50A30 30 0 0 0 80 50Z" transform="translate(-15)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;45 50 50;0 50 50"
              keyTimes="0;0.5;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
          </path>
          <path d="M50 50L20 50A30 30 0 0 1 80 50Z" transform="translate(-15)">
            <animateTransform
              attributeName="transform"
              type="rotate"
              calcMode="linear"
              values="0 50 50;-45 50 50;0 50 50"
              keyTimes="0;0.5;1"
              dur="1s"
              begin="0s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>
    </div>
  );
};

FormLoader.propTypes = {
  isVisible: PropTypes.bool,
};

export default FormLoader;
