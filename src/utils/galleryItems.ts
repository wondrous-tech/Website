import book1 from '../assets/book1.jpeg'
import book2 from '../assets/book2.jpeg'
import book3 from '../assets/book3.jpeg'
import book4 from '../assets/book4.jpeg'
import book5 from '../assets/book5.jpeg'
import book6 from '../assets/book6.jpeg'
import book7 from '../assets/book7.jpeg'

export interface GalleryItem {
  category: string
  title: string
  image: string
  offset?: boolean
  author: string
  synopsis: string
  pages: number
  format: 'Paperback' | 'Hardcover' | 'Leather Deluxe'
}

export const galleryItems: GalleryItem[] = [
  {
    category: 'WISDOM',
    title: 'Ray of Hope',
    image: book1,
    author: 'Linius Joe Mumbi',
    synopsis: 'Why am I discouraged? Why is my heart so sad? Why is this happening to me? Why was I born? What wrong did I do? What have I not done? When doubts fill your mind, fear and discouragement, whose comfort gives you hope and cheer? What or who rejuvenates you? The word of God says, \u201cThe hopes of the godly result in happiness, but the expectations of the wicked come to nothing.\u201d',
    pages: 168,
    format: 'Paperback'
  },
  {
    category: 'ECONOMY',
    title: "Couple's Will",
    image: book2,
    offset: true,
    author: 'Wilson Kinyanjui Njogu',
    synopsis: "This book offers an important perspective on the various dimensions of marriage and family life, and how open communication can help enhance relationships. The topics covered include courtship, submission, love and respect, intimacy, finances, and children, among others. By reading and learning from this book, you can take steps to improve your own marriage.",
    pages: 176,
    format: 'Paperback'
  },
  {
    category: 'LEADERSHIP',
    title: 'Hatima Bila Kikomo',
    image: book3,
    author: 'Mchungaji Victor Gabriel',
    synopsis: "In Hatima Bila Kikomo \u2014 Swahili for 'A Destiny Without End' \u2014 Mchungaji Victor Gabriel explores the conviction that no circumstance, delay, or disappointment can cap what has been divinely purposed for a life surrendered to faith. Drawing on pastoral experience and everyday testimony, the book walks readers through seasons of doubt, waiting, and breakthrough, reframing destiny not as a fixed event but as an unfolding journey guided by obedience and hope.",
    pages: 204,
    format: 'Paperback'
  },
  {
    category: 'CULTURE',
    title: 'Godliness and Your Destiny',
    image: book4,
    offset: true,
    author: 'Victor Gabriel',
    synopsis: 'Godliness and Your Destiny examines the inseparable link between a life of consistent godly character and the fulfillment of one\u2019s God-given purpose. Rather than treating destiny as a matter of chance or ambition alone, the book argues that integrity, obedience, and daily devotion are the very foundations upon which lasting destiny is built \u2014 guiding readers to see that who we become in private ultimately determines what we are entrusted with in public.',
    pages: 192,
    format: 'Paperback'
  },
  {
    category: 'HISTORY',
    title: 'Great Tides',
    image: book5,
    author: 'Professor Tariq Al-Mansoor',
    synopsis: 'A landmark historical retrospective tracing the centuries-old maritime trade networks of the Swahili Coast and the Indian Ocean. Al-Mansoor utilizes newly discovered manuscripts to reconstruct the dynamic coastal legacy.',
    pages: 412,
    format: 'Leather Deluxe'
  },
  {
    category: 'IDENTITY',
    title: 'Woven Threads',
    image: book6,
    offset: true,
    author: 'Zola Dube',
    synopsis: 'A deeply personal memoir charting the author’s journey of reconciling ancestral roots with modern cosmopolitan identity. Dube weaves standard reflections on language, music, and the visual arts into a cohesive narrative.',
    pages: 220,
    format: 'Paperback'
  },
  {
    category: 'POETRY',
    title: 'Ember & Ash',
    image: book7,
    author: 'Nuru S. Abubakar',
    synopsis: 'An evocative anthology of free-verse poetry capturing the raw emotional landscapes of growth, resilience, and love in the contemporary Sahel. Abubakar’s words are paired with striking minimalist illustrations.',
    pages: 140,
    format: 'Paperback'
  },
]
