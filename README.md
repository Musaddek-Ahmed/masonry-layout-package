# 🧱 @musaddek/masonry-layout

A responsive and easy-to-use React image layout component that supports **grid**, **flex**, and **masonry-style** layouts with minimal configuration.

## 📦 Installation

```bash
npm install @musaddek/masonry-layout
# or
yarn add @musaddek/masonry-layout



🚀 Usage

import ImageLayout from '@musaddek/masonry-layout';

const images = [
  { src: '/images/img1.jpg', alt: 'Image 1' },
  { src: '/images/img2.jpg', alt: 'Image 2' },
  { src: '/images/img3.jpg', alt: 'Image 3' },
  // Add more images as needed
];

export default function App() {
  return (
    <div className="p-4">
      <ImageLayout
        images={images}
        layoutType="masonry" // Options: 'grid', 'flex', 'masonry'
        columns={3}
        gap="1rem"
      />
    </div>
  );
}



🧱 Supported Layouts
✅ Grid Layout

✅ Flex Layout

✅ Masonry Layout (auto-flowing columns)



📷 Example Image Object

{
  src: 'https://example.com/image.jpg',
  alt: 'Description'
}


💡 Notes

Responsive behavior depends on your outer container and TailwindCSS/grid CSS responsiveness.

Ideal for galleries, portfolio sections, and image-heavy dashboards.

🤝 Contribution

Feel free to open issues or submit pull requests.

📄 License
MIT © Musaddek Ahmed


