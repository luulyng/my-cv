function SingleExpertise({ label, score }: { label: string; score: number }) {
  const arrs = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-between text-white">
      <div>{label}</div>
      <div className="flex gap-x-1">
        {arrs.map((item) => {
          return (
            <>
              {item > score ? (
                <span className="w-[10px] h-[10px] rounded-full flex bg-white"></span>
              ) : (
                <span className="w-[10px] h-[10px] rounded-full flex bg-orange-400"></span>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

function Expertise() {
  return (
    <div>
      <h1 className="leftheader">EXPERTISE</h1>
      <br></br>
      <SingleExpertise label="MS Word" score={5} />
      <SingleExpertise label="MS Exel" score={3} />
      <SingleExpertise label="Photoshop" score={4} />
      <SingleExpertise label="Illustrator" score={3} />
      <SingleExpertise label="Corel Draw" score={4} />
    </div>
  );
}

export default Expertise;
