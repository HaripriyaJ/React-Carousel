export interface ISlide {
    id: number;
    url: string;
    selected?:boolean;
    contentSide?: 'right' | 'left' | 'center';
}
