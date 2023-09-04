import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/logo-light.png";
import payments from "../../../public/assets/images/payments/american-ex.png";
import payments2 from "../../../public/assets/images/payments/discover.png";
import payments3 from "../../../public/assets/images/payments/master-card.png";
import payments4 from "../../../public/assets/images/payments/paypal.png";
import payments5 from "../../../public/assets/images/payments/paypal.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                <div className="logo flex h-20 font-bold text-2xl items-center">
  <span>
    Sp<span className="text-indigo-600">eak</span>Money
  </span>
</div>
                  <p className="mt-6 text-gray-300">
                  Start using Speak Money, the all-in-one financial management app that provides everything you need to achieve your financial goals.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-shopping-cart align-middle"
                          title="Buy Now"
                        ></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-dribbble align-middle"
                          title="dribbble"
                        ></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i className="uil uil-behance" title="Behance"></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i className="uil uil-linkedin" title="Linkedin"></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-facebook-f align-middle"
                          title="facebook"
                        ></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-instagram align-middle"
                          title="instagram"
                        ></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-twitter align-middle"
                          title="twitter"
                        ></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="mailto:support@shreethemes.in"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-envelope align-middle"
                          title="email"
                        ></i>
                      </a>
                    </li>
                    <li className="inline">
                      <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-indigo-600 dark:hover:border-indigo-600 hover:bg-indigo-600 dark:hover:bg-indigo-600"
                      >
                        <i
                          className="uil uil-file align-middle"
                          title="customization"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Company
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> About us
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Services
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Team
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Pricing
                      </a>
                    </li>
                 
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Blog
                      </a>
                    </li>
                  
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Usefull Links
                  </h5>
                  <ul className="list-none footer-list mt-6">
                    <li>
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Terms of
                        Services
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Privacy
                        Policy
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i>{" "}
                        Documentation
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Changelog
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href=""
                        className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                      >
                        <i className="uil uil-angle-right-b me-1"></i> Widget
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-gray-100 font-semibold">
                    Newsletter
                  </h5>
                  <p className="mt-6">
                    Sign up and receive the latest tips via email.
                  </p>
                  <form>
                    <div className="grid grid-cols-1">
                      <div className="foot-subscribe my-3">
                        <label className="form-label">
                          Write your email{" "}
                          <span className="text-red-600">*</span>
                        </label>
                        <div className="form-icon relative mt-2">
                          <i
                            data-feather="mail"
                            className="w-4 h-4 absolute top-3 left-4"
                          ></i>
                          <input
                            type="email"
                            className="form-input bg-gray-800 border border-gray-800 text-gray-100 pl-12 focus:shadow-none"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container text-center">
          <div className="grid md:grid-cols-2 items-center">
           

            <ul className="list-none md:text-right text-center mt-6 md:mt-0">
              <li className="inline">
                <a href="">
                  <Image
                    src={payments}
                    className="max-h-6 inline"
                    title="American Express"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="">
                  <Image
                    src={payments2}
                    className="max-h-6 inline"
                    title="Discover"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="">
                  <Image
                    src={payments3}
                    className="max-h-6 inline"
                    title="Master Card"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="">
                  <Image
                    src={payments4}
                    className="max-h-6 inline"
                    title="Paypal"
                    alt=""
                  />
                </a>
              </li>
              <li className="inline">
                <a href="">
                  <Image
                    src={payments5}
                    className="max-h-6 inline"
                    title="Visa"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
