import React from 'react'

export default function About() {
    return (
        <main>
            <article className="spread">
                <h2>Who Are We?</h2>
                <img src="./images/kate-and-travis.jpg" alt="Kate and Travis on the Ben Franklin Bridge in Philadelphia"/>
                <p>Kate and Travis are two best friends who create films and other media around outdoor adventures to help bring new people into that world and to advocate for where those adventures take place. In fall 2019, they rode the entire East Coast Greenway from Calais, ME to Key West, FL and filmed the trip to make a (still in post-production) documentary about their experiences on that trip.</p>
            </article>
            <article>
                <h3>Kate Norris</h3>
                <img src="./images/kate.jpg" alt="Kate by a campfire"/>
                <p>Kate is a human who has a degree in civil engineering, focusing on transportation. <br/>She has previously served as an Americorps member with Habitat for Humanity in Philadelphia. She has also ridden cross country with Bike &amp; Build in 2016 (Providence to Seattle). </p>
            </article>
            <article>
                <h3>Travis Southard</h3>
                <img src="./images/travis.jpg" alt="Travis leading Cycles Campout"/>
                <p>Travis is a full stack software engineer, freelance video producer, and bike camping organizer.<br/>He has been on and led multiple trips with Bike &amp; Build in 2013, 2015, &amp; and 2016. Travis had served as an Americorps member with City Year Philadelphia from 2010-12.</p>
            </article>
        </main>
    )
}

