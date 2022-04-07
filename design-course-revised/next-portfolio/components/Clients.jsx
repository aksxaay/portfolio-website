import React from 'react'

function Clients() {
  return (
    <section className="container mx-auto mt-32 flex w-full items-center justify-between px-8 md:px-14 lg:px-24">
      <section className="w-full">
        <h2 id="clients" className="secondary-title">
          Clients
        </h2>
        <p className="section-paragraph">
          I’ve also explored various options, which include free-lancing to meet
          the client's need(s)
        </p>
        {/* <!-- Clients --> */}
        <div className="space-y-12">
          <div className="flex w-full flex-wrap justify-center rounded-lg border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            {/* <!-- Client logo --> */}
            <div className="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* <!-- Client info --> */}
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold text-white">Apple, inc.</h3>

              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">UI/UX</div>
                <div className="badge">Frontend development</div>
              </div>

              <p className="text-secondary">
                I’ve had the pleasure of working with multiple Fortune 500
                companies, designing and implementing both frontend and backend.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-wrap justify-center rounded-lg border border-nav p-16 lg:flex-nowrap lg:justify-start lg:space-x-32 lg:px-32 lg:py-20">
            {/* <!-- Client logo --> */}
            <div className="mb-6 lg:mb-0">
              <svg
                width="80"
                height="96"
                viewBox="0 0 80 96"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M66.6983 92.1599C61.5487 97.2095 55.867 96.4223 50.4513 94.0415C44.6936 91.6127 39.4299 91.4591 33.3492 94.0415C25.7767 97.3439 21.7577 96.3839 17.1972 92.1599C-8.55106 65.3759 -4.75058 24.5759 24.5131 23.0399C31.6105 23.4239 36.5796 27.0047 40.7601 27.3023C46.9739 26.0255 52.9216 22.3679 59.5724 22.8479C67.5629 23.5007 73.5392 26.6879 77.5297 32.4191C61.0926 42.4031 64.9881 64.2911 80.0855 70.4351C77.0641 78.4511 73.1876 86.3711 66.6888 92.2271L66.6983 92.1599ZM40.19 22.7519C39.4204 10.8479 48.9691 1.05595 59.9525 0.0959473C61.4632 13.8239 47.6009 24.0959 40.19 22.7519Z"
                  fill="white"
                />
              </svg>
            </div>

            {/* <!-- Client info --> */}
            <div className="flex flex-wrap justify-center text-center lg:block lg:text-left">
              <h3 className="text-3xl font-semibold text-white">Apple, inc.</h3>

              <div className="mt-6 mb-8 flex w-full flex-wrap justify-center gap-3 lg:w-auto lg:justify-start">
                <div className="badge">UI/UX</div>
                <div className="badge">Frontend development</div>
              </div>

              <p className="text-secondary">
                I’ve had the pleasure of working with multiple Fortune 500
                companies, designing and implementing both frontend and backend.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Clients
