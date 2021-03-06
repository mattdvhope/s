import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Beginning = ({ data }) => (
  <div className="section" id="About">
    <div className="container">
      <br/>
      <br/>
      <div className="beginning-main row">
        <div className="left col-md-5 col-lg-4 mb-3">
          <Img
            fluid={data.flowingFromTheSource.fluid}
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <div className="left col-md-7 col-lg-8">
          <div className="about-details">
            <h2 className="sub-position">
              {data.invitationToTheJourney}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.beginningTheJourney.childMarkdownRemark.html
              }}
            />
            <p style={{ fontSize: `104%` }}><Link to="steps">Take a step....</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Beginning;
