'use client';
import { jsx as _jsx } from "react/jsx-runtime";
const columnClasses = {
    1: 'grid-cols-1 columns-1',
    2: 'grid-cols-2 columns-2',
    3: 'grid-cols-3 columns-3',
    4: 'grid-cols-4 columns-4',
    5: 'grid-cols-5 columns-5',
    6: 'grid-cols-6 columns-6',
};
const gapMap = {
    '0': 'gap-0',
    '1': 'gap-1',
    '2': 'gap-2',
    '3': 'gap-3',
    '4': 'gap-4',
    '5': 'gap-5',
    '6': 'gap-6',
    '8': 'gap-8',
    '10': 'gap-10',
    '12': 'gap-12',
};
const ImageLayout = ({ images, layout = 'grid', columns = { sm: 2, md: 3, lg: 4 }, gap = '4', }) => {
    const getWrapperClass = () => {
        const smCols = columnClasses[columns.sm || 1];
        const mdCols = columnClasses[columns.md || columns.sm || 1].replace(/grid-cols-/g, 'md:grid-cols-').replace(/columns-/g, 'md:columns-');
        const lgCols = columnClasses[columns.lg || columns.md || columns.sm || 1].replace(/grid-cols-/g, 'lg:grid-cols-').replace(/columns-/g, 'lg:columns-');
        const gapClass = gapMap[gap] || 'gap-4';
        if (layout === 'flex')
            return `flex flex-wrap ${gapClass}`;
        if (layout === 'masonry')
            return `${smCols} ${mdCols} ${lgCols} ${gapClass}`;
        return `grid ${smCols} ${mdCols} ${lgCols} ${gapClass}`;
    };
    return (_jsx("div", { className: getWrapperClass(), children: images.map((img, index) => (_jsx("div", { className: layout === 'masonry' ? 'break-inside-avoid mb-4' : '', children: _jsx("img", { src: img.src, alt: img.alt || `Image ${index + 1}`, className: "w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105", loading: "lazy" }) }, index))) }));
};
export default ImageLayout;
