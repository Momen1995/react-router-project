import { FaFontAwesomeFlag } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className=" p-12 bg-[#183153] text-white mt-12">
        <div className="w-full lg:w-10/12 mx-auto flex flex-col lg:flex-row  gap-5 justify-between">
          <aside className=" w-full lg:w-1/3 space-y-2">
            <p className="mb-7">
              <FaFontAwesomeFlag className="text-3xl" />
            </p>
            <h3 className="text-[17px]">Go Make Something Awesome</h3>
            <p className="py-1">
              Font Awesome is the internet's icon library and toolkit used by
              millions of designers, developers, and content creators.
            </p>
            <p className="py-1">
              Made with and in Bentonville, Boston, Chicago, Grand Rapids,
              Joplin, Kansas City, Seattle, Tampa, and Vergennes.
            </p>
          </aside>
          <div className="flex flex-row justify-between gap-20  mb-6 lg:mb-0">
            <nav className="flex flex-col gap-3">
              <header className="footer-title">Project</header>
              <a className="link link-hover">Download</a>
              <a className="link link-hover">Changelog</a>
              <a className="link link-hover">Commision Icon</a>
              <a className="link link-hover">All Version</a>
            </nav>
            <nav className="flex flex-col gap-3">
              <header className="footer-title ">Community</header>
              <a className="link link-hover">Github</a>
              <a className="link link-hover">Icon request</a>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">Blog Awesome</a>
            </nav>
          </div>
          <div className="flex flex-col gap-3">
            <header className="footer-title">Help</header>
            <a className="link link-hover">Support</a>
            <a className="link link-hover">Troubleshooting</a>
            <a className="link link-hover">Contact Us</a>
            <a className="link link-hover">Status</a>
          </div>
        </div>
        <p className="text-center mt-6 mb-2">© Fonticons, Inc.</p>
      </footer>
    </div>
  );
};

export default Footer;
