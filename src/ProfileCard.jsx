

// eslint-disable-next-line react/prop-types
const ProfileCard = ({ aiAssistant }) => {
  return (
<>
{
        // eslint-disable-next-line react/prop-types
aiAssistant.map(ai => console.log(ai.name[1]))}


        <div className="bg-white">
          {/* <!-- Header and Page Header --> */}
          <div className="relative">
            {/* <!-- Header --> */}
            <header className="relative z-10">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between border-b border-gray-200 py-6 md:justify-start md:space-x-10">
                  <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/plus/img/logos/mark.svg?color=rose&shade=500" alt="" />
                    </a>
                  </div>
                  <div className="-my-2 -mr-2 md:hidden">
                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500" aria-expanded="false">
                      <span className="absolute -inset-0.5"></span>
                      <span className="sr-only">Open menu</span>
                      <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                    </button>
                  </div>
                  <nav className="hidden space-x-10 md:flex">
                    <div className="relative">
                      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                      <button type="button" className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2" aria-expanded="false">
                        <span>Solutions</span>
                        {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}
                        <svg className="ml-2 size-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </button>

                      {/* <!--
                'Solutions' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              --> */}

                    </div>

                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Pricing</a>
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">Docs</a>

                    <div className="relative">
                      {/* <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" --> */}
                      <button type="button" className="group inline-flex items-center rounded-md bg-white text-base font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2" aria-expanded="false">
                        <span>More</span>
                        {/* <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" --> */}
                        <svg className="ml-2 size-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                      </button>
                      {/* 
              <!--
                'More' flyout menu, show/hide based on flyout menu state.

                Entering: "transition ease-out duration-200"
                  From: "opacity-0 translate-y-1"
                  To: "opacity-100 translate-y-0"
                Leaving: "transition ease-in duration-150"
                  From: "opacity-100 translate-y-0"
                  To: "opacity-0 translate-y-1"
              --> */}

                    </div>
                  </nav>
                  <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                    <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</a>
                    <a href="#" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600">Sign up</a>
                  </div>
                </div>
              </div>

              {/* <!--
        Mobile menu, show/hide based on mobile menu state.

        Entering: "duration-200 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
              <div className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
                <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black/5">
                  <div className="px-5 pb-6 pt-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=rose&shade=500" alt="Your Company" />
                      </div>
                      <div className="-mr-2">
                        <button type="button" className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                          <span className="absolute -inset-0.5"></span>
                          <span className="sr-only">Close menu</span>
                          <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <svg className="size-6 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">Analytics</span>
                        </a>
                        <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <svg className="size-6 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">Engagement</span>
                        </a>
                        <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <svg className="size-6 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">Security</span>
                        </a>
                        <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <svg className="size-6 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">Integrations</span>
                        </a>
                        <a href="#" className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50">
                          <svg className="size-6 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                          </svg>
                          <span className="ml-3 text-base font-medium text-gray-900">Automations</span>
                        </a>
                      </nav>
                    </div>
                  </div>
                  <div className="space-y-6 px-5 py-6">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Pricing</a>

                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Docs</a>
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Help Center</a>
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Guides</a>
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Events</a>
                      <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">Security</a>
                    </div>
                    <div>
                      <a href="#" className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-600">Sign up</a>
                      <p className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?
                        <a href="#" className="text-rose-600 hover:text-rose-500">Sign in</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* <!-- Page Header --> */}
            <div className="relative mx-auto max-w-2xl px-6 py-24 lg:max-w-7xl lg:px-8 lg:py-32">
              <div className="relative">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">Choose Your New Generative A.I Assistant</h1>
                <p className="mt-6 max-w-2xl text-xl text-gray-500">Choose an affordable plan that&apos;s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
              </div>
            </div>
          </div>

          <main>
            {/* <!-- Pricing Section --> */}
            <section className="relative" aria-labelledby="pricing-heading">
              <h2 id="pricing-heading" className="sr-only">Pricing</h2>

              {/* <!-- Tiers --> */}
              <div className="mx-auto max-w-2xl space-y-12 px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:space-y-0 lg:px-8">
                <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">some</h3>
                    <p className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-bold tracking-tight">$24</span>
                      <span className="ml-1 text-xl font-semibold">/month</span>
                    </p>
                    <p className="mt-6 text-gray-500">The essentials to provide your best work for clients.</p>

                    {/* <!-- Feature list --> */}
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">5 products</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Up to 1,000 subscribers</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Basic analytics</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">48-hour support response time</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-rose-50 px-6 py-3 text-center font-medium text-rose-700 hover:bg-rose-100">Monthly billing</a>
                </div>
                <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">some</h3>

                    <p className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-bold tracking-tight">$32</span>
                      <span className="ml-1 text-xl font-semibold">/month</span>
                    </p>
                    <p className="mt-6 text-gray-500">A plan that scales with your rapidly growing business.</p>

                    {/* <!-- Feature list --> */}
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">25 products</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Up to 10,000 subscribers</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Advanced analytics</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">24-hour support response time</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Marketing automations</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-rose-50 px-6 py-3 text-center font-medium text-rose-700 hover:bg-rose-100">Monthly billing</a>
                </div>
                <div className="relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
                    <p className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-bold tracking-tight">$48</span>
                      <span className="ml-1 text-xl font-semibold">/month</span>
                    </p>
                    <p className="mt-6 text-gray-500">Dedicated support and infrastructure for your company.</p>

                    {/* <!-- Feature list --> */}
                    <ul role="list" className="mt-6 space-y-6">
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Unlimited products</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Unlimited subscribers</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Advanced analytics</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">1-hour, dedicated support response time</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Marketing automations</span>
                      </li>
                      <li className="flex">
                        <svg className="size-6 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        <span className="ml-3 text-gray-500">Custom integrations</span>
                      </li>
                    </ul>
                  </div>

                  <a href="#" className="mt-8 block w-full rounded-md border border-transparent bg-rose-50 px-6 py-3 text-center font-medium text-rose-700 hover:bg-rose-100">Monthly billing</a>
                </div>
              </div>
            </section>

            {/* <!-- Logo Cloud --> */}
            <section aria-labelledby="customer-heading" className="mx-auto max-w-2xl px-6 py-24 lg:max-w-7xl lg:px-8 lg:py-32">
              <h2 id="customer-heading" className="sr-only">Our customers</h2>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/plus/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/plus/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/plus/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
                </div>
                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/plus/img/logos/transistor-logo-gray-400.svg" alt="Transistor" />
                </div>
                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                  <img className="h-12" src="https://tailwindui.com/plus/img/logos/workcation-logo-gray-400.svg" alt="Workcation" />
                </div>
              </div>
            </section>

            {/* <!-- Testimonial --> */}
            <div className="relative">
              {/* <!-- Decorative background --> */}
              <div aria-hidden="true" className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-white to-gray-50"></div>

              <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <div className="relative overflow-hidden rounded-xl bg-rose-500 px-8 py-24 shadow-2xl lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-16">
                  <div className="absolute inset-0 opacity-50 mix-blend-multiply saturate-0 filter">
                    <img src="https://images.unsplash.com/photo-1601381718415-a05fb0a261f3?ixid=MXwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODl8fHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1216&q=80" alt="" className="size-full object-cover" />
                  </div>
                  <div className="relative lg:col-span-1">
                    <img className="h-12 w-auto" src="https://tailwindui.com/plus/img/logos/workcation-logo-white.svg" alt="" />
                    <blockquote className="mt-6 text-white">
                      <p className="text-xl font-medium sm:text-2xl">This app has completely transformed how we interact with customers. We&apos;ve seen record bookings, higher customer satisfaction, and reduced churn.</p>
                      <footer className="mt-6">
                        <p className="flex flex-col font-medium">
                          <span>Marie Chilvers</span>
                          <span>CEO, Workcation</span>
                        </p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- FAQ --> */}
            <section aria-labelledby="faq-heading" className="mx-auto max-w-2xl divide-y divide-gray-200 px-6 py-24 lg:max-w-7xl lg:px-8 lg:py-32">
              <h2 id="faq-heading" className="text-3xl font-bold tracking-tight text-gray-900">Frequently asked questions</h2>
              <div className="mt-8">
                <dl className="divide-y divide-gray-200">
                  <div className="pb-8 pt-6 md:grid md:grid-cols-12 md:gap-8">
                    <dt className="text-base font-medium text-gray-900 md:col-span-5">What&#039;s the best thing about Switzerland?</dt>
                    <dd className="mt-2 md:col-span-7 md:mt-0">
                      <p className="text-base text-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>
                    </dd>
                  </div>

                  {/* <!-- More questions... -->
          <!-- More items... --> */}
                </dl>
              </div>
            </section>
          </main>

          {/* <!-- Footer --> */}
          <footer className="bg-gray-50" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
              <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                <div className="space-y-8 xl:col-span-1">
                  <img className="h-10" src="https://tailwindui.com/plus/img/logos/mark.svg?color=gray&shade=300" alt="Company name" />
                  <p className="text-base text-gray-500">Making the world a better place through constructing elegant hierarchies.</p>
                  <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Facebook</span>
                      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Instagram</span>
                      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">X</span>
                      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">GitHub</span>
                      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Dribbble</span>
                      <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">Solutions</h3>
                      <ul role="list" className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Marketing</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Analytics</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Commerce</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Insights</a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-base font-medium text-gray-900">Support</h3>
                      <ul role="list" className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Guides</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">API Status</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                      <h3 className="text-base font-medium text-gray-900">Company</h3>
                      <ul role="list" className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Jobs</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Press</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Partners</a>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-12 md:mt-0">
                      <h3 className="text-base font-medium text-gray-900">Legal</h3>
                      <ul role="list" className="mt-4 space-y-4">
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Claim</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Privacy</a>
                        </li>
                        <li>
                          <a href="#" className="text-base text-gray-500 hover:text-gray-900">Terms</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 border-t border-gray-200 pt-8">
                <p className="text-base text-gray-400 xl:text-center">&copy; 2020 Your Company, Inc. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
        </>
  );
}
export default ProfileCard;