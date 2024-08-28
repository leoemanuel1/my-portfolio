import React from 'react'
import Gallery from '../Gallery';
import Buttons from '../Buttons';

export default () => {
  return (
    <div className="pageContainer">
      <h1 className="homePageTitle">Welcome to My Portfolio</h1>
      <Gallery/>
      <Buttons/>
      <br/>
      <br/>
      <h1 className="homePageTitle" style={{ marginBottom: '0' }}>Leonardo Alves</h1>
      <h2 className="h2" style={{ marginTop: '0' }}>Data Analyst</h2>
      <br/>
      
      <div className="circleImagesContainer">
        <div className="circleImageItem">
          <img src="/img/sap.png" alt="Description 1" className="circleImage" />
          <p className="imageDescription">SAP Specialist</p>
        </div>
        <div className="circleImageItem">
          <img src="/img/database.jpg" alt="Description 2" className="circleImage" />
          <p className="imageDescription">Database Analyst</p>
        </div>
        <div className="circleImageItem">
          <img src="/img/report.jpg" alt="Description 3" className="circleImage" />
          <p className="imageDescription">Analytical Reporter</p>
        </div>

        </div>
        <br/>
        <p className="textBlock"> As a Data Analyst, I focus on making everyday tasks and reports quicker and more accurate using data skills. Even though I'm currently studying instead of working, I'm passionate about using data to improve processes.</p>
        <br/>
        <p className="textBlock">I hold a bachelor's degree in Telecommunication Systems from Anhanguera College and a master's degree in Corporate Management from AVM Educational, both in Brazil.</p>
        <br/>
        <p className="textBlock">I relocated to the US 7 years ago and have since dedicated myself to improving my English and skills through various certification programs, including Organizational Administration, Business Fundamentals, Digital Multimedia, Marketing, Business Finance, and Web Development.</p>
        <br/>
        <p className="textBlock">I have extensive expertise in handling large-scale data and transforming information into impactful reports and presentations that are visually appealing and easy to understand. I'm proficient in Excel, specializing in VBA and SQL, and have 8 years of experience working with SAP, along with a solid background in data entry and reporting tools.</p>
        <br/>
        <p className="textBlock">My goal is to leverage the skills I've gained during my studies in the US, combined with my previous professional experience, in a new and challenging work environment.</p>
        <br/>
        <br/>
        
    </div>
  )
}
