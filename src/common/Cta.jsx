import React from 'react'
import { ForwardIcon } from '../../public/icons/icons'
import { Link as InternalLink } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

const Cta = ({ text, href = "/contact" }) => {
    const t = useTranslations("common");
    const buttonText = text || t("buttons.book_consultation");

    const isExternal =
        typeof href === "string" &&
        (
            href.startsWith("http://") ||
            href.startsWith("https://") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        );

    const className =
        "group relative inline-flex items-center gap-4 bg-[#ECD29A] rounded-full py-2 pl-2 pr-5 cursor-pointer whitespace-nowrap capitalize overflow-hidden";

    const content = (
        <>
            <span className="absolute left-2 top-1/2 h-9 w-9 -translate-y-1/2 rounded-full bg-black transition-all duration-500 ease-in-out group-hover:w-[calc(100%-16px)]" />

            <span className="relative z-10 flex items-center justify-center w-9 h-9 text-white transition-all duration-500 ease-in-out group-hover:translate-x-[calc(100%-36px)]">
                <ForwardIcon />
            </span>

            <span className="relative z-10 font-[350] text-black text-base transition-colors duration-300 group-hover:text-white">
                {buttonText}
            </span>
        </>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={buttonText}
                className={className}
            >
                {content}
            </a>
        );
    }

    return (
        <InternalLink
            href={href}
            aria-label={buttonText}
            className={className}
        >
            {content}
        </InternalLink>
    );
};

export default Cta