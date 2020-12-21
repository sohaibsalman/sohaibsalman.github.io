import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "./preloader.css";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    zIndex: 9999,
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
  },
  inner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

const Preloader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.inner}>
        <svg
          className="preloader"
          width="500"
          height="250"
          viewBox="0 0 102 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1"
            maskUnits="userSpaceOnUse"
            x="0.624001"
            y="0.159998"
            width="101"
            height="32"
            fill="black"
          >
            <rect
              fill="white"
              x="0.624001"
              y="0.159998"
              width="101"
              height="32"
            />
            <path d="M10.216 27.416C10.152 27.416 10.088 27.416 10.024 27.416C7.56 27.416 5.544 26.728 3.976 25.352C2.408 23.944 1.624 22.136 1.624 19.928C1.624 19.128 1.72 18.296 1.912 17.432C2.68 14.424 4.264 11.912 6.664 9.896C8.296 8.552 10.44 7.336 13.096 6.248C15.784 5.128 18.536 4.568 21.352 4.568C26.472 4.568 29.544 5.688 30.568 7.928C30.76 8.344 30.856 8.888 30.856 9.56C30.856 10.232 30.536 11.08 29.896 12.104C29.896 12.264 29.896 12.424 29.896 12.584C29.896 13.768 29.512 15.128 28.744 16.664C27.88 18.2 26.808 19.576 25.528 20.792C23.416 22.712 21 24.296 18.28 25.544C15.336 26.792 12.648 27.416 10.216 27.416ZM22.072 8.12C21.368 8.12 21.016 8.008 21.016 7.784C21.016 7.528 21.928 7.4 23.752 7.4C25.608 7.4 27.032 7.8 28.024 8.6C29.016 9.368 29.608 10.312 29.8 11.432C30.184 10.76 30.376 10.136 30.376 9.56C30.376 8.28 29.432 7.288 27.544 6.584C25.688 5.848 23.64 5.48 21.4 5.48C18.968 5.48 16.952 5.768 15.352 6.344C12.696 7.304 10.504 8.52 8.776 9.992C7.016 11.56 5.592 13.368 4.504 15.416C3.448 17.432 2.92 19.32 2.92 21.08C2.92 22.84 3.48 24.232 4.6 25.256C5.72 26.28 7.464 26.792 9.832 26.792C12.2 26.792 14.632 26.184 17.128 24.968C19.624 23.72 21.736 22.312 23.464 20.744C25.736 18.696 27.32 16.52 28.216 14.216C25.752 17.096 23.048 19.272 20.104 20.744C19.048 21.288 18.264 21.56 17.752 21.56C17.272 21.56 16.92 21.528 16.696 21.464C16.12 21.272 15.672 20.776 15.352 19.976C15.064 19.144 14.904 18.376 14.872 17.672C14.872 16.968 14.888 16.6 14.92 16.568C14.696 16.888 14.44 17.256 14.152 17.672C13.896 18.088 13.656 18.44 13.432 18.728C13.24 19.016 13.032 19.304 12.808 19.592C12.584 19.88 12.328 20.168 12.04 20.456C11.784 20.712 11.528 20.936 11.272 21.128C10.76 21.544 10.264 21.72 9.784 21.656C8.728 21.496 8.2 20.792 8.2 19.544C8.2 18.264 8.6 16.856 9.4 15.32C10.2 13.784 11.272 12.392 12.616 11.144C13.96 9.864 15.304 9.224 16.648 9.224C17.288 9.224 17.896 9.384 18.472 9.704C19.048 10.024 19.336 10.536 19.336 11.24C19.336 11.912 19.032 12.296 18.424 12.392C18.648 12.008 18.76 11.656 18.76 11.336C18.76 11.016 18.6 10.776 18.28 10.616C17.992 10.456 17.72 10.376 17.464 10.376C16.792 10.376 15.976 10.776 15.016 11.576C14.088 12.344 13.16 13.368 12.232 14.648C11.304 15.928 10.648 17.032 10.264 17.96C9.88 18.888 9.688 19.576 9.688 20.024C9.688 20.44 9.832 20.648 10.12 20.648C10.472 20.648 10.968 20.36 11.608 19.784C12.248 19.176 13.512 17.544 15.4 14.888C15.88 14.216 16.248 13.88 16.504 13.88C16.792 13.88 16.92 14.248 16.888 14.984C16.856 15.72 16.84 16.36 16.84 16.904C16.84 19.432 17.352 20.696 18.376 20.696C18.76 20.696 19.24 20.552 19.816 20.264C23.464 18.28 26.344 15.976 28.456 13.352C28.584 12.872 28.648 12.344 28.648 11.768C28.648 9.272 27.064 8.024 23.896 8.024L22.072 8.12Z" />
            <path d="M32.9387 30.344C31.7867 30.344 31.2108 30.056 31.2108 29.48C31.2108 29.288 31.3547 29.096 31.6427 28.904C31.8987 28.68 32.2828 28.552 32.7948 28.52C35.8988 28.264 37.5628 28.104 37.7868 28.04C38.0108 27.688 38.1227 27.288 38.1227 26.84C38.1227 26.36 37.6908 25.752 36.8268 25.016C35.9628 24.28 35.3388 23.512 34.9548 22.712C34.5707 21.912 34.3787 21.272 34.3787 20.792C34.3787 20.312 34.5067 19.864 34.7627 19.448C35.8827 17.592 37.1947 16.664 38.6987 16.664C39.9787 16.664 40.8108 17.096 41.1948 17.96C41.2908 18.216 41.2908 18.44 41.1948 18.632C41.1308 18.824 41.0507 18.904 40.9548 18.872C40.8587 18.84 40.7947 18.744 40.7627 18.584C40.6987 18.008 40.4268 17.72 39.9468 17.72C39.6908 17.72 39.3868 17.8 39.0348 17.96C37.7228 18.472 36.8108 19.368 36.2988 20.648C36.1708 20.968 36.1068 21.304 36.1068 21.656C36.1068 22.008 36.2187 22.44 36.4427 22.952C36.6667 23.464 37.0347 23.944 37.5467 24.392C38.4427 25.16 38.8908 25.96 38.8908 26.792C38.8908 27.112 38.8107 27.432 38.6507 27.752C40.2827 26.984 41.5467 26.28 42.4427 25.64L42.5387 25.688C42.5068 26.104 41.7068 26.728 40.1388 27.56C39.6268 27.848 39.1788 28.104 38.7948 28.328L38.2668 28.664C37.9468 29.272 36.9068 29.736 35.1468 30.056C34.2508 30.248 33.5147 30.344 32.9387 30.344Z" />
            <path d="M53.5424 20.36L55.7984 20.12C55.8944 20.12 55.9424 20.152 55.9424 20.216C55.9424 20.28 55.8944 20.36 55.7984 20.456L55.4144 20.792C54.6464 21.144 53.8624 21.32 53.0624 21.32C52.2624 21.32 51.7344 21.256 51.4784 21.128C51.4784 21.192 51.4784 21.368 51.4784 21.656C51.4784 21.944 51.3184 22.568 50.9984 23.528C50.7104 24.488 50.2624 25.496 49.6544 26.552C49.0464 27.608 48.3904 28.376 47.6864 28.856C46.9824 29.336 46.4544 29.576 46.1024 29.576C45.7824 29.576 45.4304 29.528 45.0464 29.432C44.6944 29.336 44.2944 29 43.8464 28.424C43.3344 27.848 43.0784 27.048 43.0784 26.024C43.0784 24.968 43.2384 23.896 43.5584 22.808C44.7424 19.224 46.1984 17.352 47.9264 17.192C48.1504 16.936 48.4224 16.808 48.7424 16.808C49.0944 16.808 49.5424 16.968 50.0864 17.288C51.0464 17.896 51.5744 18.648 51.6704 19.544C52.1184 20.088 52.7424 20.36 53.5424 20.36ZM48.4544 18.824C47.9104 18.952 47.3184 19.576 46.6784 20.696C46.0384 21.816 45.5584 22.936 45.2384 24.056C44.9504 25.176 44.8064 26.136 44.8064 26.936C44.8064 27.704 45.0944 28.232 45.6704 28.52C45.8304 28.584 46.0064 28.616 46.1984 28.616C46.9664 28.616 47.8304 27.864 48.7904 26.36C49.3344 25.496 49.7664 24.536 50.0864 23.48C50.4064 22.424 50.5664 21.752 50.5664 21.464C50.5664 21.176 50.5504 20.984 50.5184 20.888C49.9104 20.792 49.4304 20.568 49.0784 20.216C48.7264 19.864 48.5344 19.544 48.5024 19.256L48.4544 18.824Z" />
            <path d="M60.9033 24.776C60.9033 26.792 61.2553 27.8 61.9593 27.8C62.9193 27.8 64.2312 26.76 65.8952 24.68C66.2152 24.296 66.3912 24.088 66.4232 24.056C66.4872 23.992 66.5512 24.056 66.6152 24.248L66.6633 24.344C66.4073 24.984 65.6232 25.944 64.3112 27.224C63.0312 28.504 61.9432 29.144 61.0472 29.144C60.7272 29.144 60.4233 29.064 60.1353 28.904C59.3353 28.52 58.9352 27.112 58.9352 24.68C58.9352 24.296 58.9673 23.768 59.0312 23.096C59.0953 22.392 59.1593 22.008 59.2233 21.944C59.2233 21.912 59.1753 21.944 59.0793 22.04C59.0153 22.104 58.8873 22.248 58.6953 22.472C58.5353 22.664 58.3593 22.872 58.1673 23.096C57.9753 23.32 57.7513 23.608 57.4953 23.96C57.2393 24.312 56.9992 24.616 56.7752 24.872C56.1992 25.512 55.7513 26.088 55.4313 26.6C55.3353 27.752 54.9193 28.552 54.1833 29C54.0233 29.096 53.8953 29.144 53.7993 29.144C53.7353 29.144 53.7033 28.856 53.7033 28.28C53.7033 27.672 53.9113 26.136 54.3273 23.672C54.7433 21.208 55.1273 19.512 55.4793 18.584C54.4873 18.84 53.9592 19.24 53.8952 19.784C53.8312 20.168 53.7192 20.36 53.5592 20.36C53.4312 20.328 53.3672 20.184 53.3672 19.928C53.3672 18.936 54.1833 18.2 55.8153 17.72C56.6473 15 57.8632 12.312 59.4632 9.656C61.0632 7 62.8393 4.936 64.7913 3.464C66.7433 1.928 68.7272 1.16 70.7432 1.16C71.6072 1.16 72.4553 1.336 73.2873 1.688C74.5353 2.232 75.4153 3.144 75.9273 4.424C76.1513 5 76.2633 5.592 76.2633 6.2C76.2633 8.056 75.3513 9.672 73.5273 11.048C72.2473 12.04 70.5353 13.032 68.3913 14.024C66.2473 14.984 64.4873 15.704 63.1113 16.184C61.7673 16.632 59.7832 17.272 57.1592 18.104C56.6472 19.48 56.1032 22.04 55.5272 25.784C55.9752 25.112 56.6793 24.168 57.6393 22.952C58.5993 21.704 59.2232 20.888 59.5112 20.504C59.6712 19.8 60.0392 19.24 60.6152 18.824C61.2232 18.376 61.5272 18.456 61.5272 19.064C61.5272 19.224 61.4152 19.96 61.1912 21.272C60.9992 22.584 60.9033 23.752 60.9033 24.776ZM75.4953 4.952C74.8873 3.352 73.3672 2.552 70.9352 2.552C68.6632 2.552 66.4393 3.336 64.2633 4.904C63.3033 5.576 62.2312 6.792 61.0472 8.552C60.3752 9.576 59.7993 10.696 59.3193 11.912C58.8713 13.096 58.4553 14.216 58.0713 15.272C57.7193 16.296 57.4792 16.968 57.3512 17.288C59.4952 16.68 62.2633 15.592 65.6553 14.024C69.0793 12.424 71.6072 11 73.2393 9.752C74.8713 8.472 75.6872 7.224 75.6872 6.008C75.6872 5.656 75.6233 5.304 75.4953 4.952Z" />
            <path d="M69.8402 22.184C68.9122 23.432 68.2563 24.52 67.8723 25.448C67.4883 26.376 67.2962 27.064 67.2962 27.512C67.2962 27.96 67.4402 28.184 67.7282 28.184C68.5922 28.184 70.3363 26.264 72.9603 22.424C73.9843 21.112 74.4963 21.128 74.4963 22.472C74.4323 23.304 74.4003 24.008 74.4003 24.584C74.4003 27.016 74.9122 28.232 75.9362 28.232C77.0242 28.232 78.3523 27.352 79.9202 25.592C80.0162 25.496 80.1282 25.56 80.2562 25.784C80.1602 26.008 79.8243 26.408 79.2483 26.984C78.7043 27.528 78.0162 28.024 77.1842 28.472C76.3523 28.92 75.7123 29.144 75.2643 29.144C74.8483 29.144 74.5122 29.096 74.2562 29C73.0722 28.584 72.4802 26.952 72.4802 24.104C71.2002 26.12 70.2723 27.4 69.6963 27.944C68.8003 28.776 68.0643 29.192 67.4883 29.192C67.4563 29.192 67.4083 29.192 67.3443 29.192C66.2883 29.032 65.7603 28.328 65.7603 27.08C65.7603 25.8 66.1603 24.392 66.9603 22.856C67.7923 21.288 68.8803 19.88 70.2243 18.632C71.5683 17.384 72.9122 16.76 74.2562 16.76C74.8962 16.76 75.5203 16.92 76.1283 17.24C76.6723 17.56 76.9443 18.072 76.9443 18.776C76.9443 19.448 76.6402 19.832 76.0322 19.928C76.2562 19.544 76.3682 19.192 76.3682 18.872C76.3682 18.52 76.2083 18.264 75.8883 18.104C75.5683 17.944 75.2803 17.864 75.0243 17.864C73.6483 17.864 71.9202 19.304 69.8402 22.184Z" />
            <path d="M84.1709 14.264C84.3949 14.264 84.5069 14.344 84.5069 14.504C84.5069 14.632 84.3149 14.92 83.9309 15.368C83.0989 16.392 82.2829 16.584 81.4829 15.944C81.3549 15.848 81.3389 15.752 81.4349 15.656C82.5549 14.728 83.4669 14.264 84.1709 14.264ZM80.4749 26.456C80.4749 27.416 80.7629 27.896 81.3389 27.896C81.6589 27.896 82.4429 27.384 83.6909 26.36C84.9709 25.304 85.6589 24.728 85.7549 24.632C85.8509 24.536 85.9309 24.52 85.9949 24.584C86.0589 24.616 86.0909 24.664 86.0909 24.728C86.0909 24.76 86.0749 24.808 86.0429 24.872C85.5629 25.672 84.5549 26.632 83.0189 27.752C81.9949 28.584 81.1309 29 80.4269 29C79.3389 29 78.7949 28.072 78.7949 26.216C78.7949 25.864 78.8269 25.368 78.8909 24.728C78.9549 24.056 79.4669 22.024 80.4269 18.632C80.4909 18.376 80.8429 18.248 81.4829 18.248C82.1549 18.248 82.4909 18.44 82.4909 18.824C82.4909 19.176 82.3629 19.656 82.1069 20.264C81.8829 20.84 81.6109 21.16 81.2909 21.224C81.1309 21.256 80.9549 22.056 80.7629 23.624C80.5709 25.192 80.4749 26.136 80.4749 26.456Z" />
            <path d="M94.9997 16.856C95.9917 16.856 96.4877 17.432 96.4877 18.584C96.4877 19.256 96.3437 20.248 96.0557 21.56C95.7677 22.872 95.1918 24.216 94.3278 25.592C93.4638 26.936 92.2157 27.976 90.5837 28.712C89.5917 29.128 88.7598 29.336 88.0878 29.336C86.1358 29.336 85.1598 28.648 85.1598 27.272C85.1598 26.664 85.3998 26.136 85.8798 25.688C86.1038 27.768 86.8878 28.808 88.2318 28.808C88.3278 28.808 88.4238 28.808 88.5198 28.808C89.3198 28.68 90.1678 28.184 91.0638 27.32C91.9918 26.424 92.7918 25.272 93.4638 23.864C94.1358 22.424 94.4717 21.064 94.4717 19.784C94.4717 18.696 94.2798 18.248 93.8958 18.44C92.4238 19.176 91.1598 20.376 90.1038 22.04C89.0478 23.672 88.5037 25.304 88.4717 26.936C88.4717 27.128 88.3758 27.224 88.1838 27.224C87.9918 27.224 87.7357 27.064 87.4157 26.744C87.0957 26.392 86.9038 26.2 86.8398 26.168C86.8398 24.664 87.2238 22.312 87.9918 19.112C88.7598 15.88 89.8158 12.968 91.1598 10.376C92.5358 7.752 94.0718 5.912 95.7678 4.856C95.9278 4.76 96.3118 4.632 96.9198 4.472C97.5278 4.312 97.9117 4.232 98.0717 4.232C98.2317 4.232 98.3277 4.248 98.3597 4.28C99.2557 4.504 99.9277 4.968 100.376 5.672C100.536 5.896 100.616 6.056 100.616 6.152C100.616 6.248 100.552 6.296 100.424 6.296C100.296 6.296 100.184 6.248 100.088 6.152C99.3838 5.576 98.5518 5.288 97.5918 5.288C97.5598 5.288 97.5118 5.288 97.4478 5.288C95.9438 5.32 94.1517 7.768 92.0717 12.632C90.0237 17.496 88.9198 20.968 88.7598 23.048C89.2078 22.28 90.0557 21.208 91.3037 19.832C92.5517 18.456 93.3518 17.624 93.7038 17.336C94.0878 17.016 94.5197 16.856 94.9997 16.856Z" />
          </mask>
          <path
            d="M10.216 27.416C10.152 27.416 10.088 27.416 10.024 27.416C7.56 27.416 5.544 26.728 3.976 25.352C2.408 23.944 1.624 22.136 1.624 19.928C1.624 19.128 1.72 18.296 1.912 17.432C2.68 14.424 4.264 11.912 6.664 9.896C8.296 8.552 10.44 7.336 13.096 6.248C15.784 5.128 18.536 4.568 21.352 4.568C26.472 4.568 29.544 5.688 30.568 7.928C30.76 8.344 30.856 8.888 30.856 9.56C30.856 10.232 30.536 11.08 29.896 12.104C29.896 12.264 29.896 12.424 29.896 12.584C29.896 13.768 29.512 15.128 28.744 16.664C27.88 18.2 26.808 19.576 25.528 20.792C23.416 22.712 21 24.296 18.28 25.544C15.336 26.792 12.648 27.416 10.216 27.416ZM22.072 8.12C21.368 8.12 21.016 8.008 21.016 7.784C21.016 7.528 21.928 7.4 23.752 7.4C25.608 7.4 27.032 7.8 28.024 8.6C29.016 9.368 29.608 10.312 29.8 11.432C30.184 10.76 30.376 10.136 30.376 9.56C30.376 8.28 29.432 7.288 27.544 6.584C25.688 5.848 23.64 5.48 21.4 5.48C18.968 5.48 16.952 5.768 15.352 6.344C12.696 7.304 10.504 8.52 8.776 9.992C7.016 11.56 5.592 13.368 4.504 15.416C3.448 17.432 2.92 19.32 2.92 21.08C2.92 22.84 3.48 24.232 4.6 25.256C5.72 26.28 7.464 26.792 9.832 26.792C12.2 26.792 14.632 26.184 17.128 24.968C19.624 23.72 21.736 22.312 23.464 20.744C25.736 18.696 27.32 16.52 28.216 14.216C25.752 17.096 23.048 19.272 20.104 20.744C19.048 21.288 18.264 21.56 17.752 21.56C17.272 21.56 16.92 21.528 16.696 21.464C16.12 21.272 15.672 20.776 15.352 19.976C15.064 19.144 14.904 18.376 14.872 17.672C14.872 16.968 14.888 16.6 14.92 16.568C14.696 16.888 14.44 17.256 14.152 17.672C13.896 18.088 13.656 18.44 13.432 18.728C13.24 19.016 13.032 19.304 12.808 19.592C12.584 19.88 12.328 20.168 12.04 20.456C11.784 20.712 11.528 20.936 11.272 21.128C10.76 21.544 10.264 21.72 9.784 21.656C8.728 21.496 8.2 20.792 8.2 19.544C8.2 18.264 8.6 16.856 9.4 15.32C10.2 13.784 11.272 12.392 12.616 11.144C13.96 9.864 15.304 9.224 16.648 9.224C17.288 9.224 17.896 9.384 18.472 9.704C19.048 10.024 19.336 10.536 19.336 11.24C19.336 11.912 19.032 12.296 18.424 12.392C18.648 12.008 18.76 11.656 18.76 11.336C18.76 11.016 18.6 10.776 18.28 10.616C17.992 10.456 17.72 10.376 17.464 10.376C16.792 10.376 15.976 10.776 15.016 11.576C14.088 12.344 13.16 13.368 12.232 14.648C11.304 15.928 10.648 17.032 10.264 17.96C9.88 18.888 9.688 19.576 9.688 20.024C9.688 20.44 9.832 20.648 10.12 20.648C10.472 20.648 10.968 20.36 11.608 19.784C12.248 19.176 13.512 17.544 15.4 14.888C15.88 14.216 16.248 13.88 16.504 13.88C16.792 13.88 16.92 14.248 16.888 14.984C16.856 15.72 16.84 16.36 16.84 16.904C16.84 19.432 17.352 20.696 18.376 20.696C18.76 20.696 19.24 20.552 19.816 20.264C23.464 18.28 26.344 15.976 28.456 13.352C28.584 12.872 28.648 12.344 28.648 11.768C28.648 9.272 27.064 8.024 23.896 8.024L22.072 8.12Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M32.9387 30.344C31.7867 30.344 31.2108 30.056 31.2108 29.48C31.2108 29.288 31.3547 29.096 31.6427 28.904C31.8987 28.68 32.2828 28.552 32.7948 28.52C35.8988 28.264 37.5628 28.104 37.7868 28.04C38.0108 27.688 38.1227 27.288 38.1227 26.84C38.1227 26.36 37.6908 25.752 36.8268 25.016C35.9628 24.28 35.3388 23.512 34.9548 22.712C34.5707 21.912 34.3787 21.272 34.3787 20.792C34.3787 20.312 34.5067 19.864 34.7627 19.448C35.8827 17.592 37.1947 16.664 38.6987 16.664C39.9787 16.664 40.8108 17.096 41.1948 17.96C41.2908 18.216 41.2908 18.44 41.1948 18.632C41.1308 18.824 41.0507 18.904 40.9548 18.872C40.8587 18.84 40.7947 18.744 40.7627 18.584C40.6987 18.008 40.4268 17.72 39.9468 17.72C39.6908 17.72 39.3868 17.8 39.0348 17.96C37.7228 18.472 36.8108 19.368 36.2988 20.648C36.1708 20.968 36.1068 21.304 36.1068 21.656C36.1068 22.008 36.2187 22.44 36.4427 22.952C36.6667 23.464 37.0347 23.944 37.5467 24.392C38.4427 25.16 38.8908 25.96 38.8908 26.792C38.8908 27.112 38.8107 27.432 38.6507 27.752C40.2827 26.984 41.5467 26.28 42.4427 25.64L42.5387 25.688C42.5068 26.104 41.7068 26.728 40.1388 27.56C39.6268 27.848 39.1788 28.104 38.7948 28.328L38.2668 28.664C37.9468 29.272 36.9068 29.736 35.1468 30.056C34.2508 30.248 33.5147 30.344 32.9387 30.344Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M53.5424 20.36L55.7984 20.12C55.8944 20.12 55.9424 20.152 55.9424 20.216C55.9424 20.28 55.8944 20.36 55.7984 20.456L55.4144 20.792C54.6464 21.144 53.8624 21.32 53.0624 21.32C52.2624 21.32 51.7344 21.256 51.4784 21.128C51.4784 21.192 51.4784 21.368 51.4784 21.656C51.4784 21.944 51.3184 22.568 50.9984 23.528C50.7104 24.488 50.2624 25.496 49.6544 26.552C49.0464 27.608 48.3904 28.376 47.6864 28.856C46.9824 29.336 46.4544 29.576 46.1024 29.576C45.7824 29.576 45.4304 29.528 45.0464 29.432C44.6944 29.336 44.2944 29 43.8464 28.424C43.3344 27.848 43.0784 27.048 43.0784 26.024C43.0784 24.968 43.2384 23.896 43.5584 22.808C44.7424 19.224 46.1984 17.352 47.9264 17.192C48.1504 16.936 48.4224 16.808 48.7424 16.808C49.0944 16.808 49.5424 16.968 50.0864 17.288C51.0464 17.896 51.5744 18.648 51.6704 19.544C52.1184 20.088 52.7424 20.36 53.5424 20.36ZM48.4544 18.824C47.9104 18.952 47.3184 19.576 46.6784 20.696C46.0384 21.816 45.5584 22.936 45.2384 24.056C44.9504 25.176 44.8064 26.136 44.8064 26.936C44.8064 27.704 45.0944 28.232 45.6704 28.52C45.8304 28.584 46.0064 28.616 46.1984 28.616C46.9664 28.616 47.8304 27.864 48.7904 26.36C49.3344 25.496 49.7664 24.536 50.0864 23.48C50.4064 22.424 50.5664 21.752 50.5664 21.464C50.5664 21.176 50.5504 20.984 50.5184 20.888C49.9104 20.792 49.4304 20.568 49.0784 20.216C48.7264 19.864 48.5344 19.544 48.5024 19.256L48.4544 18.824Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M60.9033 24.776C60.9033 26.792 61.2553 27.8 61.9593 27.8C62.9193 27.8 64.2312 26.76 65.8952 24.68C66.2152 24.296 66.3912 24.088 66.4232 24.056C66.4872 23.992 66.5512 24.056 66.6152 24.248L66.6633 24.344C66.4073 24.984 65.6232 25.944 64.3112 27.224C63.0312 28.504 61.9432 29.144 61.0472 29.144C60.7272 29.144 60.4233 29.064 60.1353 28.904C59.3353 28.52 58.9352 27.112 58.9352 24.68C58.9352 24.296 58.9673 23.768 59.0312 23.096C59.0953 22.392 59.1593 22.008 59.2233 21.944C59.2233 21.912 59.1753 21.944 59.0793 22.04C59.0153 22.104 58.8873 22.248 58.6953 22.472C58.5353 22.664 58.3593 22.872 58.1673 23.096C57.9753 23.32 57.7513 23.608 57.4953 23.96C57.2393 24.312 56.9992 24.616 56.7752 24.872C56.1992 25.512 55.7513 26.088 55.4313 26.6C55.3353 27.752 54.9193 28.552 54.1833 29C54.0233 29.096 53.8953 29.144 53.7993 29.144C53.7353 29.144 53.7033 28.856 53.7033 28.28C53.7033 27.672 53.9113 26.136 54.3273 23.672C54.7433 21.208 55.1273 19.512 55.4793 18.584C54.4873 18.84 53.9592 19.24 53.8952 19.784C53.8312 20.168 53.7192 20.36 53.5592 20.36C53.4312 20.328 53.3672 20.184 53.3672 19.928C53.3672 18.936 54.1833 18.2 55.8153 17.72C56.6473 15 57.8632 12.312 59.4632 9.656C61.0632 7 62.8393 4.936 64.7913 3.464C66.7433 1.928 68.7272 1.16 70.7432 1.16C71.6072 1.16 72.4553 1.336 73.2873 1.688C74.5353 2.232 75.4153 3.144 75.9273 4.424C76.1513 5 76.2633 5.592 76.2633 6.2C76.2633 8.056 75.3513 9.672 73.5273 11.048C72.2473 12.04 70.5353 13.032 68.3913 14.024C66.2473 14.984 64.4873 15.704 63.1113 16.184C61.7673 16.632 59.7832 17.272 57.1592 18.104C56.6472 19.48 56.1032 22.04 55.5272 25.784C55.9752 25.112 56.6793 24.168 57.6393 22.952C58.5993 21.704 59.2232 20.888 59.5112 20.504C59.6712 19.8 60.0392 19.24 60.6152 18.824C61.2232 18.376 61.5272 18.456 61.5272 19.064C61.5272 19.224 61.4152 19.96 61.1912 21.272C60.9992 22.584 60.9033 23.752 60.9033 24.776ZM75.4953 4.952C74.8873 3.352 73.3672 2.552 70.9352 2.552C68.6632 2.552 66.4393 3.336 64.2633 4.904C63.3033 5.576 62.2312 6.792 61.0472 8.552C60.3752 9.576 59.7993 10.696 59.3193 11.912C58.8713 13.096 58.4553 14.216 58.0713 15.272C57.7193 16.296 57.4792 16.968 57.3512 17.288C59.4952 16.68 62.2633 15.592 65.6553 14.024C69.0793 12.424 71.6072 11 73.2393 9.752C74.8713 8.472 75.6872 7.224 75.6872 6.008C75.6872 5.656 75.6233 5.304 75.4953 4.952Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M69.8402 22.184C68.9122 23.432 68.2563 24.52 67.8723 25.448C67.4883 26.376 67.2962 27.064 67.2962 27.512C67.2962 27.96 67.4402 28.184 67.7282 28.184C68.5922 28.184 70.3363 26.264 72.9603 22.424C73.9843 21.112 74.4963 21.128 74.4963 22.472C74.4323 23.304 74.4003 24.008 74.4003 24.584C74.4003 27.016 74.9122 28.232 75.9362 28.232C77.0242 28.232 78.3523 27.352 79.9202 25.592C80.0162 25.496 80.1282 25.56 80.2562 25.784C80.1602 26.008 79.8243 26.408 79.2483 26.984C78.7043 27.528 78.0162 28.024 77.1842 28.472C76.3523 28.92 75.7123 29.144 75.2643 29.144C74.8483 29.144 74.5122 29.096 74.2562 29C73.0722 28.584 72.4802 26.952 72.4802 24.104C71.2002 26.12 70.2723 27.4 69.6963 27.944C68.8003 28.776 68.0643 29.192 67.4883 29.192C67.4563 29.192 67.4083 29.192 67.3443 29.192C66.2883 29.032 65.7603 28.328 65.7603 27.08C65.7603 25.8 66.1603 24.392 66.9603 22.856C67.7923 21.288 68.8803 19.88 70.2243 18.632C71.5683 17.384 72.9122 16.76 74.2562 16.76C74.8962 16.76 75.5203 16.92 76.1283 17.24C76.6723 17.56 76.9443 18.072 76.9443 18.776C76.9443 19.448 76.6402 19.832 76.0322 19.928C76.2562 19.544 76.3682 19.192 76.3682 18.872C76.3682 18.52 76.2083 18.264 75.8883 18.104C75.5683 17.944 75.2803 17.864 75.0243 17.864C73.6483 17.864 71.9202 19.304 69.8402 22.184Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M84.1709 14.264C84.3949 14.264 84.5069 14.344 84.5069 14.504C84.5069 14.632 84.3149 14.92 83.9309 15.368C83.0989 16.392 82.2829 16.584 81.4829 15.944C81.3549 15.848 81.3389 15.752 81.4349 15.656C82.5549 14.728 83.4669 14.264 84.1709 14.264ZM80.4749 26.456C80.4749 27.416 80.7629 27.896 81.3389 27.896C81.6589 27.896 82.4429 27.384 83.6909 26.36C84.9709 25.304 85.6589 24.728 85.7549 24.632C85.8509 24.536 85.9309 24.52 85.9949 24.584C86.0589 24.616 86.0909 24.664 86.0909 24.728C86.0909 24.76 86.0749 24.808 86.0429 24.872C85.5629 25.672 84.5549 26.632 83.0189 27.752C81.9949 28.584 81.1309 29 80.4269 29C79.3389 29 78.7949 28.072 78.7949 26.216C78.7949 25.864 78.8269 25.368 78.8909 24.728C78.9549 24.056 79.4669 22.024 80.4269 18.632C80.4909 18.376 80.8429 18.248 81.4829 18.248C82.1549 18.248 82.4909 18.44 82.4909 18.824C82.4909 19.176 82.3629 19.656 82.1069 20.264C81.8829 20.84 81.6109 21.16 81.2909 21.224C81.1309 21.256 80.9549 22.056 80.7629 23.624C80.5709 25.192 80.4749 26.136 80.4749 26.456Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
          <path
            d="M94.9997 16.856C95.9917 16.856 96.4877 17.432 96.4877 18.584C96.4877 19.256 96.3437 20.248 96.0557 21.56C95.7677 22.872 95.1918 24.216 94.3278 25.592C93.4638 26.936 92.2157 27.976 90.5837 28.712C89.5917 29.128 88.7598 29.336 88.0878 29.336C86.1358 29.336 85.1598 28.648 85.1598 27.272C85.1598 26.664 85.3998 26.136 85.8798 25.688C86.1038 27.768 86.8878 28.808 88.2318 28.808C88.3278 28.808 88.4238 28.808 88.5198 28.808C89.3198 28.68 90.1678 28.184 91.0638 27.32C91.9918 26.424 92.7918 25.272 93.4638 23.864C94.1358 22.424 94.4717 21.064 94.4717 19.784C94.4717 18.696 94.2798 18.248 93.8958 18.44C92.4238 19.176 91.1598 20.376 90.1038 22.04C89.0478 23.672 88.5037 25.304 88.4717 26.936C88.4717 27.128 88.3758 27.224 88.1838 27.224C87.9918 27.224 87.7357 27.064 87.4157 26.744C87.0957 26.392 86.9038 26.2 86.8398 26.168C86.8398 24.664 87.2238 22.312 87.9918 19.112C88.7598 15.88 89.8158 12.968 91.1598 10.376C92.5358 7.752 94.0718 5.912 95.7678 4.856C95.9278 4.76 96.3118 4.632 96.9198 4.472C97.5278 4.312 97.9117 4.232 98.0717 4.232C98.2317 4.232 98.3277 4.248 98.3597 4.28C99.2557 4.504 99.9277 4.968 100.376 5.672C100.536 5.896 100.616 6.056 100.616 6.152C100.616 6.248 100.552 6.296 100.424 6.296C100.296 6.296 100.184 6.248 100.088 6.152C99.3838 5.576 98.5518 5.288 97.5918 5.288C97.5598 5.288 97.5118 5.288 97.4478 5.288C95.9438 5.32 94.1517 7.768 92.0717 12.632C90.0237 17.496 88.9198 20.968 88.7598 23.048C89.2078 22.28 90.0557 21.208 91.3037 19.832C92.5517 18.456 93.3518 17.624 93.7038 17.336C94.0878 17.016 94.5197 16.856 94.9997 16.856Z"
            stroke="white"
            strokeWidth="2"
            mask="url(#path-1-outside-1)"
          />
        </svg>
        <center>
          <img src="/static/img/preloader.svg" alt="" width="100px" />
        </center>
      </div>
    </div>
  );
};

export default Preloader;
