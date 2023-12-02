import { useContext, createContext, useEffect, useState } from "react";
import { bookmarkGallery, fyloGallery, insureGallery,manageGallery, tabletBookmarkGallery, tabletFyloGallery, tabletInsureGallery, tabletManageGallery, mobileBookmarkGallery, mobileFyloGallery, mobileInsureGallery, mobileManageGallery } from '../const';
import {useParams,useNavigate} from "react-router-dom"

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  var portfolioData = [
    {
      id: 1,
      title: "Manage",
      summary:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
      background:"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
        cover: {
        desktop:manageGallery,
        tablet:tabletManageGallery,
        mobile:mobileManageGallery
      },
      link:"https://jgreen721.github.io/react_manage_landing/",
      projInfo:{
        hero:{
          desktop:"./images/detail/desktop/image-manage-hero.jpg",
          tablet:"./images/detail/tablet/image-manage-hero.jpg",
          mobile:"./images/detail/mobile/image-manage-hero.jpg",
        },
        preview_one:{
          desktop:"./images/detail/desktop/image-manage-preview-1.jpg",
          tablet:"./images/detail/tablet/image-manage-preview-1.jpg",
          mobile:"./images/detail/mobile/image-manage-preview-1.jpg",
        },
        preview_two:{
          desktop:"./images/detail/desktop/image-manage-preview-2.jpg",
          tablet:"./images/detail/tablet/image-manage-preview-2.jpg",
          mobile:"./images/detail/mobile/image-manage-preview-2.jpg",
        }
      },
      position: "flex-start",
      tools: ["HTML", "CSS", "JS"],
    },
    {
      id: 2,
      title: "Bookmark",
      summary:
        "This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
      background:"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." , 
      cover: {
      desktop:bookmarkGallery,
      tablet:tabletBookmarkGallery,
      mobile:mobileBookmarkGallery
      },
      link:"https://jgreen721.github.io/react_bookmark_app/",
      projInfo:{
        hero:{
          desktop:"./images/detail/desktop/image-bookmark-hero.jpg",
          tablet:"./images/detail/tablet/image-bookmark-hero.jpg",
          mobile:"./images/detail/mobile/image-bookmark-hero.jpg",
        },
        preview_one:{
          desktop:"./images/detail/desktop/image-bookmark-preview-1.jpg",
          tablet:"./images/detail/tablet/image-bookmark-preview-1.jpg",
          mobile:"./images/detail/mobile/image-bookmark-preview-1.jpg",
        },
        preview_two:{
          desktop:"./images/detail/desktop/image-bookmark-preview-2.jpg",
          tablet:"./images/detail/tablet/image-bookmark-preview-2.jpg",
          mobile:"./images/detail/mobile/image-bookmark-preview-2.jpg",
        }
      },
      position: "flex-end",
      tools: ["HTML", "CSS", "JS"],
    },
    {
      id: 3,
      title: "Insure",
      summary:
        "This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
      background:"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style." , 
      cover: {
      desktop:insureGallery,
      tablet:tabletInsureGallery,
      mobile:mobileInsureGallery
      },
      link:"https://jgreen721.github.io/frontend_challenges/insure_landing/index.html",
      projInfo:{
        hero:{
          desktop:"./images/detail/desktop/image-insure-hero.jpg",
          tablet:"./images/detail/tablet/image-insure-hero.jpg",
          mobile:"./images/detail/mobile/image-insure-hero.jpg",
        },
        preview_one:{
          desktop:"./images/detail/desktop/image-insure-preview-1.jpg",
          tablet:"./images/detail/tablet/image-insure-preview-1.jpg",
          mobile:"./images/detail/mobile/image-insure-preview-1.jpg",
        },
        preview_two:{
          desktop:"./images/detail/desktop/image-insure-preview-2.jpg",
          tablet:"./images/detail/tablet/image-insure-preview-2.jpg",
          mobile:"./images/detail/mobile/image-insure-preview-2.jpg",
        }
      },
      position: "flex-start",
      tools: ["HTML", "CSS", "JS"],
    },
    {
      id: 4,
      title: "Fylo",
      summary:
        "This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
      background:"This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.",
      cover: {
        desktop:fyloGallery,
        tablet:tabletFyloGallery,
        mobile:mobileFyloGallery
      },
      link:"https://jgreen721dev.com",
      projInfo:{
        hero:{
          desktop:"./images/detail/desktop/image-fylo-hero.jpg",
          tablet:"./images/detail/tablet/image-fylo-hero.jpg",
          mobile:"./images/detail/mobile/image-fylo-hero.jpg",
        },
        preview_one:{
          desktop:"./images/detail/desktop/image-fylo-preview-1.jpg",
          tablet:"./images/detail/tablet/image-fylo-preview-1.jpg",
          mobile:"./images/detail/mobile/image-fylo-preview-1.jpg",
        },
        preview_two:{
          desktop:"./images/detail/desktop/image-fylo-preview-2.jpg",
          tablet:"./images/detail/tablet/image-fylo-preview-2.jpg",
          mobile:"./images/detail/mobile/image-fylo-preview-2.jpg",
        }
      },
      position: "flex-end",
      tools: ["HTML", "CSS"],
    },
  ];
  const navigate = useNavigate()
  const [projectInfo, setProjectInfo] = useState({});

  // console.log("ProjectId",project)

 

  const viewProject = (id)=>{
    console.log("projectId",id);
    let projInfo = portfolioData[id-1]
    let prevTitle = id == 1 ? portfolioData[portfolioData.length-1] : portfolioData[id-2];
    let nextTitle = id == portfolioData.length ? portfolioData[0] : portfolioData[id];
    let formattedObj = {
      current:projInfo,
      prev:prevTitle,
      next:nextTitle,
    }
    console.log(formattedObj)
    setProjectInfo(formattedObj);
    navigate('projectinfo')
  }



  const values = {
    portfolioData,
    viewProject,
    projectInfo
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
