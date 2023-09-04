import Image from "next/image";
import Link from "next/link";
import React from "react";

const BusinessExpert = () => {
	return (
		<div class="relative md:py-24 py-16">
			<div class="container md:mt-24 mt-16">
				<div class="grid grid-cols-1 pb-8 text-center">
					<h6 class="text-indigo-600 text-sm font-bold uppercase mb-2">
						Who We Are ?
					</h6>
					<h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
						Financial Strategies and Top <br /> Performance
						Solutions
					</h3>

					<p class="text-slate-400 max-w-xl mx-auto">
						Start using Speak Money, the all-in-one financial
						management app that provides everything you need to
						achieve your financial goals.
					</p>
				</div>

				<div class="grid md:grid-cols-3 grid-cols-1 mt-8 gap-[30px]">
					<div class="group text-center">
						<i
							data-feather="pie-chart"
							class="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"
						></i>

						<div class="mt-6">
							<a
								href=""
								class="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out"
							>
								Smart Financial Planning
							</a>

							<p class="text-slate-400 mt-4">
								We offer advanced financial planning solutions
								to help you achieve your financial goals.
							</p>

							<div class="mt-4">
								<a
									href=""
									class="btn btn-link hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Learn More{" "}
									<i class="uil uil-arrow-right align-middle"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="group text-center">
						<i
							data-feather="briefcase"
							class="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"
						></i>

						<div class="mt-6">
							<a
								href=""
								class="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out"
							>
								Secure Financial Management
							</a>

							<p class="text-slate-400 mt-4">
								We prioritize the security of your financial
								data and transactions.
							</p>

							<div class="mt-4">
								<a
									href=""
									class="btn btn-link hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Learn More{" "}
									<i class="uil uil-arrow-right align-middle"></i>
								</a>
							</div>
						</div>
					</div>

					<div class="group text-center">
						<i
							data-feather="target"
							class="h-10 w-10 stroke-1 group-hover:stroke-[1.5px] group-hover:text-indigo-600 transition-all duration-500 ease-in-out mx-auto"
						></i>

						<div class="mt-6">
							<a
								href=""
								class="text-xl font-semibold group-hover:text-indigo-600 transition-all duration-500 ease-in-out"
							>
								User-Friendly Experience
							</a>

							<p class="text-slate-400 mt-4">
								We focus on delivering a seamless and
								user-friendly experience for managing your
								finances.
							</p>

							<div class="mt-4">
								<a
									href=""
									class="btn btn-link hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out"
								>
									Learn More{" "}
									<i class="uil uil-arrow-right align-middle"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessExpert;
