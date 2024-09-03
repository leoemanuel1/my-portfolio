import React from "react";

export default function () {
    return (
    <>
        <div className="pageContainerAbout">

            <h1 id="homePageTitle">About</h1>

            <div className="contentContainerAbout">
                <div className="imageSectionAbout">
                    <img src="/img/reportabout.jpg" alt="About Image" className="aboutImage" />
                </div>

                <div className="articleSectionAbout">
                    <article>
                        <h2>Who I Am</h2>
                        <p>
                        {/* Your article text goes here */}
                        I am a professional with expertise in web development, Excel reports, and data visualization. I have extensive experience in creating user-friendly interfaces and making data easily understandable through visually appealing presentations.
                        </p>
                    </article>
                </div>
            </div>

            <div className="bottomTextAbout">
                {/* Additional block of text */}
                <p>Contact me for more information and collaboration opportunities!</p>
            </div>

        </div>
    </>
    )
}