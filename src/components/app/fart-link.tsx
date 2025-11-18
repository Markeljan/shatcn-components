"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { useFartSound } from "@/hooks/use-fart-sound";

export function FartLink({ onClick, ...props }: ComponentProps<typeof Link>) {
    const playFartSound = useFartSound();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        playFartSound();
        onClick?.(e);
    };

    return <Link {...props} onClick={handleClick} />;
}
