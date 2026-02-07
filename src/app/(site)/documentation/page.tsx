import { Documentation } from '@/components/Documentation/Documentation'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Featurs | Crypgo',
}

export default function Page() {
  return (
    <main className='pt-24'>
      <Documentation />
    </main>
  )
}
