"use client";

import { BsChevronDown } from "react-icons/bs";
import ButtonOutlineFull from "../core/buttons/ButtonOutlineFull";
import ButtonPrimaryFull from "../core/buttons/ButtonPrimaryfull";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import ButtonPrimary from "../core/buttons/ButtonPrimary";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { InputAuth } from "../ui/inputAuth";
import ButtonOutline from "../core/buttons/ButtonOutline";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const [isOpenSign, setIsOpenSign] = useState(false)
  const [auth, setAuth] = useState(true)

  function closeModalLogin() {
    setIsOpenLogin(false)
  }
  function closeModalSign() {
    setIsOpenSign(false)
  }

  function openModalLogin() {
    setIsOpenLogin(true)
    setIsOpenSign(false)
    setNav(false)
  }
  function openModalSign() {
    setIsOpenSign(true)
    setIsOpenLogin(false)
    setNav(false)
  }

  function LoginAuth () {
    setAuth(!auth)
  }

  function LogoutAuth () {
    setAuth(!auth)
    setIsOpenLogin(!isOpenLogin)
  }


  return (
    <>
      {/* Navbar Desktop */}
        <div className="hidden w-full md:flex justify-between items-center px-[64px] border-b-[1px] border-black">
          <Link href="/">
            <div className="font-bold text-2xl">
              <h2>Logo</h2>
            </div>
          </Link>
          <div className="flex justify-center items-center gap-4 ">
            <Link href="/teams" className="flex justify-center items-center">
              <p>Meet Team</p>
            </Link>
            <Link href="/works" className="flex justify-center items-center">
              <p>How it Works</p>
            </Link>
            <div className="relative h-[72px] flex justify-center items-center group gap-2">
              <Link href="/donate">
                <p>Donate</p>
              </Link>
                <BsChevronDown size={15} className="mt-1 transform-gpu transition-transform group-hover:rotate-180" />
              <div className="hidden group-hover:flex border border-black absolute top-[74px] left-0 w-[250px] bg-white shadow-lg px-8 flex-col justify-center py-4 z-10">
                <Link href="/campaigns">
                  <div className="py-2 hover:text-blue-500">Zip Code Campaigns</div>
                </Link>
                <Link href="/details">
                  <div className="py-2 hover:text-blue-500 whitespace-nowrap">Campaign Details</div>
                </Link>
              </div>
            </div>
            <Link href="/merch">
              <div className="h-[72px] flex-row flex justify-center items-center gap-2 group">
                <p>Merchandise</p>
              </div>
            </Link>
            {
              auth === true ? (
                <div className="flex justify-center items-center gap-4">
                  <div className="flex justify-center items-center">
                    <ButtonOutline title="Sign Up" onClick={openModalSign} />
                  </div>
                  <div className="flex justify-center items-center">
                    <ButtonPrimary title="Login" onClick={openModalLogin} />
                  </div>
                </div>
              ) : (
                <Link href="/" className="flex justify-center items-center" onClick={LogoutAuth}>
                  <ButtonPrimary title="Logout" onClick={openModalLogin} />
                </Link>
              )
            }
          </div>
        </div>
      {/* End Navbar Desktop */}

      {/* Hamburger */}
        <div className="fixed flex justify-between items-center w-full h-[72px] md:hidden border-b border-black px-[25px] bg-white z-[90] ">
          <Link href="/" className="font-bold text-2xl">Logo</Link>
          {nav ? 
            <AiOutlineClose size={25} onClick={() => setNav(!nav)} />
          : <AiOutlineMenu size={25} onClick={() => setNav(!nav)} />
          }
        </div>
      {/* End Hamburger */}

      {/* Navbar Mobile */}
        <div className={
          nav ?
            "fixed md:hidden top-[72px] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
          :
            "fixed md:hidden top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center h-[100vh] bg-white ease-in-out duration-500 z-[80]"
        }>
          <div className="w-full h-full px-[25px]">
            <ul className="space-y-4 text-base my-6">
              <li><Link href="/campaigns">Meet Teams</Link></li>
              <li><Link href="/works">How it Works</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li>
                <div className="flex justify-between items-center">
                  Merchaindise
                  <BsChevronDown size={15}/>
                </div>
              </li>
            </ul>
            <div className="w-full h-auto flex flex-col justify-center items-center gap-4">
              {
                auth === true ? (
                  <>
                    <ButtonOutlineFull title="Sign Up" onClick={openModalSign}/>
                    <ButtonPrimaryFull title="Login" onClick={openModalLogin}/>
                  </>
                ) : (
                  <Link className="w-full" href="/" onClick={LogoutAuth}>
                    <ButtonPrimaryFull title="Logout" onClick={openModalLogin} />
                  </Link>
                )
              }

            </div>
          </div>
        </div> 
      {/* End Navbar Mobile */}

      {/* Pop Over Modal Login*/}
      <Transition appear show={isOpenLogin} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModalLogin}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all border border-black">

                  <Dialog.Title
                    as="h3"
                    className="flex items-center justify-between px-4"
                  >
                    <div className="text-2xl font-bold">
                      LOGIN
                    </div>
                    <button>
                      <AiOutlineClose onClick={closeModalLogin} size={25} />
                    </button>
                  </Dialog.Title>

                    <div className="flex flex-col justify-center mt-4 gap-3 px-4">
                      <Label htmlFor="email">Email</Label>
                      <InputAuth type="email" placeholder="Your email" />
                      <Label htmlFor="password">Password</Label>
                      <InputAuth type="title" placeholder="**********" />
                      <div className="text-white items-center justify-center flex flex-col gap-[20px]">
                        <div className="space-x-2 mt-2">
                          <Checkbox id="terms1" />
                            <label
                              htmlFor="terms1"
                              className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                            >
                              Remember me
                            </label>
                        </div>
                          <Link href="/campaigns" onClick={closeModalLogin}>
                            <ButtonPrimary title="Login" onClick={LoginAuth}/>
                          </Link>
                          
                          <Link href="/teams" className="text-sm text-blue-500" onClick={closeModalLogin}>
                            Forgot Password?
                          </Link>
                          <div className="w-[85%] h-[1px] bg-black mx-auto"/>

                        <div className="flex flex-col items-center justify-center text-black">
                          <p>Don&apos;t have an account?</p>
                          <button onClick={openModalSign} className="text-blue-500 my-[15px] text-sm">Sign Up</button>
                        </div>
                        
                      </div>
                    </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*End Pop Over Modal Login*/}

      {/* Pop Over Modal Sign*/}
      <Transition appear show={isOpenSign} as={Fragment}>
        <Dialog as="div" className="relative z-[100]" onClose={closeModalSign}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all border border-black">

                <Dialog.Title
                  as="h3"
                  className="flex items-center justify-between px-4"
                >
                  <div className="text-2xl font-bold">
                    SIGN UP
                  </div>
                  <button>
                    <AiOutlineClose onClick={closeModalSign} size={25} />
                  </button>
                </Dialog.Title>

                  <div className="flex flex-col justify-center mt-4 gap-3 px-4">
                    <Label htmlFor="name">Name</Label>
                    <InputAuth type="name" placeholder="Your Name" />
                    <Label htmlFor="email">Email</Label>
                    <InputAuth type="email" placeholder="Your email" />
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <InputAuth type="phone" placeholder="Your phone" />
                    <Label htmlFor="password">Password</Label>
                    <InputAuth type="title" placeholder="**********" />
                    <div className="text-white items-center justify-center flex flex-col gap-[20px]">
                      <div className="space-x-2 mt-2">
                        <Checkbox id="terms2" />
                          <label
                            htmlFor="terms1"
                            className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-black"
                          >
                            I agree with <span className="text-blue-500">Terms</span> & <span className="text-blue-500">Privacy</span>
                          </label>
                      </div>
                        <Link href="/" onClick={closeModalSign}>
                          <ButtonPrimary onClick={openModalLogin} title="Sign Up"/>
                        </Link>

                        <div className="w-[85%] h-[1px] bg-black mx-auto"/>

                      <div className="flex flex-col items-center justify-center text-black">
                        <p>Already have an account?</p>
                        <button onClick={openModalLogin} className="text-blue-500 my-[15px]">Login</button>
                      </div>
                      
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/*End Pop Over Modal Sign*/}

    </>
  )
}

export default Navbar
