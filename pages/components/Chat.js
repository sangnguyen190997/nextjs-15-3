import React, { Fragment, useState } from "react";

const Chat = () => {
  const [activeChat, setActiveChat] = useState(false);

  const onChat = () => {
    setActiveChat(!activeChat);
  };
  return (
    <Fragment>
      <div className="chat_messenger" onClick={() => onChat()}>
        <svg x="0" y="0" width="60px" height="60px">
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
              <circle fill="#383838" cx="30" cy="30" r="30"></circle>
              <svg x="10" y="10">
                <g transform="translate(0.000000, -10.000000)" fill="#FFFFFF">
                  <g id="logo" transform="translate(0.000000, 10.000000)">
                    <path
                      d="M20,0 C31.2666,0 40,8.2528 40,19.4 C40,30.5472 31.2666,38.8 
                      20,38.8 C17.9763,38.8 16.0348,38.5327 14.2106,38.0311 C13.856,37.9335 13.4789,37.9612 
                      13.1424,38.1098 L9.1727,39.8621 C8.1343,40.3205 6.9621,39.5819 6.9273,38.4474 L6.8184,34.8894 
                      C6.805,34.4513 6.6078,34.0414 6.2811,33.7492 C2.3896,30.2691 0,25.2307 0,19.4 C0,8.2528 8.7334,0 
                      20,0 Z M7.99009,25.07344 C7.42629,25.96794 8.52579,26.97594 9.36809,26.33674 L15.67879,21.54734 
                      C16.10569,21.22334 16.69559,21.22164 17.12429,21.54314 L21.79709,25.04774 C23.19919,26.09944 
                      25.20039,25.73014 26.13499,24.24744 L32.00999,14.92654 C32.57369,14.03204 31.47419,13.02404 
                      30.63189,13.66324 L24.32119,18.45264 C23.89429,18.77664 23.30439,18.77834 22.87569,18.45674 
                      L18.20299,14.95224 C16.80079,13.90064 14.79959,14.26984 13.86509,15.75264 L7.99009,25.07344 Z"
                    ></path>
                  </g>
                </g>
              </svg>
            </g>
          </g>
        </svg>
      </div>
      {activeChat && (
        // <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
        //   <div className="flex flex-col flex-grow w-full bg-white shadow-xl rounded-lg overflow-hidden">
        //     <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        //       <div className="flex w-full mt-2 space-x-3 max-w-xs">
        //         <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
        //         <div>
        //           <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
        //             <p className="text-sm">
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        //             </p>
        //           </div>
        //           <span className="text-xs text-gray-500 leading-none">
        //             2 min ago
        //           </span>
        //         </div>
        //       </div>
        //       <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
        //         <div>
        //           <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
        //             <p className="text-sm">
        //               Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        //               sed do eiusmod.
        //             </p>
        //           </div>
        //           <span className="text-xs text-gray-500 leading-none">
        //             2 min ago
        //           </span>
        //         </div>
        //         <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
        //       </div>
        //     </div>
        //   </div>
        // </div>
        <div class="active_chat bg-white border-solid">
          <div class="w-full border rounded">
            <div class="hidden lg:block">
              <div class="border border-indigo-600">
                <div class="relative flex items-center p-3 border-b border-gray-300">
                  <img
                    class="object-cover w-10 h-10 rounded-full"
                    src="https://picsum.photos/200"
                    alt="username"
                  />
                  <span class="block ml-2 font-bold text-gray-600">Admin</span>
                  <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3"></span>
                </div>
                <div class="relative w-full p-6 overflow-y-auto">
                  <ul class="space-y-2">
                    <li class="flex justify-start">
                      <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                        <span class="block">Hi</span>
                      </div>
                    </li>
                    <li class="flex justify-end">
                      <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                        <span class="block">Hiiii</span>
                      </div>
                    </li>
                    <li class="flex justify-end">
                      <div class="relative max-w-xl px-4 py-2 text-gray-700 bg-gray-100 rounded shadow">
                        <span class="block">how are you?</span>
                      </div>
                    </li>
                    <li class="flex justify-start">
                      <div class="relative max-w-xl px-4 py-2 text-gray-700 rounded shadow">
                        <span class="block">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit.
                        </span>
                      </div>
                    </li>
                  </ul>
                  <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6 h-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-5 h-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                        />
                      </svg>
                    </button>

                    <input
                      type="text"
                      placeholder="Message"
                      class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                      name="message"
                      required
                    />
                    <button type="submit">
                      <svg
                        class="w-5 h-5 text-gray-500 origin-center transform rotate-90"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Chat;
