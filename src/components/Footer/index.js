import React from 'react'
import { 
    FaInstagram, 
    FaLinkedin, 
    FaTwitter, 
    FaFacebook, 
    FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
  } from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>Pizza</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank'
                            aria-label='Facebook' rel='noopener noreferrer'>
                                <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria-label='Instagram' rel='noopener noreferrer'>
                                <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria-label='Youtube' rel='noopener noreferrer'>
                                <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria-label='Twitter' rel='noopener noreferrer'>
                                <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank'
                            aria-label='LinkedIn' rel='noopener noreferrer'>
                                <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer