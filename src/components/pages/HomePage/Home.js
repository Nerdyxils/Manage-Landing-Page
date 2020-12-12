import React from 'react'
import CommentCard from '../CommentCard'
import FirstFooter from '../FirstFooter'
import GridText from '../GridText'
import HeroSection from '../HeroSection'
import { homeObjOne, gridText, cardData, firstFooterText, FooterItems } from './Data'

function Home() {
    return (
        <>
            <HeroSection {...homeObjOne} />
            <GridText {...gridText} />
            <CommentCard {...cardData} />
            <FirstFooter {...firstFooterText} />
        </>
    );
}

export default Home