const image1 = '/jumbotron/Jumbo-1.png'
const image2 = '/jumbotron/Jumbo-2.png'
const image3 = '/jumbotron/Jumbo-3.png'

export const images: string[] = [image1, image2, image3]

const imageByIndex = (index: number): string => images[index % images.length]

export default imageByIndex
