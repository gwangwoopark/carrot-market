import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 dark place-content-center py-20 px-20 grid lg:grid-cols-2 xl:grid-cols-3 gap-10 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
        <span className="font-semibold dark:text-white text-3xl">Select Item</span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between my-2"
            >
              <span className="text-gray-500 dark:text-white">Grey Chair</span>
              <span className="font-semibold dark:text-white">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$39</span>
        </div>
        <div className="flex">
          <button className="mt-5 dark:bg-black dark:border-white dark:border dark:hover:bg-white dark:hover:text-black bg-blue-500 text-white p-2 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
            Checkout
          </button>
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
        <div className="bg-blue-500 portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-40">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-zinc-300 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition"></button>
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition"></button>
            </div>
            <div className="flex items-center space-x-5">
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-white rounded-lg py-2 px-8 text-xs">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* <form className="flex flex-col space-y-2 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded "
        />
        <span className="hidden peer-invalid:block peer-invalid:text-red-500">
          This input is invalid
        </span>
        <span className="hidden peer-valid:block peer-valid:text-teal-500">
          Awesome username
        </span>
        <span className="hidden peer-hover:block peer-hover:text-amber-500">
          Hello
        </span>
        <input type="submit" value="Login" className="bg-white"></input>
      </form>
      <div className="felx flex-col space-y-2 p-5">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">
            What is my faforite food.
          </summary>
          <span>김치</span>
        </details>
        <ul className="list-decimal marker:text-red-800">
          <li>hi</li>
          <li>hi</li>
          <li>hi</li>
        </ul>
        <input
          type="file"
          className=" file:cursor-pointer file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border file:transition-colors file:border-0 file:rounded-xl file:px-5 file:text-white file:bg-purple-400"
        ></input>
        <p className="first-letter:text-7xl first-letter:hover:text-purple-400 first-line:bg-purple-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          totam placeat ea perferendis maxime impedit quod possimus cupiditate
          id porro nobis deleniti in veritatis, iste asperiores soluta dicta
          magnam et.
        </p>
      </div> */}
    </div>
  );
};

export default Home;
