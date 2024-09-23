import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
