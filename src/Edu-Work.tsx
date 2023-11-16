function SingleEduWork({title, year, place, description}: {title: string, year: string, place: string, description: string}) {
    return (
        <div>
        <div className="flex items-center justify-between">
            <div>
                <p>{title}</p>
                <p className="italic">{place}</p>
            </div>
            <div>{year}</div>
        </div>
        <p>{description}</p>
        </div>
    );
}

function EduWork(){
    return (
        <div>
            <h1 className="rightheader">EDUCATION</h1>
            <br></br>
            <SingleEduWork title="BACHELOR OF DESIGN" place="University/College/Institue" year="2012-2015" description=""/>
            <SingleEduWork title="BACHELOR OF DESIGN" place="University/College/Institue" year="2012-2015" description=""/>
            <br></br>
            <h1 className="rightheader">WORK EXPERIENCE</h1>
            <SingleEduWork title="JOB TITLE" place="COMPANY NAME" year="2012-2015" description="Definition about your job. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mauris sem."/>

            <br></br>
            <SingleEduWork title="JOB TITLE" place="COMPANY NAME" year="2012-2015" description="Definition about your job. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at mauris sem."/>
        </div>
    );
}

export default EduWork;