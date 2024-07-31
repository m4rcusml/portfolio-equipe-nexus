import { Section1 } from './sections/Section1';
import { Section2 } from './sections/Section2';
import { Section3 } from './sections/Section3';

export function LandingPage() {
  return (
    <main style={{ backgroundColor: 'black' }}>
      <Section1 />
      <Section2 />
      <Section3 />
    </main>
  )
}