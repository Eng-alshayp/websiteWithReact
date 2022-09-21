import React from 'react'

const CardProjects = () => {
  return (
    <div class="content">
            
            <div class="projects-card">
                <div class="projects-image">
                    <img src="images/1.png" alt="image1" />
                </div>
                <div class="projects-info">
                    <p class="projects-category">
                        Shop Store
                    </p>
                    <strong class="projects-title">
                        <a target="_blank" href="#" class="more-details">More Details</a>
                    </strong>
                </div>
            </div>
            
            <div class="projects-card">
                <div class="projects-image">
                    <img src="images/2.jpg" alt="image2" />
                </div>
                <div class="projects-info">
                    <p class="projects-category">
                        programming ADS 
                    </p>
                    <strong class="projects-title">
                        <a target="_blank" href="#" class="more-details">More Details</a>
                    </strong>
                </div>
            </div>
                        
            <div class="projects-card">
                <div class="projects-image">
                    <img src="images/3.jpg" alt="image3" />
                </div>
                <div class="projects-info">
                    <p class="projects-category">
                        My Website
                    </p>
                    <strong class="projects-title">
                        <a target="_blank" href="https://github.com/Eng-alshayp/website.git" class="more-details">More Details</a>
                    </strong>
                </div>
            </div>
        </div>
  )
}

export default CardProjects