import './GuessWho.css'
import Image from './Components/image/Image'
import Image1 from './Assets/image1.jpg'
import Image2 from './Assets/image2.png'
import Image3 from './Assets/image3.jpg'

const images: string[] = ["1", "2", "3"]

export const GuessWho = () => {
    return (
        <>
            <div className='header-container'>
                <h1 className='header'>Guess Who</h1>
            </div>

            <div className="images-container">
                {images.map(
                    (index, i) => {
                        const image_list = [
                            <img src={Image1} alt="Bilde 1" className='face-image' />,
                            <img src={Image2} alt="Bilde 2" className='face-image' />,
                            <img src={Image3} alt="Bilde 3" className='face-image' />
                        ];
                        return (
                            <Image index={index} image={image_list[i]} />
                        )
                    }
                )}
            </div>
        </>
    )
}