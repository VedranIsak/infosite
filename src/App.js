import './App.css';
import ExpContainer from './ExpContainer/ExpContainer';
import Header from './Header/Header';
import ImgContainer from './ImgContainer/ImgContainer';
import SkillsContainer from './SkillsContainer/SkillsContainer';
import PortContainer from './PortContainer/PortContainer';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import GallContainer from './GallContainer/GallContainer';
import React from 'react';

  const firstParagraphs = [
  `During the fall of 2020 I made a small Angular website for Region Östergötland. I created a functioning website that
  was targeted to healthcare workers who needed to assess the requirements needed for moving patients within
  healthcare facilites.`, 
  `During my initial stint as a .NET developer I started developing a website aimed at explaining the Yugoslav wars during my leisure time. 
  The site was made with ASP.NET Core MVC, jQuery and SQL Server and took a couple of weeks to fully develop.`, 
  `During my last year as a college student, I developed a multithreaded Chat Application with WPF MVVM. The application
  is as mentioned multithreaded and fully functioning, with storage of old chats being stored in local JSON-files.`, 
  `The last project I've been working on (as of this writing) is this very site. 
  The site is written with React and I've been learning the framework while developing the site.`];
  const firstHeaders = ['Angular Website', 'ASP.NET Core MVC Website', 'WPF MVVM Chat Application', 'React Website'];
  const firstImgIds = ['angular-img', 'net-image', 'wpf-image', 'react-image'];
  const firstHrefs = ['https://angular.io/', 'https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0', 
  'https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern', 
  'https://reactjs.org/'];
  const firstAnchors = ['Angular', 'ASP.NET Core MVC', 'WPF MVVM', 'SQL Server'];

  const secParapraphs = [`During my education I learned quite a bit about commonly used datastructures. 
  Starting with learning the Big O notation I then progressed into learning about sorting algorithms. 
  I finished off my studies within this field by learning about some more complex data structures like binary search trees and AVL trees.`, 
  `I also spent time learning about databases, where we specifically studied relational databases with a focus on SQL Server.
   We also spent quite a bit of time learning about ER modeling (entity-relationship models).`, 
  `During my education I also spent quite a bit of time learning the object-oriented programming paradigm. 
  In my coursework we took use of good old Java for achieving this.`,
  `I also spent a surprising amount of time learning about agile work and agile principles, doing this actually in several courses. I learned about, 
  and simulated using, daily scrums, sprints etc.`];
  const secHeaders =  ['Datastructures', 'ER modeling', 'OOP', 'Agile work'];
  const secImgIds = ['data-struc-img', 'er-img', 'oop-img', 'agile-img'];
  const secHrefs = ['https://www.geeksforgeeks.org/data-structures/', 'https://www.geeksforgeeks.org/introduction-of-er-model/', 
  'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming', 'https://www.agilealliance.org/agile101/'];
  const secAnchors = ['Datastructures', 'ER modeling', 'OOP', 'Agile work'];

function App() {

  return (
    <>
      <SideBarContainer />
      <Header />
      <ImgContainer id="textContainer" explainerText="Welcome to my portfolio site!" subIdOne="subDivOne" subIdThree="subDivThree"/>
      <ImgContainer id="imgContainer" explainerText="" subIdOne="isNotVisible" subIdThree="isNotVisible" />
      <ExpContainer />
      <SkillsContainer />
      <PortContainer id="port-container-1" pTexts={firstParagraphs} hTexts={firstHeaders} imgIds={firstImgIds} hrefs={firstHrefs} aTexts={firstAnchors} circleHeader='Want to learn more about these technologies?' />
      <PortContainer id="port-container-2" pTexts={secParapraphs} hTexts={secHeaders} imgIds={secImgIds} hrefs={secHrefs} aTexts={secAnchors} circleHeader='Want to learn more about these subjects?' />
      <GallContainer />
    </>
  );
}

export default App;