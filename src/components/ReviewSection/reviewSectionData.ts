import ipsosLogo from '/src/assets/svg/ipsos.svg'
import ipsosPhoto from '/src/assets/images/ipsos-photo.jpg'
import gfk from '/src/assets/svg/gfk.svg'
import gfkPhoto from '/src/assets/images/gfk-photo.jpg'
import visa from '/src/assets/svg/visa.svg'
import visaPhoto from '/src/assets/images/visa-photo.jpg'
import ucsf from '/src/assets/svg/ucsf.svg'
import ucsfPhoto from '/src/assets/images/ucsf-photo.jpg'

export const reviewSectionData: {
  bg: string
  logo: string
  text: string
  photo: string
  author: string
  career: string
}[] = [
  {
    bg: '#151727',
    logo: ipsosLogo,
    text: `“During our partnership, we regularly received nearly perfect scores from clients. They felt like partners rather than just suppliers.”`,
    photo: ipsosPhoto,
    author: `Ria Jesrani`,
    career: `Director @ Ipsos`,
  },
  {
    bg: '#194a7a',
    logo: gfk,
    text: `"Caboodle are an exceptional digital team. Fast, easy to work with and dependable."`,
    photo: gfkPhoto,
    author: `Rob Stevens`,
    career: `Group Head of UX @ GfK`,
  },
  {
    bg: 'linear-gradient(#4d6c94, #90443e)',
    logo: visa,
    text: `“Not to be crass, but...I’M BLOWN THE F*CK AWAY. Really good work.”`,
    photo: visaPhoto,
    author: `Kerry Hebert`,
    career: `Design & UX Director @ Visa`,
  },
  {
    bg: '#4187b4',
    logo: ucsf,
    text: `"...incredible listeners and took our half-baked thoughts and turned them into beautiful designs. Very efficient in accomplishing our design goals and made small changes that had profound impact on the overall design."`,
    photo: ucsfPhoto,
    author: `Joaquin Anguera`,
    career: `Associate Professor @ Neuroscape, UCSF`,
  },
]
