"use client"

//I just created this component to not waste time with the spinner
//This is just rendering a svg spinner
export function Spinner() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-rolling" style={{ background: 'none' }}>
    <circle className="loader-svg" cx="50" cy="50" fill="none" stroke="#fadf4b" strokeWidth="var(--stroke-width)" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(159.821 50 50)">
      <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.6s" begin="0s" repeatCount="indefinite" />
    </circle>

    <style>
      {`
        /* Config */
        :root {
          --color: #012353;
          --stroke-width: 7;
        }

        /* EDGE BROWSER ROTATING SVG ANIMATION FIX */
        @supports (-ms-ime-align: auto) {
          .loader-svg {
            -webkit-animation: rotation 0.6s infinite linear;
            animation: rotation 0.6s infinite linear;
            -webkit-transform-origin: center;
            -ms-transform-origin: center;
            transform-origin: center;
          }

          @-webkit-keyframes rotation {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
            }
          }

          @keyframes rotation {
            from {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            to {
              -webkit-transform: rotate(359deg);
              transform: rotate(359deg);
            }
          }
        }
      `}
    </style>
  </svg>
  )
}
