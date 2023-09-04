/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import client1 from "../../public/assets/images/client/01.jpg";
import client2 from "../../public/assets/images/client/02.jpg";
import client3 from "../../public/assets/images/client/03.jpg";
import client4 from "../../public/assets/images/client/04.jpg";
import client5 from "../../public/assets/images/client/05.jpg";
import client6 from "../../public/assets/images/client/06.jpg";
import blog1 from "../../public/assets/images/blog/01.jpg";
import blog2 from "../../public/assets/images/blog/02.jpg";
import blog3 from "../../public/assets/images/blog/03.jpg";

const ChoosePricingPlan = () => {
	return (
		<div class="relative md:py-24 py-16">
			<div class="container">
				<div class="grid grid-cols-1 pb-8 text-center">
					<h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
						Choose Pricing Plan
					</h3>

					<p class="text-slate-400 max-w-xl mx-auto">
						Start working with speak money that can provide
						everything you need to generate awareness, drive
						traffic, connect.
					</p>
				</div>
				{/* <!--end grid--> */}

				<div class="grid lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
					<div class="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
						<div class="p-6 py-8">
							<h6 class="font-bold uppercase mb-5 text-indigo-600">
								Starter
							</h6>

							<div class="flex mb-5">
								<span class="text-xl font-semibold">$</span>
								<span class="price text-4xl font-semibold mb-0">
									39
								</span>
								<span class="text-xl font-semibold self-end mb-1">
									/mo
								</span>
							</div>

							<ul class="list-none text-slate-400">
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Full Access
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Source Files
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Free Appointments
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Enhanced Security
								</li>
							</ul>
							<a
								href=""
								class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
							>
								Get Started
							</a>
						</div>
					</div>

					<div class="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
						<div class="p-6 py-8 md:pl-10">
							<h6 class="font-bold uppercase mb-5 text-indigo-600">
								Business
							</h6>

							<div class="flex mb-5">
								<span class="text-xl font-semibold">$</span>
								<span class="price text-4xl font-semibold mb-0">
									49
								</span>
								<span class="text-xl font-semibold self-end mb-1">
									/mo
								</span>
							</div>

							<ul class="list-none text-slate-400">
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Full Access
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Source Files
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Free Appointments
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Enhanced Security
								</li>
							</ul>
							<a
								href=""
								class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
							>
								Try it Now
							</a>
						</div>
					</div>

					<div class="group border-b-[3px] dark:border-gray-700 hover:border-indigo-600 dark:hover:border-indigo-600 transition-all duration-500 ease-in-out hover:scale-105 relative shadow dark:shadow-gray-800 rounded-md bg-white dark:bg-slate-900">
						<div class="p-6 py-8 md:pl-10">
							<h6 class="font-bold uppercase mb-5 text-indigo-600">
								Professional
							</h6>

							<div class="flex mb-5">
								<span class="text-xl font-semibold">$</span>
								<span class="price text-4xl font-semibold mb-0">
									59
								</span>
								<span class="text-xl font-semibold self-end mb-1">
									/mo
								</span>
							</div>

							<ul class="list-none text-slate-400">
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Full Access
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Source Files
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Free Appointments
								</li>
								<li class="mb-1 flex">
									<i class="uil uil-check-circle text-indigo-600 text-xl mr-2"></i>{" "}
									Enhanced Security
								</li>
							</ul>
							<a
								href=""
								class="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-5"
							>
								Try it Now
							</a>
						</div>
					</div>
				</div>
				{/* <!--end grid--> */}
			</div>
			{/* <!--end container--> */}

			{/* <!--end container--> */}

			<div class="container md:mt-24 mt-16">
				<div class="grid md:grid-cols-12 grid-cols-1 items-center">
					<div class="md:col-span-6">
						<h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">
							SpeakMoney Blogs
						</h6>
						<h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
							Read Our Latest <br /> Blogs
						</h3>
					</div>

					<div class="md:col-span-6">
						<p class="text-slate-400 max-w-xl">
							Stay updated with SpeakMoney's latest Blogs and
							insights.
						</p>
					</div>
				</div>
				{/* <!--end grid--> */}

				<div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-8 gap-[30px]">
					<div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
						<Image src={blog1} alt="" />

						<div class="content p-6">
							<a
								href="/"
								class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
							>
								Design your apps in your own way
							</a>
							<p class="text-slate-400 mt-3">
								Discover how to customize your apps for better
								user experiences.
							</p>

							<div class="mt-4">
								<a
									href="/"
									class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Read More{" "}
									<i class="uil uil-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
						<Image src={blog2} alt="" />

						<div class="content p-6">
							<a
								href="/"
								class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
							>
								How apps are changing the IT world
							</a>
							<p class="text-slate-400 mt-3">
								Explore the impact of apps on the IT industry
								and beyond.
							</p>

							<div class="mt-4">
								<a
									href="/"
									class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Read More{" "}
									<i class="uil uil-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="blog relative rounded-md shadow dark:shadow-gray-800 overflow-hidden">
						<Image src={blog3} alt="" />

						<div class="content p-6">
							<a
								href="/"
								class="title h5 text-lg font-medium hover:text-indigo-600 duration-500 ease-in-out"
							>
								Smartest Applications for Business
							</a>
							<p class="text-slate-400 mt-3">
								Learn about the smartest applications to boost
								your business.
							</p>

							<div class="mt-4">
								<a
									href="/"
									class="btn btn-link font-normal hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Read More{" "}
									<i class="uil uil-arrow-right"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
				{/* <!--end grid--> */}
			</div>

			{/* <!--end container--> */}
		</div>
	);
};

export default ChoosePricingPlan;
