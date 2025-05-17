import React, { useEffect, useState } from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay: number;
  inView: boolean;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay, inView }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (inView) {
      timeout = setTimeout(() => {
        setWidth(skill.level);
      }, delay);
    } else {
      setWidth(0);
    }
    
    return () => {
      clearTimeout(timeout);
    };
  }, [inView, delay, skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out"
          style={{ 
            width: `${width}%`,
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;