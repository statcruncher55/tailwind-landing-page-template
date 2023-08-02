import Logo from "./logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 ">
          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
            <div className="text-sm ">
              <a
                href="#0"
                className="hover:underline transition duration-150 ease-in-out"
              >
                Buy Tokens on DexTools.io
              </a>{" "}
              ·{" "}
              {/* <a
                href="#0"
                className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out"
              >
                Privacy Policy
              </a> */}
              <div className="text-sm mr-4 mt-4">&copy; GoobaToken.xyz</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
