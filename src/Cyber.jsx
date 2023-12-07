import React from 'react'
import Card from './Card';

export default function Cyber() {

    const cards4 = [
        {
            title: "How To Become A Successful Software Developer?",
            desc: "If you want to be successful as a software developer, then it is important.",
            jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Best-Books-to-Learn-Civil-Engineering.webp",
        },
        {
            title: "Top 6 Skills Every Good Web Designer Must Have",
            desc: "Web design is one of the most in demand professions right now.",
            jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Product-Based-Companies-for-Web-Developers-2.webp",
        },
        {
            title: "Why You Need To Learn Python As An Artist?",
            desc: "Python has been gaining popularity among artists and designers due to its versatility.",
            jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp",
          },
    ];
    return (
        <>
            <h1>Cyber Security</h1>

            {
                cards4.map((card, index) => {
                    return <Card key={index} card={card} />
                })
            }
        </>
    )

}
