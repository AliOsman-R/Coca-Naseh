import { footerColumns, paymentMethods, socialLinks } from "../data/data"

const Footer = () => {
  return (
    <div className="h-full container-style py-10 border-t border-gray-200">
      <div className="flex flex-col">
        <div className="flex max-md:flex-col justify-between gap-8">
          {/* Logo and Description Section */}
          <div className="flex flex-col gap-5 lg:w-[30%] max-md:w-full">
            <div className="flex items-center gap-2">
              <span className="bg-primary-color rounded-full text-white font-bold size-7 text-2xl flex items-center justify-center">
                C
              </span>
              <h1 className="text-2xl font-bold text-secondary-color">coca</h1>
            </div>
            <p className="text-text-color text-sm">
              Stay Up To Date With The Latest Legal Developments And Practical Advice From Qatar's Leading Lawyers By
              Subscribing To The Newsletter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label, color }, index) => (
                <a
                  key={index}
                  onClick={(e) => e.preventDefault()}
                  href={href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  aria-label={label}
                >
                  <Icon color={color} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-[60%]">
            {footerColumns.map(({ title, links }, index) => (
              <div key={index}>
                <h3 className="font-bold text-lg mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map(({ href, label }, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={href}
                        onClick={(e) => (href !== "#" ? (window.location.hash = href) : e.preventDefault())}
                        className="text-text-color hover:text-gray-900 transition-colors"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-5 my-8 rounded-lg">
          <p className="text-text-color text-sm mb-4 md:mb-0">All Rights Reserved @ XXXXXXXX 2022</p>
          <div className="flex items-center gap-4">
            {paymentMethods.map(({ Icon, href, label, color }, index) => (
              <a
                key={index}
                onClick={(e) => e.preventDefault()}
                href={href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={label}
              >
                <Icon size={24} color={color} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer