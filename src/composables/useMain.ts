

export const useMain = () => {

    const rotateImages = () => {
        const images = document.querySelectorAll<HTMLImageElement>('.rotate-image')

        images.forEach((image) => {
            const angle = Math.floor(Math.random() * 61) - 30 // de -30° a +30°
            image.style.setProperty('--initial-rotation', `${angle}deg`)
        })
    }

    return {
        rotateImages
    }
}