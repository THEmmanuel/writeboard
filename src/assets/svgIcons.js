import React from 'react';

export const Move = ({ toolType, colorWidth }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16">
            <path fill="currentColor" fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
        </svg>
    )
}

export const Pencil = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M3.41625 18.06L18.7125 2.7625C19.3168 2.18421 20.1235 1.86551 20.9599 1.87465C21.7963 1.88379 22.5958 2.22004 23.1874 2.8114C23.7789 3.40277 24.1154 4.20223 24.1247 5.0386C24.1341 5.87498 23.8156 6.68178 23.2375 7.28625L7.93875 22.5837C7.58975 22.9328 7.14524 23.1707 6.66125 23.2675L1.75 24.25L2.7325 19.3375C2.82931 18.8535 3.06722 18.409 3.41625 18.06Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16.125 6.125L19.875 9.875" stroke="black" stroke-width="2" />
        </svg>
    )
}


export const Line = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="1.29289" y1="18.9706" x2="18.9706" y2="1.2929" stroke="black" stroke-width="2" />
        </svg>
    )
}

export const Rectangle = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="1" y="1" width="23" height="23" rx="3" stroke="black" stroke-width="2" />
        </svg>
    )
}

export const Ellipse = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="27"
            height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="13.5" cy="13.5" r="12.5" stroke="black" stroke-width="2" />
        </svg>
    )
}

export const Polygon = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >

            <path d="M15 2L27.9904 24.5H2.00962L15 2Z" stroke="black" stroke-width="2" />
        </svg>
    )
}

export const Paint = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >

            <path d="M8.82626 27.5C10.73 27.5 12.3763 26.8213 13.7138 25.4838C15.1175 24.08 15.8475 21.9163 15.6525 19.8663L26.3575 9.16126C27.0883 8.42896 27.4985 7.43653 27.498 6.40199C27.4976 5.36744 27.0864 4.37539 26.355 3.64376C24.8825 2.16876 22.3125 2.16876 20.84 3.64376L9.73501 14.7488C7.34376 14.96 4.97626 16.65 4.97626 19.6475C4.97626 20.0263 5.00251 20.3825 5.02876 20.7225C5.12876 22.0113 5.16501 22.495 3.19001 23.4825C2.99602 23.5798 2.83068 23.7259 2.71023 23.9065C2.58977 24.087 2.51835 24.2957 2.50296 24.5122C2.48758 24.7287 2.52877 24.9455 2.62249 25.1412C2.71621 25.337 2.85923 25.505 3.03751 25.6288C3.03924 25.6299 3.04157 25.6315 3.04449 25.6334C3.23114 25.7587 5.82573 27.5 8.82626 27.5ZM22.6075 5.41001C22.8742 5.15414 23.2297 5.01148 23.5993 5.01195C23.9689 5.01241 24.3239 5.15597 24.59 5.41251C24.72 5.54251 24.8232 5.69685 24.8935 5.86672C24.9639 6.03658 25.0001 6.21864 25.0001 6.40251C25.0001 6.58637 24.9639 6.76843 24.8935 6.9383C24.8232 7.10816 24.72 7.2625 24.59 7.39251L15 16.9825L13.0175 15L22.6075 5.41001ZM7.52251 20.5288L7.52185 20.5206C7.49955 20.2431 7.47626 19.9533 7.47626 19.6463C7.47626 17.715 9.28251 17.205 10.2388 17.205C10.6838 17.205 11.1125 17.2963 11.4438 17.4625C12.625 18.0563 13.0188 19.0788 13.14 19.8325C13.3613 21.195 12.8688 22.7925 11.945 23.7163C11.0813 24.58 10.0613 25 8.82626 25H8.82501C7.88751 25 6.97626 24.755 6.23251 24.4663C7.58501 23.25 7.63376 21.98 7.52251 20.5288Z" fill="black" />
            <path d="M8.82626 27.5C10.73 27.5 12.3763 26.8213 13.7138 25.4838C15.1175 24.08 15.8475 21.9163 15.6525 19.8663L26.3575 9.16126C27.0883 8.42896 27.4985 7.43653 27.498 6.40199C27.4976 5.36744 27.0864 4.37539 26.355 3.64376C24.8825 2.16876 22.3125 2.16876 20.84 3.64376L9.73501 14.7488C7.34376 14.96 4.97626 16.65 4.97626 19.6475C4.97626 20.0263 5.00251 20.3825 5.02876 20.7225C5.12876 22.0113 5.16501 22.495 3.19001 23.4825C2.99602 23.5798 2.83068 23.7259 2.71023 23.9065C2.58977 24.087 2.51835 24.2957 2.50296 24.5122C2.48758 24.7287 2.52877 24.9455 2.62249 25.1412C2.71621 25.337 2.85923 25.505 3.03751 25.6288C3.03924 25.6299 3.04157 25.6315 3.04449 25.6334C3.23114 25.7587 5.82573 27.5 8.82626 27.5ZM22.6075 5.41001C22.8742 5.15414 23.2297 5.01148 23.5993 5.01195C23.9689 5.01241 24.3239 5.15597 24.59 5.41251C24.72 5.54251 24.8232 5.69685 24.8935 5.86672C24.9639 6.03658 25.0001 6.21864 25.0001 6.40251C25.0001 6.58637 24.9639 6.76843 24.8935 6.9383C24.8232 7.10816 24.72 7.2625 24.59 7.39251L15 16.9825L13.0175 15L22.6075 5.41001ZM7.52251 20.5288L7.52185 20.5206C7.49955 20.2431 7.47626 19.9533 7.47626 19.6463C7.47626 17.715 9.28251 17.205 10.2388 17.205C10.6838 17.205 11.1125 17.2963 11.4438 17.4625C12.625 18.0563 13.0188 19.0788 13.14 19.8325C13.3613 21.195 12.8688 22.7925 11.945 23.7163C11.0813 24.58 10.0613 25 8.82626 25H8.82501C7.88751 25 6.97626 24.755 6.23251 24.4663C7.58501 23.25 7.63376 21.98 7.52251 20.5288Z" stroke="black" />
        </svg>
    )
}

export const History = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <mask id="path-1-inside-1_7_19" fill="white">
                <path d="M2.24983 0L2.38483 0.0119998C2.53468 0.0393775 2.67265 0.11174 2.78037 0.219458C2.88809 0.327177 2.96045 0.465143 2.98783 0.615L2.99983 0.75V4.068C4.79479 2.03211 7.22691 0.664862 9.89912 0.189462C12.5713 -0.285938 15.3258 0.158598 17.7128 1.45049C20.0997 2.74239 21.9783 4.80533 23.0416 7.30252C24.105 9.7997 24.2904 12.5836 23.5676 15.1998C22.8448 17.8159 21.2564 20.1097 19.0618 21.7068C16.8672 23.3038 14.196 24.1097 11.4844 23.9928C8.77274 23.876 6.18079 22.8433 4.13171 21.0635C2.08262 19.2836 0.697448 16.8616 0.202328 14.193C0.0420265 13.2116 -0.0232754 12.217 0.00732775 11.223C0.024524 11.031 0.114995 10.853 0.259964 10.7259C0.404933 10.5988 0.593265 10.5325 0.785873 10.5406C0.97848 10.5487 1.16057 10.6306 1.29435 10.7694C1.42813 10.9082 1.50332 11.0932 1.50433 11.286C1.47858 12.1669 1.53583 13.0483 1.67533 13.9185C2.11756 16.304 3.37223 18.4627 5.22608 20.0278C7.07993 21.5929 9.41855 22.4676 11.8444 22.5035C14.2703 22.5393 16.6337 21.7339 18.533 20.2243C20.4322 18.7146 21.7501 16.5938 22.2625 14.2224C22.775 11.851 22.4504 9.37534 21.344 7.21618C20.2376 5.05701 18.4176 3.34761 16.1934 2.37855C13.9692 1.40949 11.478 1.24057 9.14336 1.90049C6.8087 2.56042 4.7746 4.00846 3.38683 5.9985L8.24983 6L8.38483 6.012C8.55775 6.04331 8.71419 6.13435 8.82684 6.26923C8.93949 6.40411 9.0012 6.57427 9.0012 6.75C9.0012 6.92573 8.93949 7.09589 8.82684 7.23077C8.71419 7.36565 8.55775 7.45669 8.38483 7.488L8.24983 7.5H2.24983L2.11483 7.488C1.96497 7.46062 1.827 7.38826 1.71929 7.28054C1.61157 7.17282 1.53921 7.03486 1.51183 6.885L1.49983 6.75V0.75L1.51183 0.615C1.53921 0.465143 1.61157 0.327177 1.71929 0.219458C1.827 0.11174 1.96497 0.0393775 2.11483 0.0119998L2.24983 0ZM11.2498 6L11.3848 6.012C11.5347 6.03938 11.6727 6.11174 11.7804 6.21946C11.8881 6.32718 11.9604 6.46514 11.9878 6.615L11.9998 6.75V12.756H14.9998L15.1348 12.768C15.3077 12.7993 15.4642 12.8903 15.5768 13.0252C15.6895 13.1601 15.7512 13.3303 15.7512 13.506C15.7512 13.6817 15.6895 13.8519 15.5768 13.9868C15.4642 14.1217 15.3077 14.2127 15.1348 14.244L14.9998 14.256H11.2498L11.1148 14.244C10.965 14.2166 10.827 14.1443 10.7193 14.0365C10.6116 13.9288 10.5392 13.7909 10.5118 13.641L10.4998 13.506V6.75L10.5118 6.615C10.5392 6.46514 10.6116 6.32718 10.7193 6.21946C10.827 6.11174 10.965 6.03938 11.1148 6.012L11.2498 6Z" />
            </mask>
            <path d="M2.24983 0L2.38483 0.0119998C2.53468 0.0393775 2.67265 0.11174 2.78037 0.219458C2.88809 0.327177 2.96045 0.465143 2.98783 0.615L2.99983 0.75V4.068C4.79479 2.03211 7.22691 0.664862 9.89912 0.189462C12.5713 -0.285938 15.3258 0.158598 17.7128 1.45049C20.0997 2.74239 21.9783 4.80533 23.0416 7.30252C24.105 9.7997 24.2904 12.5836 23.5676 15.1998C22.8448 17.8159 21.2564 20.1097 19.0618 21.7068C16.8672 23.3038 14.196 24.1097 11.4844 23.9928C8.77274 23.876 6.18079 22.8433 4.13171 21.0635C2.08262 19.2836 0.697448 16.8616 0.202328 14.193C0.0420265 13.2116 -0.0232754 12.217 0.00732775 11.223C0.024524 11.031 0.114995 10.853 0.259964 10.7259C0.404933 10.5988 0.593265 10.5325 0.785873 10.5406C0.97848 10.5487 1.16057 10.6306 1.29435 10.7694C1.42813 10.9082 1.50332 11.0932 1.50433 11.286C1.47858 12.1669 1.53583 13.0483 1.67533 13.9185C2.11756 16.304 3.37223 18.4627 5.22608 20.0278C7.07993 21.5929 9.41855 22.4676 11.8444 22.5035C14.2703 22.5393 16.6337 21.7339 18.533 20.2243C20.4322 18.7146 21.7501 16.5938 22.2625 14.2224C22.775 11.851 22.4504 9.37534 21.344 7.21618C20.2376 5.05701 18.4176 3.34761 16.1934 2.37855C13.9692 1.40949 11.478 1.24057 9.14336 1.90049C6.8087 2.56042 4.7746 4.00846 3.38683 5.9985L8.24983 6L8.38483 6.012C8.55775 6.04331 8.71419 6.13435 8.82684 6.26923C8.93949 6.40411 9.0012 6.57427 9.0012 6.75C9.0012 6.92573 8.93949 7.09589 8.82684 7.23077C8.71419 7.36565 8.55775 7.45669 8.38483 7.488L8.24983 7.5H2.24983L2.11483 7.488C1.96497 7.46062 1.827 7.38826 1.71929 7.28054C1.61157 7.17282 1.53921 7.03486 1.51183 6.885L1.49983 6.75V0.75L1.51183 0.615C1.53921 0.465143 1.61157 0.327177 1.71929 0.219458C1.827 0.11174 1.96497 0.0393775 2.11483 0.0119998L2.24983 0ZM11.2498 6L11.3848 6.012C11.5347 6.03938 11.6727 6.11174 11.7804 6.21946C11.8881 6.32718 11.9604 6.46514 11.9878 6.615L11.9998 6.75V12.756H14.9998L15.1348 12.768C15.3077 12.7993 15.4642 12.8903 15.5768 13.0252C15.6895 13.1601 15.7512 13.3303 15.7512 13.506C15.7512 13.6817 15.6895 13.8519 15.5768 13.9868C15.4642 14.1217 15.3077 14.2127 15.1348 14.244L14.9998 14.256H11.2498L11.1148 14.244C10.965 14.2166 10.827 14.1443 10.7193 14.0365C10.6116 13.9288 10.5392 13.7909 10.5118 13.641L10.4998 13.506V6.75L10.5118 6.615C10.5392 6.46514 10.6116 6.32718 10.7193 6.21946C10.827 6.11174 10.965 6.03938 11.1148 6.012L11.2498 6Z" fill="black" />
            <path d="M2.24983 0L2.42691 -1.99215L2.24983 -2.00789L2.07275 -1.99215L2.24983 0ZM2.38483 0.0119998L2.74426 -1.95544L2.65365 -1.97199L2.5619 -1.98015L2.38483 0.0119998ZM2.98783 0.615L4.97997 0.437923L4.97182 0.346174L4.95526 0.255563L2.98783 0.615ZM2.99983 0.75H4.99983V0.661287L4.99197 0.572923L2.99983 0.75ZM2.99983 4.068H0.999828V9.36066L4.50002 5.39066L2.99983 4.068ZM0.202328 14.193L-1.77152 14.5154L-1.76804 14.5367L-1.76411 14.5578L0.202328 14.193ZM0.00732775 11.223L-1.9847 11.0446L-1.98992 11.1029L-1.99172 11.1615L0.00732775 11.223ZM1.50433 11.286L3.50347 11.3444L3.50448 11.31L3.5043 11.2756L1.50433 11.286ZM1.67533 13.9185L-0.299459 14.2351L-0.295605 14.2591L-0.291167 14.2831L1.67533 13.9185ZM3.38683 5.9985L1.74633 4.85448L-0.445361 7.99732L3.38621 7.9985L3.38683 5.9985ZM8.24983 6L8.42692 4.00786L8.33886 4.00003L8.25044 4L8.24983 6ZM8.38483 6.012L8.74116 4.044L8.65209 4.02787L8.56192 4.01986L8.38483 6.012ZM8.38483 7.488L8.56192 9.48014L8.65209 9.47213L8.74116 9.456L8.38483 7.488ZM8.24983 7.5V9.5H8.33855L8.42692 9.49214L8.24983 7.5ZM2.24983 7.5L2.07274 9.49214L2.16111 9.5H2.24983V7.5ZM2.11483 7.488L1.75539 9.45544L1.846 9.47199L1.93774 9.48014L2.11483 7.488ZM1.51183 6.885L-0.480318 7.06208L-0.472163 7.15383L-0.455609 7.24444L1.51183 6.885ZM1.49983 6.75H-0.500172V6.83871L-0.492318 6.92708L1.49983 6.75ZM1.49983 0.75L-0.492318 0.572921L-0.500172 0.661286V0.75H1.49983ZM1.51183 0.615L-0.455609 0.255563L-0.472163 0.346173L-0.480318 0.437921L1.51183 0.615ZM2.11483 0.0119998L1.93775 -1.98015L1.846 -1.97199L1.75539 -1.95544L2.11483 0.0119998ZM11.2498 6L11.4269 4.00786L11.2498 3.99211L11.0727 4.00786L11.2498 6ZM11.3848 6.012L11.7443 4.04456L11.6537 4.02801L11.5619 4.01986L11.3848 6.012ZM11.9878 6.615L13.98 6.43792L13.9718 6.34617L13.9553 6.25556L11.9878 6.615ZM11.9998 6.75H13.9998V6.66129L13.992 6.57292L11.9998 6.75ZM11.9998 12.756H9.99983V14.756H11.9998V12.756ZM14.9998 12.756L15.1769 10.7639L15.0885 10.756H14.9998V12.756ZM15.1348 12.768L15.4912 10.8L15.4021 10.7839L15.3119 10.7759L15.1348 12.768ZM15.7512 13.506H13.7512H15.7512ZM15.1348 14.244L15.3119 16.2361L15.4021 16.2281L15.4912 16.212L15.1348 14.244ZM14.9998 14.256V16.256H15.0885L15.1769 16.2481L14.9998 14.256ZM11.2498 14.256L11.0727 16.2481L11.1611 16.256H11.2498V14.256ZM11.1148 14.244L10.7554 16.2114L10.846 16.228L10.9377 16.2361L11.1148 14.244ZM10.5118 13.641L8.51968 13.8181L8.52784 13.9098L8.54439 14.0004L10.5118 13.641ZM10.4998 13.506H8.49983V13.5947L8.50768 13.6831L10.4998 13.506ZM10.4998 6.75L8.50768 6.57291L8.49983 6.66128V6.75H10.4998ZM10.5118 6.615L8.54439 6.25556L8.52784 6.34617L8.51968 6.43791L10.5118 6.615ZM11.1148 6.012L10.9377 4.01986L10.846 4.02801L10.7554 4.04456L11.1148 6.012ZM2.07275 1.99215L2.20775 2.00415L2.5619 -1.98015L2.42691 -1.99215L2.07275 1.99215ZM2.02539 1.97944C1.77563 1.93381 1.54569 1.8132 1.36616 1.63367L4.19458 -1.19476C3.79961 -1.58972 3.29374 -1.85505 2.74426 -1.95544L2.02539 1.97944ZM1.36616 1.63367C1.18663 1.45414 1.06602 1.2242 1.02039 0.974436L4.95526 0.255563C4.85488 -0.293914 4.58955 -0.799791 4.19458 -1.19476L1.36616 1.63367ZM0.995682 0.792077L1.00768 0.927077L4.99197 0.572923L4.97997 0.437923L0.995682 0.792077ZM0.999828 0.75V4.068H4.99983V0.75H0.999828ZM4.50002 5.39066C5.99582 3.69409 8.02258 2.55471 10.2494 2.15854L9.54881 -1.77962C6.43123 -1.22499 3.59376 0.370142 1.49964 2.74534L4.50002 5.39066ZM10.2494 2.15854C12.4763 1.76238 14.7716 2.13282 16.7608 3.2094L18.6647 -0.308417C15.8799 -1.81563 12.6664 -2.33425 9.54881 -1.77962L10.2494 2.15854ZM16.7608 3.2094C18.75 4.28598 20.3154 6.0051 21.2015 8.08609L24.8818 6.51894C23.6412 3.60556 21.4495 1.19879 18.6647 -0.308417L16.7608 3.2094ZM21.2015 8.08609C22.0877 10.1671 22.2422 12.487 21.6398 14.6671L25.4954 15.7324C26.3387 12.6802 26.1224 9.43233 24.8818 6.51894L21.2015 8.08609ZM21.6398 14.6671C21.0375 16.8473 19.7138 18.7588 17.885 20.0896L20.2386 23.3239C22.799 21.4607 24.6521 18.7846 25.4954 15.7324L21.6398 14.6671ZM17.885 20.0896C16.0562 21.4205 13.8302 22.092 11.5705 21.9947L11.3983 25.991C14.5619 26.1273 17.6783 25.1871 20.2386 23.3239L17.885 20.0896ZM11.5705 21.9947C9.31078 21.8973 7.15082 21.0368 5.44325 19.5535L2.82016 22.5734C5.21076 24.6499 8.23471 25.8547 11.3983 25.991L11.5705 21.9947ZM5.44325 19.5535C3.73568 18.0703 2.58137 16.052 2.16877 13.8282L-1.76411 14.5578C-1.18647 17.6712 0.429564 20.4969 2.82016 22.5734L5.44325 19.5535ZM2.17617 13.8706C2.03659 13.016 1.97973 12.15 2.00638 11.2845L-1.99172 11.1615C-2.02628 12.2839 -1.95254 13.4071 -1.77152 14.5154L2.17617 13.8706ZM1.99935 11.4014C1.97069 11.7214 1.81991 12.0181 1.57829 12.2299L-1.05837 9.22191C-1.58992 9.68784 -1.92165 10.3406 -1.9847 11.0446L1.99935 11.4014ZM1.57829 12.2299C1.33667 12.4417 1.02278 12.5523 0.701779 12.5388L0.869967 8.54233C0.163746 8.51261 -0.526809 8.75597 -1.05837 9.22191L1.57829 12.2299ZM0.701779 12.5388C0.380772 12.5253 0.0772865 12.3887 -0.145684 12.1573L2.73438 9.38152C2.24385 8.87257 1.57619 8.57205 0.869967 8.54233L0.701779 12.5388ZM-0.145684 12.1573C-0.36865 11.926 -0.493974 11.6177 -0.495645 11.2964L3.5043 11.2756C3.50062 10.5688 3.22491 9.89047 2.73438 9.38152L-0.145684 12.1573ZM-0.494819 11.2276C-0.524234 12.234 -0.458826 13.2409 -0.299459 14.2351L3.65012 13.6019C3.53049 12.8557 3.48139 12.0999 3.50347 11.3444L-0.494819 11.2276ZM-0.291167 14.2831C0.235296 17.1229 1.72895 19.6929 3.93592 21.556L6.51624 18.4996C5.0155 17.2326 3.99982 15.4851 3.64182 13.5539L-0.291167 14.2831ZM3.93592 21.556C6.14288 23.4192 8.92696 24.4606 11.8149 24.5032L11.874 20.5037C9.91015 20.4747 8.01698 19.7665 6.51624 18.4996L3.93592 21.556ZM11.8149 24.5032C14.7029 24.5459 17.5165 23.5871 19.7775 21.7899L17.2885 18.6586C15.751 19.8807 13.8378 20.5327 11.874 20.5037L11.8149 24.5032ZM19.7775 21.7899C22.0385 19.9927 23.6073 17.468 24.2174 14.6449L20.3076 13.8C19.8928 15.7197 18.826 17.4365 17.2885 18.6586L19.7775 21.7899ZM24.2174 14.6449C24.8275 11.8218 24.4411 8.87453 23.1239 6.3041L19.5641 8.12825C20.4597 9.87615 20.7225 11.8803 20.3076 13.8L24.2174 14.6449ZM23.1239 6.3041C21.8068 3.73366 19.6401 1.69867 16.9922 0.545022L15.3945 4.21209C17.1951 4.99656 18.6684 6.38036 19.5641 8.12825L23.1239 6.3041ZM16.9922 0.545022C14.3444 -0.608623 11.3787 -0.809724 8.59935 -0.0240998L9.68737 3.82508C11.5773 3.29086 13.594 3.42761 15.3945 4.21209L16.9922 0.545022ZM8.59935 -0.0240998C5.81999 0.761524 3.39845 2.48539 1.74633 4.85448L5.02732 7.14252C6.15076 5.53154 7.79741 4.35931 9.68737 3.82508L8.59935 -0.0240998ZM3.38621 7.9985L8.24921 8L8.25044 4L3.38744 3.9985L3.38621 7.9985ZM8.07273 7.99214L8.20773 8.00414L8.56192 4.01986L8.42692 4.00786L8.07273 7.99214ZM8.02849 7.98C7.74029 7.92782 7.47956 7.77609 7.2918 7.55128L10.3619 4.98717C9.94882 4.49261 9.37521 4.1588 8.74116 4.044L8.02849 7.98ZM7.2918 7.55128C7.10405 7.32648 7.0012 7.04288 7.0012 6.75H11.0012C11.0012 6.10565 10.7749 5.48174 10.3619 4.98717L7.2918 7.55128ZM7.0012 6.75C7.0012 6.45712 7.10405 6.17352 7.2918 5.94872L10.3619 8.51283C10.7749 8.01826 11.0012 7.39435 11.0012 6.75H7.0012ZM7.2918 5.94872C7.47956 5.72391 7.74029 5.57218 8.02849 5.52L8.74116 9.456C9.37521 9.3412 9.94882 9.00739 10.3619 8.51283L7.2918 5.94872ZM8.20774 5.49585L8.07274 5.50786L8.42692 9.49214L8.56192 9.48014L8.20774 5.49585ZM8.24983 5.5H2.24983V9.5H8.24983V5.5ZM2.42692 5.50786L2.29192 5.49585L1.93774 9.48014L2.07274 9.49214L2.42692 5.50786ZM2.47426 5.52056C2.72403 5.56619 2.95397 5.6868 3.1335 5.86633L0.305073 8.69475C0.70004 9.08972 1.20592 9.35505 1.75539 9.45544L2.47426 5.52056ZM3.1335 5.86633C3.31303 6.04585 3.43363 6.2758 3.47926 6.52556L-0.455609 7.24444C-0.355223 7.79392 -0.0898905 8.29979 0.305073 8.69475L3.1335 5.86633ZM3.50397 6.70792L3.49197 6.57292L-0.492318 6.92708L-0.480318 7.06208L3.50397 6.70792ZM3.49983 6.75V0.75H-0.500172V6.75H3.49983ZM3.49197 0.927079L3.50397 0.792079L-0.480318 0.437921L-0.492318 0.572921L3.49197 0.927079ZM3.47926 0.974436C3.43363 1.2242 3.31303 1.45414 3.1335 1.63367L0.305073 -1.19476C-0.0898926 -0.79979 -0.355223 -0.293913 -0.455609 0.255563L3.47926 0.974436ZM3.1335 1.63367C2.95397 1.8132 2.72403 1.93381 2.47426 1.97944L1.75539 -1.95544C1.20592 -1.85505 0.70004 -1.58972 0.305073 -1.19476L3.1335 1.63367ZM2.2919 2.00415L2.4269 1.99215L2.07275 -1.99215L1.93775 -1.98015L2.2919 2.00415ZM11.0727 7.99214L11.2077 8.00414L11.5619 4.01986L11.4269 4.00786L11.0727 7.99214ZM11.0254 7.97944C10.7756 7.93381 10.5457 7.8132 10.3662 7.63367L13.1946 4.80525C12.7996 4.41028 12.2937 4.14495 11.7443 4.04456L11.0254 7.97944ZM10.3662 7.63367C10.1866 7.45414 10.066 7.2242 10.0204 6.97444L13.9553 6.25556C13.8549 5.70609 13.5895 5.20021 13.1946 4.80525L10.3662 7.63367ZM9.99568 6.79208L10.0077 6.92708L13.992 6.57292L13.98 6.43792L9.99568 6.79208ZM9.99983 6.75V12.756H13.9998V6.75H9.99983ZM11.9998 14.756H14.9998V10.756H11.9998V14.756ZM14.8227 14.7481L14.9577 14.7601L15.3119 10.7759L15.1769 10.7639L14.8227 14.7481ZM14.7785 14.736C14.4903 14.6838 14.2296 14.5321 14.0418 14.3073L17.1119 11.7432C16.6988 11.2486 16.1252 10.9148 15.4912 10.8L14.7785 14.736ZM14.0418 14.3073C13.854 14.0825 13.7512 13.7989 13.7512 13.506H17.7512C17.7512 12.8616 17.5249 12.2377 17.1119 11.7432L14.0418 14.3073ZM13.7512 13.506C13.7512 13.2131 13.854 12.9295 14.0418 12.7047L17.1119 15.2688C17.5249 14.7743 17.7512 14.1504 17.7512 13.506H13.7512ZM14.0418 12.7047C14.2296 12.4799 14.4903 12.3282 14.7785 12.276L15.4912 16.212C16.1252 16.0972 16.6988 15.7634 17.1119 15.2688L14.0418 12.7047ZM14.9577 12.2519L14.8227 12.2639L15.1769 16.2481L15.3119 16.2361L14.9577 12.2519ZM14.9998 12.256H11.2498V16.256H14.9998V12.256ZM11.4269 12.2639L11.2919 12.2519L10.9377 16.2361L11.0727 16.2481L11.4269 12.2639ZM11.4743 12.2766C11.724 12.3222 11.954 12.4428 12.1335 12.6223L9.30507 15.4508C9.70004 15.8457 10.2059 16.111 10.7554 16.2114L11.4743 12.2766ZM12.1335 12.6223C12.313 12.8019 12.4336 13.0318 12.4793 13.2816L8.54439 14.0004C8.64478 14.5499 8.91011 15.0558 9.30507 15.4508L12.1335 12.6223ZM12.504 13.4639L12.492 13.3289L8.50768 13.6831L8.51968 13.8181L12.504 13.4639ZM12.4998 13.506V6.75H8.49983V13.506H12.4998ZM12.492 6.92709L12.504 6.79209L8.51968 6.43791L8.50768 6.57291L12.492 6.92709ZM12.4793 6.97444C12.4336 7.2242 12.313 7.45414 12.1335 7.63367L9.30507 4.80525C8.91011 5.20021 8.64478 5.70609 8.54439 6.25556L12.4793 6.97444ZM12.1335 7.63367C11.954 7.8132 11.724 7.93381 11.4743 7.97944L10.7554 4.04456C10.2059 4.14495 9.70004 4.41028 9.30507 4.80525L12.1335 7.63367ZM11.2919 8.00414L11.4269 7.99214L11.0727 4.00786L10.9377 4.01986L11.2919 8.00414Z" fill="black" mask="url(#path-1-inside-1_7_19)" />
        </svg>

    )

}

export const Eraser = ({ toolType, colorWidth }) => {
    return (
        <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">

            <path d="M17.2459 0.823391C17.7733 0.296174 18.4884 0 19.2341 0C19.9797 0 20.6949 0.296174 21.2222 0.823391L29.1767 8.77645C29.7038 9.30383 30 10.019 30 10.7647C30 11.5104 29.7038 12.2256 29.1767 12.753L13.8096 28.121H23.4381C23.6867 28.121 23.9252 28.2198 24.1009 28.3956C24.2767 28.5714 24.3755 28.8098 24.3755 29.0585C24.3755 29.3071 24.2767 29.5455 24.1009 29.7213C23.9252 29.8971 23.6867 29.9959 23.4381 29.9959H10.915C10.5212 30.0173 10.1273 29.9554 9.75901 29.8142C9.39075 29.673 9.0564 29.4557 8.77779 29.1766L0.82334 21.2216C0.296156 20.6943 0 19.9791 0 19.2334C0 18.4877 0.296156 17.7725 0.82334 17.2451L17.2459 0.821516V0.823391ZM19.8968 2.14703C19.721 1.97129 19.4826 1.87256 19.2341 1.87256C18.9855 1.87256 18.7471 1.97129 18.5713 2.14703L6.63686 14.0822L15.9167 23.3627L27.8512 11.4275C28.027 11.2517 28.1257 11.0133 28.1257 10.7647C28.1257 10.5161 28.027 10.2778 27.8512 10.102L19.8949 2.14703H19.8968ZM14.5913 24.6901L5.31143 15.4096L2.14877 18.5725C1.97304 18.7483 1.87432 18.9867 1.87432 19.2352C1.87432 19.4838 1.97304 19.7222 2.14877 19.898L10.1032 27.8529C10.279 28.0287 10.5174 28.1274 10.7659 28.1274C11.0145 28.1274 11.2529 28.0287 11.4287 27.8529L14.5913 24.6901Z" fill="black" />
        </svg>

    )
}