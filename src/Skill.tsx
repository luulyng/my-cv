function SingleSkill({ dot, skill }: { dot: string; skill: string }) {
  return (
    <div className="flex items-center text-white">
      <div className="mx-3">{dot}</div>
      <div>
        <li>
          <p className="ml-3">{skill}</p>
        </li>
      </div>
    </div>
  );
}

function Skill() {
  return (
    <div>
      <h1 className="leftheader">PERSONAL SKILL</h1>
      <br></br>
      <ul>
        <SingleSkill dot="●" skill="Public Speaking" />
        <SingleSkill dot="●" skill="Financial Management" />
        <SingleSkill dot="●" skill="Creative Idea" />
        <SingleSkill dot="●" skill="Project Manager" />
        <SingleSkill dot="●" skill="Director" />
      </ul>
    </div>
  );
}

export default Skill;
