import React, { useState, Fragment  } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {

  increment,
  incrementAsync,
  selectCount,
} from './CheckoutSlice';


import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
]

const addresses =[
  {
    name:"yash",
    street:"south",
    city:"abcdefgh",
    pin: 111111 ,
    state:"hgfedcba",
    phone: 9876543210
  },
  {
    name:"raj",
    street:"north",
    city:"abcdefgh",
    pin: 111111 ,
    state:"hgfedcba",
    phone: 9876543210
  },
  {
    name:"rungta",
    street:"east",
    city:"abcdefgh",
    pin: 111111 ,
    state:"hgfedcba",
    phone: 9876543210
  },
]

export default function Checkout() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();


  return (
    <>
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-x-8 pt-10 pb-10 gap-y-10 lg:grid-cols-6">
      <div className="lg:col-span-4">
        <div className="bg-white px-5">
    <form>
    <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
    <h2 className=" font-semibold leading-7 text-2xl pt-5  text-gray-900">Personal Information</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive your order.</p>

    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-3">
        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
          Last name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-4">
        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
          Phone
        </label>
        <div className="mt-2">
          <input
            id="phone"
            name="phone"
            type="number"
            autoComplete="number"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
          Country
        </label>
        <div className="mt-2">
          <select
            id="country"
            name="country"
            autoComplete="country-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Bharat</option>
            <option>US</option>
            <option>Russia</option>
          </select>
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
          Street address
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2 sm:col-start-1">
        <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
          City
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            autoComplete="address-level2"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
          State / Province
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="region"
            id="region"
            autoComplete="address-level1"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
          ZIP / Postal code
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="postal-code"
            id="postal-code"
            autoComplete="postal-code"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  </div>
  
  <div className="mt-6 flex items-center justify-end gap-x-6">
  <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
    Reset
  </button>
  <button
    type="submit"
    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
  >
    Add Address
  </button>
</div>

  <div className="border-b border-gray-900/10 pb-12">
    <h2 className="text-base font-semibold leading-7 text-gray-900">Addresses</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      Choose from Existing addresses
    </p>

    <ul role="list" >
      {addresses.map((address) => (
        <li key={address.phone} className="flex justify-between gap-x-6 py-5  border-solid border-2 border-gray-300">
          <div className="flex min-w-0 gap-x-4 ml-5 ">
          <input
              id="address"
              name="address"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-gray-900">{address.name}</p>
            </div>
            <div className="min-w-0 flex-auto ">
              <p className="text-sm font-semibold leading-6 text-gray-900">{address.street}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-700">{address.city}</p>
              <p className="mt-1 truncate text-xs leading-4 text-gray-500">{address.pin}</p>
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end mr-5">
            <p className="text-sm leading-6 text-gray-900">Phone: {address.phone}</p>
            <p className="text-sm leading-6 text-gray-900">{address.state}</p>
          </div>
        </li>
      ))}
    </ul>

    <div className="mt-10 space-y-10">
      
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
        <p className="mt-1 text-sm leading-6 text-gray-600">Choose one </p>
        <div className="mt-6 space-y-6">
          <div className="flex items-center gap-x-3">
            <input
              id="Cash"
              name="payments"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="Cash" className="block text-sm font-medium leading-6 text-gray-900">
              Cash
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              id="Card"
              name="payments"
              type="radio"
              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label htmlFor="Card" className="block text-sm font-medium leading-6 text-gray-900">
              Card Payment
            </label>
          </div>
          
        </div>
      </fieldset>
    </div>
  </div>
  </div>



</form>
</div>
</div>
<div className="lg:col-span-2">

<div className="mx-auto  bg-white max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
    <h1 className="text-5xl pt-3 pb-2 text-center font-bold tracking-tight text-gray-900">Cart</h1>
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flow-root">
                        <ul role="list" className="-my-6 divide-y divide-gray-200">
                          {products.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="text-gray-500">

                                  <label htmlFor="quantity" 
                                  className="inline mr-5 text-sm font-medium leading-6 text-gray-900">
                                  Qty
                                  </label>

                                  <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                  </select>
                                  </div>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
    </div>

    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>$262.00</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                    <div className="mt-6">
                      <Link to="/pay"
                      
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        Pay and Order
                      </Link>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{' '}
                        <Link to="/">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          
                        >
                          Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                        </Link>
                      </p>
                    </div>
    </div>
    </div>

</div>
</div>
</div>
</>
);
}
