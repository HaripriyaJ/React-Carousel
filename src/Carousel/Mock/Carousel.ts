import { ISlide } from "../Interfaces/Slide";

export const carouselData:ISlide[] = [
    {
        id:1,
        url: 'https://images4.alphacoders.com/936/thumb-1920-936378.jpg',
        selected: true,
        content: {
            heading: 'Heading for first slide'
        },
        contentSide: 'left'
    },
    {
        id:2,
        url: 'https://www.teahub.io/photos/full/308-3080271_nature-wallpaper-banner.jpg',
        content: {
            heading: 'Heading for second slide',
            body: 'This is the body 2'
        },
        contentSide: 'right'
    },
    {
        id:3,
        url: 'https://getwallpapers.com/wallpaper/full/9/4/b/5659.jpg',
        content: {
            heading: 'Heading for third slide',
            body: 'This is the body 3',
            hasButton: true,
            buttonText: 'More..',
            buttonType: 'primary'
        },
        contentSide: 'right'
    },
    {
        id:4,
        url: 'https://i.pinimg.com/originals/d2/7a/7c/d27a7c048f9e8cf8c77add494dc64fbc.jpg',
        content: {
            heading: 'Heading for fourth slide',
            body: 'This is the body 4',
            hasButton: true,
            buttonText: 'Click here',
            buttonType: 'secondary',
            buttonUrl: 'https://www.w3schools.com/howto/howto_js_redirect_webpage.asp'
        }
    },
    {
        id:5,
        url: 'https://i.pinimg.com/originals/66/b4/9a/66b49afbe24fdd77b48feebff1b130a1.jpg'
    }
]