import sub1 from '/src/assets/images/sub1.png'
import sub2 from '/src/assets/images/sub2.png'
import sub3 from '/src/assets/images/sub3.png'

export const subscriptionsData: {
  img: string
  name: string
  description: string
  items: string[]
  price: number
}[] = [
  {
    img: sub1,
    name: `Signal`,
    description: `We'll analyse your Hotjar data and deliver on-going UX insights.`,
    items: [
      `Peace of mind`,
      `Pro-active UX suggestions`,
      `Monthly customer behaviour report`,
      `Free Hotjar setup`,
    ],
    price: 300,
  },
  {
    img: sub2,
    name: `Pathfinder`,
    description: `Unlimited UX design, prototyping & support. Whenever you need us.`,
    items: [
      `Central dashboard`,
      `Unlimited design requests`,
      `Unlimited eye-tracking tests`,
      `2-3 day turnaround`,
    ],
    price: 1250,
  },
  {
    img: sub3,
    name: `Pathfinder plus`,
    description: `The full works — design prototyping & support. Faster turnaround.`,
    items: [
      `Everything in Pathfinder`,
      `On-going UX audits`,
      `Weekly catch-ups`,
      `2 simultaneous requests`,
    ],
    price: 300,
  },
]
