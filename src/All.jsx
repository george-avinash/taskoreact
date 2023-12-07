import Card from "./Card";

function All(){
    const cards = [
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
        {
          title: "What Is The Future Of Coding?",
          desc: "Coding will continue to be essential for all industries as technology advances.",
          jpg: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp",
        },
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
      ];
    
    return (
        <>
        <h1> All </h1>
        {
            cards.map((card,index)=>{
                return <Card key={index} card={card}/>
            })
        }
        </>
    )
}
export default All;