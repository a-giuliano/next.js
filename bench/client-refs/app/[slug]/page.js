import dynamic from 'next/dynamic'

const Counter1 = dynamic(() => import('./counter-1'))
const Counter2 = dynamic(() => import('./counter-2'))

export default async function Page({ params }) {
  const { slug } = await params

  if (slug === 'page-1') {
    return <Counter1 />
  }

  if (slug === 'page-2') {
    return <Counter2 />
  }

  return null
}

export function generateStaticParams() {
  return [{ slug: 'page-1' }, { slug: 'page-2' }]
}
