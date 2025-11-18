import { useCallback } from "react"

const FART_SOUNDS = [
    "/farts/fart-0.mp3",
    "/farts/fart-1.mp3",
    "/farts/fart-2.mp3",
    "/farts/fart-3.mp3",
    "/farts/fart-4.mp3",
    "/farts/fart-5.mp3",
    "/farts/fart-6.mp3",
    "/farts/fart-7.mp3",
    "/farts/fart-8.mp3",
    "/farts/fart-9.mp3",
    "/farts/fart-10.mp3",
]

export function useFartSound() {
    const playFartSound = useCallback(async (): Promise<void> => {
        const randomIndex = Math.floor(Math.random() * FART_SOUNDS.length)
        const audio = new Audio(FART_SOUNDS[randomIndex])
        audio.volume = 0.5

        return new Promise((resolve) => {
            audio.addEventListener("ended", () => {
                resolve()
            }, { once: true })

            audio.addEventListener("error", () => {
                // If there's an error, resolve immediately so the action can proceed
                resolve()
            }, { once: true })

            audio.play().catch(() => {
                // If play fails, resolve immediately so the action can proceed
                resolve()
            })
        })
    }, [])

    return playFartSound
}

