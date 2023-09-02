const logo1 = '/client_logo/farmers_market.jpg'
const logo2 = '/client_logo/foodhall.png'
const logo3 = '/client_logo/indofood.png'
const logo4 = '/client_logo/indolakto.png'
const logo5 = '/client_logo/multi_marmer.png'
const logo6 = '/client_logo/sinarmas_textile.png'
const logo7 = '/client_logo/sogo.png'

export const images: string[] = [logo1, logo2, logo3, logo4, logo5, logo6, logo7]

const logoByIndex = (index: number): string => images[index % images.length]

export default logoByIndex
