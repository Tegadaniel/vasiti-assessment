import React from 'react';
import {HeaderSection, Hero, Nav, SecondNav} from '../styles/header';

export default function Header() {
        return(
         <HeaderSection>
        <Nav>
        <a href='/'>
          <img src='./assets/vasiti-logo.svg' alt='Vasiti Logo' />
        </a>
        <ul>
          <li>
            <a href='/'>ABOUT US</a>
          </li>
          <li>
            <a href='/'>STORIES</a>
          </li>
          <li>
            <a href='/'>CONTACT</a>
          </li>
          <li>
            <a href='/'>LOG IN</a>
          </li>
          <a className='signup-btn' href='/'>
            SIGN UP
          </a>
        </ul>
        </Nav>
         <SecondNav>
        <ul>
          <li>
            <a href='/'>MARKETPLACE</a>
          </li>
          <li>
            <a href='/'>WHOLESALE CENTER</a>
          </li>
          <li>
            <a href='/'>SELLER CENTER</a>
          </li>
          <li>
            <a href='/'>SERVICES</a>
          </li>
          <li>
            <a href='/'>INTERNSHIPS</a>
          </li>
        </ul>
      </SecondNav>
            <Hero>
        <div>
          <h1>Amazing Experiences from Our Wonderful Customers</h1>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>
        <picture>
          <source
            media='(min-width: 477.49px)'
            srcSet='./assets/heroImg-des.png'
          />
          <img
            className='heroImg'
            src='./assets/Hero1.png'
            alt='smiling people'
          />
        </picture>
      </Hero>
        </HeaderSection>
        )
    
}
