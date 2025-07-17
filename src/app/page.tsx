import ImageLayout from '../components/imageLayout'

const images = [
  { src: '/images/img1.jpg', alt: 'Image 1' },
  { src: '/images/img2.jpg', alt: 'Image 2' },
  { src: '/images/img3.jpg', alt: 'Image 3' },
  { src: '/images/img4.jpg', alt: 'Image 4' },
  { src: '/images/img5.jpg', alt: 'Image 5' },
  { src: '/images/img6.jpg', alt: 'Image 6' },
  { src: '/images/img7.jpeg', alt: 'Image 7' },
  { src: '/images/img3.jpg', alt: 'Image 8' },
  { src: '/images/img4.jpg', alt: 'Image 9' },
  { src: '/images/img5.jpg', alt: 'Image 10' },
]

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4 ">Image Layout Demo</h1>
      <ImageLayout
        images={images}
        layout="masonry"
        columns={{ sm: 2, md: 3, lg: 4 }}
        gap="4"
      />
    </main>
  )
}
