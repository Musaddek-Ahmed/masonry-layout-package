import React from 'react';
import type { LayoutType, ImageItem, ColumnConfig } from './types';
interface Props {
    images: ImageItem[];
    layout?: LayoutType;
    columns?: ColumnConfig;
    gap?: string;
}
declare const ImageLayout: React.FC<Props>;
export default ImageLayout;
