import Image from 'next/image'
import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {modalState} from '../atoms/ModalAtom'

export default function Header() {
  const { data: session } = useSession()
  const router = useRouter();

  const [open, setOpen] = useRecoilState(modalState)

  return (
    <div className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between xl:mx-auto">
        <div
          onClick={() => router.push('/')}
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
        >
          <Image
            src="http://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          onClick={() => router.push('/')}
          className="relative inline-grid w-10 flex-shrink-0 cursor-pointer lg:hidden"
        >
          <Image
            src="http://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="max-w-xs">
          <div className="relative mt-1 rounded-md p-3 ">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-gray-500 focus:ring-gray-400 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4">
          <HomeIcon onClick={() => router.push('/')} className="navbtn" />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navbtn relative">
                <PaperAirplaneIcon className="navbtn rotate-45" />
                <div className="absolute -top-1 -right-2 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </div>
              </div>
              <PlusCircleIcon onClick={()=> setOpen(true) } className="navbtn" />
              <UserGroupIcon className="navbtn" />
              <HeartIcon className="navbtn" />

              <img
                src={session?.user?.image}
                alt=""
                className="h-10 w-10 cursor-pointer rounded-full"
                onClick={signOut}
              />
            </>
          ) : (
            <button onClick={signIn}>SignIn</button>
          )}
        </div>
      </div>
    </div>
  )
}
