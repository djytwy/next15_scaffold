import * as React from 'react';
import styles from './icon.module.scss';

type Props = React.HTMLAttributes<HTMLOrSVGElement> & {};

const SvgComponent: React.FC<Props> = (props) => (
  <svg
    {...props}
    className={`${styles['svg-icon']} ${props.className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="153"
    height="43"
    viewBox="0 0 153 43"
    fill="currentColor"
  >
    <g clip-path="url(#clip0_5398_4979)">
      <path
        d="M54.3588 27.6555H58.2401L55.6357 42.9251H51.7375L54.3588 27.6555ZM69.1084 39.3053L68.4931 42.9251H57.334L56.2847 39.3053H69.1084Z"
        fill="white"
      />
      <path
        d="M96.7409 27.6348H110.749C110.883 27.6248 111.019 27.6455 111.144 27.6953C111.269 27.7451 111.381 27.8227 111.471 27.922C111.561 28.0213 111.627 28.1398 111.663 28.2682C111.699 28.3966 111.705 28.5314 111.68 28.6624L109.607 40.8364L106.956 42.9624H90.2131L92.8259 27.6348H96.7409L94.7476 39.326H105.949L107.323 31.267H97.7944L96.7409 27.6348Z"
        fill="white"
      />
      <path
        d="M116.054 39.3304H126.088L128.094 27.5767H131.988L129.595 41.6146C129.509 41.9933 129.296 42.3319 128.989 42.5747C128.683 42.8175 128.302 42.9499 127.909 42.9501H117.087L116.054 39.3304Z"
        fill="white"
      />
      <path
        d="M150.952 33.0644C151.086 33.0546 151.221 33.0753 151.346 33.1249C151.47 33.1745 151.582 33.2517 151.672 33.3505C151.762 33.4493 151.828 33.5671 151.864 33.695C151.901 33.8228 151.907 33.9573 151.883 34.088L150.556 41.8766C150.492 42.1624 150.332 42.4186 150.103 42.6042C149.874 42.7898 149.588 42.894 149.292 42.9001H131.436L133.724 39.2804H147.113L147.534 36.6842H133.581C133.447 36.6933 133.313 36.6721 133.189 36.6222C133.064 36.5723 132.953 36.4951 132.864 36.3963C132.774 36.2976 132.709 36.18 132.673 36.0525C132.636 35.925 132.63 35.7909 132.654 35.6606L133.096 33.0644H150.952Z"
        fill="white"
      />
      <path d="M153 27.6306L150.712 31.2545H133.438L134.057 27.6306H153Z" fill="white" />
      <path d="M114.158 27.5767H118.056L115.439 42.9293H111.537L114.158 27.5767Z" fill="white" />
      <path
        d="M74.9661 39.3802H85L87.0018 27.6265H90.9041L88.5104 41.6644C88.4252 42.0431 88.2117 42.3817 87.9053 42.6245C87.5988 42.8673 87.2177 42.9997 86.8248 42.9999H76.0028L74.9661 39.3802Z"
        fill="white"
      />
      <path d="M73.0655 27.6265H76.9678L74.3508 42.9792H70.4485L73.0655 27.6265Z" fill="white" />
      <path
        d="M90.5627 8.79971H86.5213L84.6334 14.9824L83.4745 13.4721H77.7685L92.1767 0.141461L92.3327 0H87.0565L71.9908 13.626L71.974 13.6427L71.1227 16.9129L71.0974 17.0169H83.9886L81.7466 24.3937H85.7712L88.0553 17.0169H92.8974L95.2826 13.4721H89.1383L90.5627 8.79971Z"
        fill="white"
      />
      <path
        d="M59.6771 20.853L60.8613 16.9753H69.2981L70.2547 13.4721H61.8769L62.7155 10.231L62.724 10.1977L62.1677 9.41548L61.9233 9.00358H74.5194L78.4766 5.46289H60.2924L56.546 9.00358H59.0871L54.5906 24.0234L54.4768 24.3937H74.5026L72.8253 20.853H59.6771Z"
        fill="white"
      />
      <path
        d="M96.273 5.31727L96.9641 2.94572L96.4373 2.1344H100.925L102.598 0H95.3585L93.2092 7.34765L93.1755 7.45167H101.486L100.386 5.31727H96.273Z"
        fill="white"
      />
      <path
        d="M14.9182 7.26025L25.3609 12.8355L25.4115 22.5589L21.1257 24.9928L15.091 28.5044"
        fill="url(#paint0_linear_5398_4979)"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.18121 37.1003L0.0758552 15.0739L0 0.0915527L10.3753 5.74167L10.4512 20.9238L10.4765 25.904L10.5017 31.1506"
        fill="url(#paint1_linear_5398_4979)"
      />
      <path
        d="M15.0911 28.5044L25.479 34.346L25.5844 34.2835L29.9418 31.7747L44.4976 23.2121L34.1223 17.3623L25.5296 22.4882L15.0911 28.5044Z"
        fill="url(#paint2_linear_5398_4979)"
      />
      <g style={{ mixBlendMode: 'multiply' }} opacity="0.35">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M25.403 21.4355L25.4114 22.5589L15.0909 28.5044L15.0867 27.3811L25.403 21.4355Z"
          fill="#702782"
        />
      </g>
      <g style={{ mixBlendMode: 'multiply' }} opacity="0.35">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4975 30.0271L10.5017 31.1505L0.181216 37.1002L0.177002 35.9768L10.4975 30.0271Z"
          fill="#702782"
        />
      </g>
      <path
        d="M34.2192 33.0187L34.1096 12.3071L44.5524 17.8616V18.5689L44.5987 26.9567"
        fill="url(#paint3_linear_5398_4979)"
      />
      <path
        d="M0.181152 37.1003L10.5017 31.1506L0.181152 37.1003L10.5059 42.9793L20.877 37.0005L10.5017 31.1506"
        fill="url(#paint4_linear_5398_4979)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_5398_4979"
        x1="21.1131"
        y1="10.4681"
        x2="17.1983"
        y2="29.2569"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FB1E2F" />
        <stop offset="0.06" stop-color="#FB314E" />
        <stop offset="0.2" stop-color="#FC5A90" />
        <stop offset="0.31" stop-color="#FC73B9" />
        <stop offset="0.36" stop-color="#FC7DC9" />
        <stop offset="0.47" stop-color="#F879CE" />
        <stop offset="0.6" stop-color="#EC6DDD" />
        <stop offset="0.74" stop-color="#D85AF4" />
        <stop offset="0.76" stop-color="#D456F9" />
        <stop offset="1" stop-color="#B232FC" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_5398_4979"
        x1="6.88597"
        y1="3.99421"
        x2="2.64064"
        y2="34.9474"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FB1E2F" />
        <stop offset="0.02" stop-color="#FB2539" />
        <stop offset="0.15" stop-color="#FB4D73" />
        <stop offset="0.27" stop-color="#FC6A9D" />
        <stop offset="0.36" stop-color="#FC7BB6" />
        <stop offset="0.41" stop-color="#FC82C0" />
        <stop offset="0.49" stop-color="#F77DC7" />
        <stop offset="0.61" stop-color="#EA6EDA" />
        <stop offset="0.75" stop-color="#D456F9" />
        <stop offset="1" stop-color="#B232FC" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_5398_4979"
        x1="30.161"
        y1="39.4219"
        x2="29.5653"
        y2="16.8585"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.29" stop-color="#78BFFB" />
        <stop offset="0.35" stop-color="#7CBAFB" />
        <stop offset="0.41" stop-color="#88ABFB" />
        <stop offset="0.49" stop-color="#9C94FA" />
        <stop offset="0.55" stop-color="#B377FA" />
        <stop offset="0.64" stop-color="#B773FA" />
        <stop offset="0.73" stop-color="#C466F9" />
        <stop offset="0.8" stop-color="#D456F9" />
        <stop offset="0.97" stop-color="#B232FC" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_5398_4979"
        x1="40.4225"
        y1="15.0323"
        x2="36.4741"
        y2="32.5289"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FB1E2F" />
        <stop offset="0.06" stop-color="#FB314E" />
        <stop offset="0.2" stop-color="#FC5A90" />
        <stop offset="0.31" stop-color="#FC73B9" />
        <stop offset="0.36" stop-color="#FC7DC9" />
        <stop offset="0.47" stop-color="#F879CE" />
        <stop offset="0.6" stop-color="#EC6DDD" />
        <stop offset="0.74" stop-color="#D85AF4" />
        <stop offset="0.76" stop-color="#D456F9" />
        <stop offset="1" stop-color="#B232FC" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_5398_4979"
        x1="15.2089"
        y1="43.8072"
        x2="3.73411"
        y2="26.7992"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stop-color="#78BFFB" />
        <stop offset="0.19" stop-color="#7CBAFB" />
        <stop offset="0.31" stop-color="#88ABFB" />
        <stop offset="0.43" stop-color="#9C94FA" />
        <stop offset="0.55" stop-color="#B377FA" />
        <stop offset="0.64" stop-color="#C466F9" />
        <stop offset="0.71" stop-color="#D456F9" />
        <stop offset="0.97" stop-color="#B232FC" />
      </linearGradient>
      <clipPath id="clip0_5398_4979">
        <rect width="153" height="43" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
