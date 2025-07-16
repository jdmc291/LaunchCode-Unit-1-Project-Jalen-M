import TeaMaking from "../assets/PeopleMakingTea.jpg"

const HomePage = () => {
 
    return(
        <>
        <section id="about-us-container">

            <div className="about-us-picture">
                <img src={TeaMaking} />
            </div>

            <div className="about-us-description">
                <h1 className="tea-house-header">
                    Tea House    
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur totam recusandae cumque repellat, aspernatur aliquam tempora, est illo laboriosam saepe optio incidunt veniam minus quo! Ea ipsam nam quis nostrum!
                </p>
            </div>

            


        </section>
        </>
    )
}

export default HomePage