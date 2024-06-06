import { useState } from "react";
import { projectsData, projectsNav } from "./Data";
import WorksItems from "./WorksItems";
import { useEffect } from "react";

const Works = () => {
  const [item, setItem] = useState({ name: "Todo" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "Todo") {
      setProjects(projectsData);
    } else {
        
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((pj, index) => {
          return (
            <span
              onClick={(e) => {
                handleClick(e, index);
              }}
              key={index}
              className={`${active === index ? 'active-work' : ''} work__item`}
            >
              {pj.name}
            </span>
     
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
