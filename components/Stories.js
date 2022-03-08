import faker from '@faker-js/faker'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Story from './Story'

export default function Stories() {
    const { data: session } = useSession()
    const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-gray-300">
      {session && (
        <Story
          img={session.user.image}
          username={session.user.name}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}
