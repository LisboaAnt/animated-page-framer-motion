'use client';

//Icons das redes Sociais

import Link from 'next/link';
import { RiPaypalFill, RiSnapchatFill, RiSafariFill, RiFacebookFill, RiInstagramFill } from 'react-icons/ri';

const icons = [
    { path: '/', name: <RiPaypalFill/> },
    { path: '/', name: <RiSnapchatFill /> },
    { path: '/', name: <RiSafariFill/> },
    { path: '/', name: <RiFacebookFill /> },
    { path: '/', name: <RiInstagramFill /> }
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => (
            <Link href={icon.path} key={index}>
                <div className={`${iconStyles}`}>
                    {icon.name}
                </div>
            </Link>
        ))}
    </div>
  );
};

export default Socials;
