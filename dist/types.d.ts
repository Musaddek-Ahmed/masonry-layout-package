export type LayoutType = 'grid' | 'flex' | 'masonry';
export interface ImageItem {
    src: string;
    alt?: string;
}
export interface ColumnConfig {
    sm?: number;
    md?: number;
    lg?: number;
}
