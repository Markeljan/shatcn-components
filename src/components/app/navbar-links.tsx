"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useFartSound } from "@/hooks/use-fart-sound"

export function NavbarLinks() {
    const router = useRouter()
    const playFartSound = useFartSound()

    const handleLinkClick = async (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        await playFartSound()
        router.push(href)
    }

    return (
        <>
            <Link href="/" onClick={(e) => handleLinkClick(e, "/")} className="text-[22px] size-8 rounded-base flex bg-main text-main-foreground border-2 border-black items-center justify-center font-heading">
                N
            </Link>

            <div className="items-center text-base font-base xl:gap-10 lg:flex gap-10 hidden">
                <Link href="/docs" onClick={(e) => handleLinkClick(e, "/docs")}>Docs</Link>
                <Link href="/docs/accordion" onClick={(e) => handleLinkClick(e, "/docs/accordion")}>Components</Link>
                <Link href="/styling" onClick={(e) => handleLinkClick(e, "/styling")}>Styling</Link>
                <Link href="/charts" onClick={(e) => handleLinkClick(e, "/charts")}>Charts</Link>
                <Link href="/stars" onClick={(e) => handleLinkClick(e, "/stars")}>Stars</Link>
                <Link href="/templates" onClick={(e) => handleLinkClick(e, "/templates")}>Templates</Link>
                <Link href="/showcase" onClick={(e) => handleLinkClick(e, "/showcase")}>Showcase</Link>
            </div>
        </>
    )
}

