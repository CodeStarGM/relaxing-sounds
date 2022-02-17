import Circle from "../components/Circle";

export default function Home() {
  const times = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <>
      <div className="h-screen w-screen g2">
        <nav className=" w-screen h-10 flex items-center py-14 px-10 justify-center ">
          <a
            href=""
            className="primaryText bg-white rounded-3xl text-2xl px-8 py-4"
          >
            Rain
          </a>
          <a href="" className="text-white text-2xl px-8 py-8">
            Ocean
          </a>
          <a href="" className="text-white text-2xl px-8 py-8">
            Animals
          </a>
          <a href="" className="text-white text-2xl px-8 py-8">
            Nature
          </a>
          <a href="" className="text-white text-2xl px-8 py-8">
            Water fall
          </a>
        </nav>
        <div className="flex justify-center items-center py-8">
          {/* circle */}
          <div class="grid grid-cols-8 gap-8">
            {times.map(() => (
              <Circle
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-8 w-8 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                }
              />
            ))}
          </div>

          {/* circle */}
        </div>
      </div>
    </>
  );
}
