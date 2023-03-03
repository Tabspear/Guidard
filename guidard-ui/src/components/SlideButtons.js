import React, { useState } from "react";
import Hardware from "../img/jelleke-vanooteghem-Hardware-unsplash.jpg";
import Grocery from "../img/Grocery.jpg";
import Beauty from "../img/Beauty.jpg";
import Slide from "./Slide";
import "./Slider.css";
const images = [
  {
    id: 0,
    title: "Hardware Store",
    img: Hardware,
  },
  {
    id: 1,
    title: "Beauty Store",
    img: Beauty,
  },
  {
    id: 2,
    title: "Grocery Store",
    img: Grocery,
  },
];

const SlideButtons = () => {
  const [show, setShow] = useState(false);
  const [slide, setSlide] = useState(0);

  const handleClick = () => {
    setShow((prevState) => !prevState);
    setSlide((prevState) => prevState + 1);
  };

  const handleImageRightChange = () => {
    if (slide !== images.length) {
      setSlide((prevState) => prevState + 1);
    } else if (slide === images.length) {
      setSlide((prevState) => (prevState = 0));
    }
  };
  const handleImageLeftChange = () => {
    if (slide !== 0) {
      setSlide((prevState) => prevState - 1);
    } else if (slide === images.length) {
      setSlide(images.length);
    }
  };

  return (
    <>
      {images.map((item, index) => {
        return (
          <Slide
            style={{ display: index === slide ? "block" : "none" }}
            key={item.id.toString}
            itemTitle={item.title}
            itemImage={item.img}
          />
        );
      })}

      <div className="svgWrapper">
        <svg
          width="50"
          height="51"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleImageLeftChange}
        >
          <g filter="url(#filter0_d_0_401)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15 21.4507C9.78876 21.4507 5.54939 17.2113 5.54939 12.0001C5.54939 6.78861 9.78876 2.54924 15 2.54924C20.2112 2.54924 24.4506 6.78861 24.4506 12.0001C24.4506 17.2113 20.2112 21.4507 15 21.4507M15 0.999847C8.93434 0.999847 4 5.93441 4 12.0001C4 18.0655 8.93434 23.0001 15 23.0001C21.0657 23.0001 26 18.0655 26 12.0001C26 5.93441 21.0657 0.999847 15 0.999847"
              fill="#121212"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.1374 6.39126C16.8347 6.08861 16.3446 6.08861 16.042 6.39126L11.041 11.3918C10.8958 11.537 10.814 11.7342 10.814 11.9395C10.814 12.1448 10.8958 12.342 11.041 12.4872L16.042 17.4882C16.1933 17.6395 16.3914 17.7151 16.5897 17.7151C16.788 17.7151 16.9861 17.6395 17.1374 17.4882C17.44 17.1855 17.44 16.6954 17.1374 16.3927L12.6841 11.9395L17.1374 7.48668C17.44 7.18403 17.44 6.69391 17.1374 6.39126"
              fill="#121212"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_401"
              x="-1"
              y="0"
              width="32"
              height="32"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_401"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_401"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span onClick={handleClick}>
          {show ? (
            <svg
              width="50"
              height="51"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hidden"
            >
              <rect width="24" height="24" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.9997 2.54935C17.2108 2.54935 21.45 6.78859 21.45 11.9999C21.45 17.211 17.2108 21.4507 11.9997 21.4507C6.78859 21.4507 2.54912 17.211 2.54912 11.9999C2.54912 6.78859 6.78859 2.54935 11.9997 2.54935ZM11.9997 23C18.0652 23 22.9993 18.0652 22.9993 11.9999C22.9993 5.93442 18.0652 1 11.9997 1C5.93419 1 1 5.93442 1 11.9999C1 18.0652 5.93419 23 11.9997 23Z"
                fill="#121212"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.9124 8.80896L14.0431 11.9397L10.9124 15.0705V8.80896ZM9.84117 17.6563C9.93693 17.696 10.0379 17.7152 10.1377 17.7152C10.3389 17.7152 10.5372 17.6366 10.6854 17.4882L15.6862 12.4874C15.8314 12.3422 15.9132 12.145 15.9132 11.9397C15.9132 11.7344 15.8314 11.5373 15.6862 11.392L10.6854 6.39121C10.4641 6.16988 10.1307 6.1037 9.84117 6.2234C9.55162 6.34333 9.36304 6.62565 9.36304 6.9389V16.9405C9.36304 17.2538 9.55162 17.5361 9.84117 17.6563Z"
                fill="#121212"
              />
            </svg>
          ) : (
            <svg
              width="50"
              height="51"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0002 2.54936C17.2114 2.54936 21.4509 6.78864 21.4509 12C21.4509 17.2111 17.2114 21.4509 12.0002 21.4509C6.78909 21.4509 2.54913 17.2111 2.54913 12C2.54913 6.78864 6.78909 2.54936 12.0002 2.54936ZM12.0002 23.0002C18.0658 23.0002 23 18.0653 23 12C23 5.93446 18.0658 1 12.0002 1C5.93469 1 1 5.93446 1 12C1 18.0653 5.93469 23.0002 12.0002 23.0002Z"
                fill="#121212"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.97585 17.7154C10.4036 17.7154 10.7505 17.3685 10.7505 16.9407V6.8875C10.7505 6.45996 10.4036 6.11282 9.97585 6.11282C9.54808 6.11282 9.20117 6.45996 9.20117 6.8875V16.9407C9.20117 17.3685 9.54808 17.7154 9.97585 17.7154Z"
                fill="#121212"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.0241 17.7154C14.4518 17.7154 14.7987 17.3685 14.7987 16.9407V6.8875C14.7987 6.45996 14.4518 6.11282 14.0241 6.11282C13.5963 6.11282 13.2494 6.45996 13.2494 6.8875V16.9407C13.2494 17.3685 13.5963 17.7154 14.0241 17.7154Z"
                fill="#121212"
              />
            </svg>
          )}
        </span>

        <svg
          width="50"
          height="51"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={handleImageRightChange}
        >
          <rect width="24" height="24" fill="white" fill-opacity="0.01" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 21.4507C6.78876 21.4507 2.54939 17.2113 2.54939 12.0001C2.54939 6.78861 6.78876 2.54924 12 2.54924C17.2112 2.54924 21.4506 6.78861 21.4506 12.0001C21.4506 17.2113 17.2112 21.4507 12 21.4507ZM12 0.999847C5.93434 0.999847 1 5.93441 1 12.0001C1 18.0655 5.93434 23.0001 12 23.0001C18.0657 23.0001 23 18.0655 23 12.0001C23 5.93441 18.0657 0.999847 12 0.999847Z"
            fill="#121212"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.5636 6.39126C10.261 6.08861 9.77085 6.08861 9.4682 6.39126C9.16555 6.69391 9.16555 7.18403 9.4682 7.48668L13.9215 11.9395L9.4682 16.3927C9.16555 16.6954 9.16555 17.1855 9.4682 17.4882C9.61952 17.6395 9.8176 17.7151 10.0159 17.7151C10.2142 17.7151 10.4123 17.6395 10.5636 17.4882L15.5646 12.4872C15.7098 12.342 15.7916 12.1448 15.7916 11.9395C15.7916 11.7342 15.7098 11.537 15.5646 11.3918L10.5636 6.39126Z"
            fill="#121212"
          />
        </svg>
      </div>
    </>
  );
};

export default SlideButtons;
