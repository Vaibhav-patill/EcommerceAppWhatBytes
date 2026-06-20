import Link from "next/link";

const currentYear = new Date().getFullYear();

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.3-1.5 1.6-1.5H16.5V4.3c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v2.7H7v3h2.5V21h4Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21 5.9c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.8.4-1.6.7-2.5.9a3.6 3.6 0 0 0-6.1 3.3A10.2 10.2 0 0 1 4.6 5a3.6 3.6 0 0 0 1.1 4.8 3.6 3.6 0 0 1-1.6-.5c0 1.7 1.2 3.2 2.9 3.5a3.6 3.6 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.5A7.2 7.2 0 0 1 3 16.6a10.2 10.2 0 0 0 5.5 1.6c6.6 0 10.2-5.5 10.2-10.2v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
        {/* Filters */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Filters
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white"
              >
                All
              </Link>
            </li>

            <li>
              <Link
                href="/?category=electronics"
                className="transition-colors hover:text-white"
              >
                Electronics
              </Link>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            About Us
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/about"
                className="transition-colors hover:text-white"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-3 text-sm font-semibold text-white">
            Follow Us
          </h3>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-9 items-center justify-center rounded-full bg-brand-700 transition-colors hover:bg-brand-600"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex size-9 items-center justify-center rounded-full bg-brand-700 transition-colors hover:bg-brand-600"
            >
              <TwitterIcon />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-9 items-center justify-center rounded-full bg-brand-700 transition-colors hover:bg-brand-600"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-brand-700/60 px-4 py-4 text-center text-xs text-slate-400 sm:px-6">
        &copy; {currentYear} Shophub. All rights reserved.
      </div>
    </footer>
  );
}