export interface IContent {
    heading: string;
    body?: string;
    hasButton?: boolean;
    buttonText?: string;
    buttonType?: 'primary' | 'secondary';
    buttonUrl?: string;
}

export interface ISlide {
    id: number;
    url: string;
    selected?: boolean;
    content?: IContent;
    contentSide?: 'right' | 'left';
}
