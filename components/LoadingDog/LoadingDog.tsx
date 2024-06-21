import clsx from "clsx";

import styles from "./LoadingDog.module.css";

export const LoadingDog = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="540"
    height="417"
    className={styles.dog}
    viewBox="0 0 540 417"
  >
    <title>Loading Animation</title>
    <clipPath id="rectangle">
      <rect width={540} height={417} />
    </clipPath>
    <g clipPath="rectangle">
      <path
        d="M208.507 182c-6.81.8-19.363-4.263-17.748-28.057.678-9.991 9.821-19.218 21.851-18.131 10.694.966 18.892 17.12 4.975 31.947 10.058-.283 30.673-6.388 32.675-28.546 2.502-27.697-16.928-36.377-31.631-37.705s-50.863 6.128-54.606 47.562c-2.186 24.196 11.851 36.679 24.485 42.93"
        className={clsx(
          styles.stroke,
          clsx(styles.stroke, styles.strokeNoRound, styles.animateDog)
        )}
      />
      <path
        d="m383.291 321.73-27.473-21.14c-57.385-2.5-66.566-1.68-82.92-27-9.571-14.81-20.521-20.6-26.805-19.31-4.815 1-6.833 1.23-10.599 9.13-6.424 31-31.86 48.28-56.836 48.76l-7.992 71.76c0 2.944-1.168 5.767-3.248 7.849a11.08 11.08 0 0 1-15.683 0 11.1 11.1 0 0 1-3.248-7.849v-76.86c.19-12.2 14.986-16.61 19.671-23.06 9.172-12.61 8.812-27.26 6.084-42-1.528-8.27-2.997-17.17-1.208-25.52 1.578-7.4 5.554-13.7 10.33-19.45 17.583-21.23 49.692-19.53 70.672-13.52 26.564 7.61 49.043 15 68.354 12.65s29.711-8 42.11-16.61c12.398-8.61 42.269-50 42.269-50 5.068-6.009 10.384-8.02 18.231-8.56 8.433-.58 14.448 1.099 20.472 7.03 4.519 4.449 7.803 10.91 13.028 15.47 7.107 6.203 40.011 11 40.011 11v18.42a11.46 11.46 0 0 1-3.996 7.329 11.44 11.44 0 0 1-7.903 2.671l-33.578-1.6c-7.992-.38-17.543 2.66-21.719 9.52l-7.992 17.4-26.305 73.2 45.397 54.74a39.8 39.8 0 0 1 9.051 17.7l6.863 30.61a9.77 9.77 0 0 1-1.139 7.187 9.743 9.743 0 0 1-13.014 3.567 9.76 9.76 0 0 1-4.639-5.604l-6.843-21.11a40 40 0 0 0-13.657-19.37l-35.596-27.39"
        className={clsx(styles.stroke, styles.animateRightLeft)}
      />
      <path
        d="m209.388 303.48 13.587 11a34.64 34.64 0 0 1 11.819 18.42l11.529 55.69a8.69 8.69 0 0 0 11.597 6.365 8.707 8.707 0 0 0 5.556-9.155l-2.157-85.67a44.7 44.7 0 0 0-3.637-14.59l-13.767-30 2.178-1.26c6.284-1.29 17.234 4.5 26.805 19.31 16.278 25.202 25.449 24.507 82.12 26.965m.081-.525-.081.525m0 0-12.967 84.475a9.47 9.47 0 0 0 1.79 6.89 9.45 9.45 0 0 0 6.083 3.69 9.46 9.46 0 0 0 10.48-6.42L378.5 335l18.518-53.56 26.305-73.2 7.992-17.4c4.176-6.86 13.727-9.9 21.72-9.52l33.577 1.6a11.45 11.45 0 0 0 11.899-10V154.5s-32.904-4.797-40.011-11c-5.225-4.56-8.509-11.021-13.028-15.47-6.024-5.931-12.039-7.61-20.472-7.03-7.847.54-13.163 2.551-18.231 8.56 0 0-29.871 41.39-42.269 50s-22.798 14.26-42.11 16.61c-19.311 2.35-41.79-5.04-68.354-12.65-20.98-6.01-53.089-7.71-70.672 13.52-4.776 5.75-8.752 12.05-10.33 19.45-1.789 8.35-.32 17.25 1.209 25.52 2.727 14.74 0 15.99 14.757 31.58 8.5 11.91 8.5 18.41 21.5 30.91m144.518-3.945.8.035"
        className={clsx(styles.stroke, styles.animateLeftRight)}
      />
      <path
        d="M272.898 273.59c16.354 25.32 25.535 24.5 82.92 27l15.219 48.57a40 40 0 0 1 13.657 19.37l6.843 21.11a9.76 9.76 0 0 0 4.639 5.604 9.743 9.743 0 0 0 13.014-3.567 9.77 9.77 0 0 0 1.139-7.187l-6.863-30.61a39.8 39.8 0 0 0-9.051-17.7l2.603-54.74 26.305-73.2 7.992-17.4c4.176-6.86 13.727-9.9 21.719-9.52l33.578 1.6a11.44 11.44 0 0 0 7.903-2.671 11.46 11.46 0 0 0 3.996-7.329V154.5s-32.904-4.797-40.011-11c-5.225-4.56-8.509-11.021-13.028-15.47-6.024-5.931-12.039-7.61-20.472-7.03-7.847.54-13.163 2.551-18.231 8.56 0 0-29.871 41.39-42.269 50s-22.799 14.26-42.11 16.61-41.79-5.04-68.354-12.65c-20.98-6.01-53.089-7.71-70.672 13.52-4.776 5.75-8.752 12.05-10.33 19.45-1.789 8.35-.32 17.25 1.208 25.52 3.171 17.137 14.376 56.684 14.245 65.06v76.86c0 2.944 1.169 5.767 3.248 7.849a11.085 11.085 0 0 0 15.683 0 11.1 11.1 0 0 0 3.248-7.849l7.992-71.76c3.342-19.67 10.412-17.76 16.836-48.76 3.766-7.9 5.784-8.13 10.599-9.13 6.284-1.29 17.234 4.5 26.805 19.31"
        className={clsx(styles.stroke, styles.animateMiddle)}
      />
      <path
        d="m383.291 321.73-27.473-21.14c-57.385-2.5-66.566-1.68-82.92-27-9.571-14.81-20.521-20.6-26.805-19.31-4.815 1-6.833 1.23-10.599 9.13-6.424 31-31.86 48.28-56.836 48.76l-7.992 71.76c0 2.944-1.168 5.767-3.248 7.849a11.08 11.08 0 0 1-15.683 0 11.1 11.1 0 0 1-3.248-7.849v-76.86c.19-12.2 14.986-16.61 19.671-23.06 9.172-12.61 8.812-27.26 6.084-42-1.528-8.27-2.997-17.17-1.208-25.52 1.578-7.4 5.554-13.7 10.33-19.45 17.583-21.23 49.692-19.53 70.672-13.52 26.564 7.61 49.043 15 68.354 12.65s29.711-8 42.11-16.61c12.398-8.61 42.269-50 42.269-50 5.068-6.009 10.384-8.02 18.231-8.56 8.433-.58 14.448 1.099 20.472 7.03 4.519 4.449 7.803 10.91 13.028 15.47 7.107 6.203 40.011 11 40.011 11v18.42a11.46 11.46 0 0 1-3.996 7.329 11.44 11.44 0 0 1-7.903 2.671l-33.578-1.6c-7.992-.38-17.543 2.66-21.719 9.52l-7.992 17.4-26.305 73.2 45.397 54.74a39.8 39.8 0 0 1 9.051 17.7l6.863 30.61a9.77 9.77 0 0 1-1.139 7.187 9.743 9.743 0 0 1-13.014 3.567 9.76 9.76 0 0 1-4.639-5.604l-6.843-21.11a40 40 0 0 0-13.657-19.37l-35.596-27.39"
        className={clsx(styles.stroke, styles.animateLeftRight)}
      />
      <path
        d="m209.388 303.48 13.587 11a34.64 34.64 0 0 1 11.819 18.42l11.529 55.69a8.69 8.69 0 0 0 11.597 6.365 8.707 8.707 0 0 0 5.556-9.155l-2.157-85.67a44.7 44.7 0 0 0-3.637-14.59l-13.767-30 2.178-1.26c6.284-1.29 17.234 4.5 26.805 19.31 16.278 25.202 25.449 24.507 82.12 26.965m.081-.525-.081.525m0 0-12.967 84.475a9.47 9.47 0 0 0 1.79 6.89 9.45 9.45 0 0 0 6.083 3.69 9.46 9.46 0 0 0 10.48-6.42L378.5 335l18.518-53.56 26.305-73.2 7.992-17.4c4.176-6.86 13.727-9.9 21.72-9.52l33.577 1.6a11.45 11.45 0 0 0 11.899-10V154.5s-32.904-4.797-40.011-11c-5.225-4.56-8.509-11.021-13.028-15.47-6.024-5.931-12.039-7.61-20.472-7.03-7.847.54-13.163 2.551-18.231 8.56 0 0-29.871 41.39-42.269 50s-22.798 14.26-42.11 16.61c-19.311 2.35-41.79-5.04-68.354-12.65-20.98-6.01-53.089-7.71-70.672 13.52-4.776 5.75-8.752 12.05-10.33 19.45-1.789 8.35-.32 17.25 1.209 25.52 2.727 14.74 0 15.99 14.757 31.58 8.5 11.91 8.5 18.41 21.5 30.91m144.518-3.945.8.035"
        className={clsx(styles.stroke, styles.animateRightLeft)}
      />
      <path
        d="M272.898 273.59c16.354 25.32 25.535 24.5 82.92 27l15.219 48.57a40 40 0 0 1 13.657 19.37l6.843 21.11a9.76 9.76 0 0 0 4.639 5.604 9.743 9.743 0 0 0 13.014-3.567 9.77 9.77 0 0 0 1.139-7.187l-6.863-30.61a39.8 39.8 0 0 0-9.051-17.7l2.603-54.74 26.305-73.2 7.992-17.4c4.176-6.86 13.727-9.9 21.719-9.52l33.578 1.6a11.44 11.44 0 0 0 7.903-2.671 11.46 11.46 0 0 0 3.996-7.329V154.5s-32.904-4.797-40.011-11c-5.225-4.56-8.509-11.021-13.028-15.47-6.024-5.931-12.039-7.61-20.472-7.03-7.847.54-13.163 2.551-18.231 8.56 0 0-29.871 41.39-42.269 50s-22.799 14.26-42.11 16.61-41.79-5.04-68.354-12.65c-20.98-6.01-53.089-7.71-70.672 13.52-4.776 5.75-8.752 12.05-10.33 19.45-1.789 8.35-.32 17.25 1.208 25.52 3.171 17.137 14.376 56.684 14.245 65.06v76.86c0 2.944 1.169 5.767 3.248 7.849a11.085 11.085 0 0 0 15.683 0 11.1 11.1 0 0 0 3.248-7.849l7.992-71.76c3.342-19.67 10.412-17.76 16.836-48.76 3.766-7.9 5.784-8.13 10.599-9.13 6.284-1.29 17.234 4.5 26.805 19.31"
        className={clsx(styles.stroke, styles.animateMiddle)}
      />
      <path
        d="m416.189 223.61-54.018-41.17"
        className={clsx(styles.stroke, styles.animateDog)}
      />
      <path
        d="m440.146 124.76-5.894 40.42a14.78 14.78 0 0 1-5.575 9.36 14.75 14.75 0 0 1-10.468 2.992 14.76 14.76 0 0 1-9.672-5.003 14.8 14.8 0 0 1-3.617-10.279l1.349-32.13"
        className={clsx(styles.stroke, styles.animateDog)}
      />
      <path
        d="M497.942 173.83a21.85 21.85 0 0 1-8.671-5.43c-5.245-5.25-7.81-11.13-6.271-16.4"
        className={clsx(styles.stroke, styles.strokeRound, styles.animateDog)}
      />
      <path
        d="m423.413 206.9-48.154-36.63L1.998-63"
        className={clsx(styles.stroke, styles.strokeRound, styles.animateDog)}
      />
    </g>
  </svg>
);
