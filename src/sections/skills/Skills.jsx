import SkillsData from './SkillsData';

export function SkillGroup() {
   const frontEndSkills = SkillsData.skills.front_end.map((skill, index) => {
      return <Skill skillImg={skill.img} SkillName={skill.name} key={index} />;
   });
   const designSkills = SkillsData.skills.design.map((skill, index) => {
      return <Skill skillImg={skill.img} SkillName={skill.name} key={index} />;
   });
   const frameworkSkills = SkillsData.skills.framework.map((skill, index) => {
      return <Skill skillImg={skill.img} SkillName={skill.name} key={index} />;
   });
   const cmsSkills = SkillsData.skills.cms.map((skill, index) => {
      return <Skill skillImg={skill.img} SkillName={skill.name} key={index} />;
   });

   return (
      <div className="skills-wrapper">
         <div className="category-group">
            <div className="skill-group">{frontEndSkills}</div>
            <div className="skill-group">{frameworkSkills}</div>
         </div>
         <div className="category-group">
            <div className="skill-group">{designSkills}</div>
            <div className="skill-group">{cmsSkills}</div>
         </div>
      </div>
   );
}

export function Skill(props) {
   return (
      <div className="skill">
         <img className="skill-image" src={props.skillImg} alt="" />
         <p className="skill-name">{props.SkillName}</p>
      </div>
   );
}
