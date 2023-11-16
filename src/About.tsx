function SingleAbout({content}: {content: string} ) {
    return (
        <div>
            <p>{content}</p>
        </div>
    );
}

function About(){
    return (
        <div className="mt-20">
        <h1 className="rightheader">ABOUT ME</h1>
        <br></br>
        <SingleAbout content="Write your profile. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mauris sem. Suspendisse arcu nisl, accumsan eget egestas a, ultrices auctor lorem. In dictum quam vitae volutpat gravida. " />
        </div>
    );
}

export default About;