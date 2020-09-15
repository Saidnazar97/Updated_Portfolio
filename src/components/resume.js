import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';

import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src = "https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Saidnazar Rakhimboev</h2>
            <h4 style={{color: 'grey'}}>Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            < p > The Full Stack Web Developer, San Francisco—
            Self - Employed
            05 / 2018 - PRESENT● Maintained strong education in latest technologies, software and
            hardware products
            for use in various projects.●Reviewed project specifications and devised solutions
            for use
            across multiple websites.●Established hosting
            for each website and completed the go - live
            process by uploading sites to the host account.●Participated in pre - project analysis and technical assessments to
            develop user - friendly interface and correct functionality to meet
            business objectives.●Determined project technical needs and coordinated
            specifications and requirements. < /p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>356 12th Ave San Fransico, California 94118</p>
            <h5>Phone</h5>
            <p>(628) 205-0446</p>
            <h5>Email</h5>
            <p>dadajohn137@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName = "Westminster International University in Tashkent,
              Uzbekistan— Bachelor of science "
              schoolDescription = "Field of study: Economics with Finance"
               />

               <Education
                 startYear={2020}
                 endYear={2020}
                 schoolName = "UC Berkeley Extension, San Francisco — The Certificate of
                 Arts "
                 schoolDescription = "Field of study: The Full Stack Web developer."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2018}
              jobName="First Job"
              jobDescription=""
              />

              <Experience
                startYear={2020}
                endYear={2020}
                jobName="Second Job"
                jobDescription=""
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={25}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
