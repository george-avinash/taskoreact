import React from 'react'
import Card from './Card'

export default function Career() {
    const cards5=[
        {
            title: "Why You Need To Learn Python As An Artist?",
            desc: "Python has been gaining popularity among artists and designers due to its versatility.",
            jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
          },
          {
            title: "What Is The Future Of Coding?",
            desc: "Coding will continue to be essential for all industries as technology advances.",
            jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
          },
          {
            title: "Top 6 Skills Every Good Web Designer Must Have",
            desc: "Web design is one of the most in demand professions right now.",
            jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-Based-Companies-for-Web-Developers-2.webp",
          },
    ]
  return (
    <>
    <h1> Career </h1>
    {
        cards5.map((card, index)=>{
            return <Card key={index} card={card}/>
        })
    }
    </>
  )
}
