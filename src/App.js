import './App.css';
import ExpContainer from './ExpContainer/ExpContainer';
import Header from './Header/Header';
import ImgContainer from './ImgContainer/ImgContainer';
import SkillsContainer from './SkillsContainer/SkillsContainer';
import PortContainer from './PortContainer/PortContainer';
import Arrow from './Arrow/Arrow';
import GallContainer from './GallContainer/GallContainer';
import React from 'react';

  const firstParagraphs = [
  `During the fall of 2020, during my first real venture into web development, 
  I made a small Angular website for Region Östergötland. I managed to create a functioning website that was then forked by Region Östergötland, where I was completing my internship.
  The website is aimed for healthcare workers whom need to assess the requirements needed for moving patients within
  the hospitals and healthcare facilites that Region Östergötland operates.`, 
  `During my initial stint as a .NET developer I started developing a website aimed at explaining the Yugoslav wars during my free time. The site was made with ASP.NET Core MVC and took a couple of 
  to develop and host. The database architecture was constructed with SQL Server and the website is hosted through....`, 
  `During my last year as a college student, I developed a multithreaded Chat Application with WPF MVVM together with a coursemate. The application
  is as mentioned multithreaded and can be used by two users that share the same network. We divided the work so that I mainly worked on the frontend while 
  my coursemate worked with the thread architecture.`, 
  `The last project I've been working at is this very site. Written with React, where I learned the framework while developing the site.`];
  const firstHeaders = ['Angular Website', 'ASP.NET Core MVC Website', 'WPF MVVM Chat Application', 'React Website'];
  const firstImgIds = ['angular-img', 'net-image', 'wpf-image', 'react-image'];
  const firstHrefs = ['https://angular.io/', 'https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0', 
  'https://docs.microsoft.com/en-us/archive/msdn-magazine/2009/february/patterns-wpf-apps-with-the-model-view-viewmodel-design-pattern', 
  'https://reactjs.org/'];
  const firstAnchors = ['Angular', 'ASP.NET Core MVC', 'WPF MVVM', 'SQL Server'];

  const secParapraphs = [`During my education I learned quite a bit about datastructures commonly used within the programming world. 
  Starting with learning the Big O notation I then progressed to learning about sorting algorithms such as quicksort, bubblesort and heapsort. 
  I finished off my studies within this field by learning about common data structures used for storage, such as linked lists, binary search trees and AVL trees.`, 
  `I also spent time learning databases, where we specifically studied relational databases with a focus on SQL. We also spent quite a bit of time learning about ER modeling, 
  so called entity-relationship models.`, 
  `I also spent quite a bit of time during my studies on learning the object-oriented programming paradigm. 
  In my coursework we took use of good old Java for achieving this. We learned about classes, objects, instantiation and of course the four fundamental pillars:
  abstraction, encapsulation, inheritance and polymorphism.`,
  `I also spent a surprising amount of time learning about agile work and agile principles, doing this actually in several courses. I learned about, 
  and simulated using, daily scrums, sprints etc. By simulating I mean that we created case scenarios in my class, were we then divided ourselves into small groups
  and tried to solve these case scenarios using agile methods.`];
  const secHeaders =  ['Datastructures', 'ER modeling', 'OOP', 'Agile work'];
  const secImgIds = ['data-struc-img', 'er-img', 'oop-img', 'agile-img'];
  const secHrefs = ['https://www.geeksforgeeks.org/data-structures/', 'https://www.geeksforgeeks.org/introduction-of-er-model/', 
  'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming', 'https://www.agilealliance.org/agile101/'];
  const secAnchors = ['Datastructures', 'ER modeling', 'OOP', 'Agile work'];

function App() {

  return (
    <>
      <Arrow />
      <Header />
      <ImgContainer id="textContainer" explainerText="Welcome to Vedran Isak's portfolio site =)"/>
      <ImgContainer id="imgContainer" explainerText=""/>
      <ExpContainer />
      <SkillsContainer />
      <PortContainer pTexts={firstParagraphs} hTexts={firstHeaders} imgIds={firstImgIds} hrefs={firstHrefs} aTexts={firstAnchors} circleHeader='Want to learn more about these technologies?' />
      <PortContainer pTexts={secParapraphs} hTexts={secHeaders} imgIds={secImgIds} hrefs={secHrefs} aTexts={secAnchors} circleHeader='Want to learn more about these subjects?' />
      <GallContainer />
    </>
  );
}

export default App;