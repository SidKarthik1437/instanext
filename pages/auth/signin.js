import { getProviders, signIn } from 'next-auth/react'
import Header from '../../components/Header'

export default function signin({ providers }) {
  return (
    <>
      <Header />
          <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
              <img className="w-80" src="https://links.papareact.com/ocw" alt="" />
        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className="rounded-lg bg-blue-500 p-3 text-white"
                  onClick={() => signIn(provider.id, {callbackUrl: '/'})}
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
