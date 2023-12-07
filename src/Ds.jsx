import React from 'react'
import Card from './Card';

export default function Ds() {
    const cards3 = [
        {
          title: "7 Best High-Paying IT Jobs For Arts Students",
          desc: "Gone are the days when we used to believe, you need a B.Tech degree to",
          jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-High-Paying-IT-Jobs-For-Arts-Students.webp",
        },
        {
          title: "The Top 5 Most Popular Programming Languages In The World Today",
          desc: "In today’s world, programming languages have become an integral part of our daily life.",
          jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/tips-to-make-your-cloud-engineer-resume-professional.webp",
        },
        {
          title: "How To Become A Successful Software Developer?",
          desc: "If you want to be successful as a software developer, then it is important.",
          jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-Books-to-Learn-Civil-Engineering.webp",
        },
    ];
  return (
    <>
    <h1>Data Science</h1>
    {
        cards3.map((card,index)=>{
            return <Card key={index} card={card}/>
        })
    }
    </>
)}
