import React, { FC } from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
    links: { href: string; text: string }[];
}

const Breadcrumb: FC<BreadcrumbProps> = ({ links }) => {
    const lastIndex = links.length - 1;
    return (
        <div className="flex items-baseline flex-wrap justify-center my-[0.9375rem] mx-0">
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    {index !== lastIndex ? (
                        <Link href={link.href} className="no-underline flex items-center text-foreground dark:text-white dark:text-opacity-70 font-normal md:text-xl text-lg hover:underline after:relative after:content-[''] after:ml-2.5 after:mr-[0.8125rem] after:my-0 after:inline-block after:top-[0.0625rem] after:w-2 after:h-2 after:border-r-2 after:border-solid after:border-b-2 after:border-foreground dark:after:border-white after:-rotate-45">
                            {link.text}
                        </Link>
                    ) : (
                        <span className="dark:text-white text-foreground md:text-xl text-lg mx-2.5">{link.text}</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;