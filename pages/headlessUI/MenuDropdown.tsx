import { Menu, Transition } from "@headlessui/react"

export default function MyDropdown() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Menu as="div" className="relative">
        <Menu.Button className="bg-blue-500 px-4 py-2 rounded-md mb-2">
          More
        </Menu.Button>
        <Transition
          enter="transition duration-300"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transition duration-300"
          leaveFrom="opacty-100 scale-100"
          leaveTo="opacity-0 scale-50"
        >
          <Menu.Items className="absolute bg-white text-black top-full shadow-lg w-56 rounded-sm">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` py-3 px-6 flex hover:bg-indigo-100${
                    active && " bg-indigo-100 "
                  }`}
                  href="/account-settings"
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` py-3 px-6 flex hover:bg-indigo-100${
                    active && " bg-indigo-100 "
                  }`}
                  href="/account-settings"
                >
                  Documentation
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` py-3 px-6 flex hover:bg-indigo-100${
                    active && " bg-indigo-100 "
                  }`}
                  href="/account-settings"
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
