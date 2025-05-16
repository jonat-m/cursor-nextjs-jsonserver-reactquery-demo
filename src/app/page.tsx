import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Demo: Next.js com REST e GraphQL</h1>

      <p className="text-gray-600 mb-8">
        Demonstração de implementação de ima integração entre React Query e json-server por chamadas
        REST API e GraphQL.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/posts-rest"
          className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Posts REST</h2>
          <p className="text-gray-600">Implementação usando REST API tradicional</p>
        </Link>

        <Link
          href="/posts-graphql"
          className="p-6 border border-gray-200 rounded-lg hover:border-blue-500 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-2">Posts GraphQL</h2>
          <p className="text-gray-600">Implementação usando GraphQL API</p>
        </Link>
      </div>
    </main>
  )
}
