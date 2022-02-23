import React from 'react';

export const Move = ({ toolType, colorWidth }) => {
    return (
        // <svg
        //     width="26"
        //     height="26"
        //     viewBox="0 0 26 26"
        //     fill="none"
        //     xmlns="http://www.w3.org/2000/svg"
        // >

        //     <path d="M3.41625 18.06L18.7125 2.7625C19.3168 2.18421 20.1235 1.86551 20.9599 1.87465C21.7963 1.88379 22.5958 2.22004 23.1874 2.8114C23.7789 3.40277 24.1154 4.20223 24.1247 5.0386C24.1341 5.87498 23.8156 6.68178 23.2375 7.28625L7.93875 22.5837C7.58975 22.9328 7.14524 23.1707 6.66125 23.2675L1.75 24.25L2.7325 19.3375C2.82931 18.8535 3.06722 18.409 3.41625 18.06Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //     <path d="M16.125 6.125L19.875 9.875" stroke="black" stroke-width="2" />
        // </svg>
        'test'
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

export const ellipse = ({ toolType, colorWidth }) => {
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

export const polygon = ({ toolType, colorWidth }) => {
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

export const paint = ({ toolType, colorWidth }) => {

}

export const history = ({ toolType, colorWidth }) => {

}

export const eraser = ({ toolType, colorWidth }) => {

}

