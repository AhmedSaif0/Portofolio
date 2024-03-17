import React from 'react';
import '../Assets/Timeline.scss'


import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';


const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
};
const schoolIcon = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
};
const starIcon = {
  icon: <FontAwesomeIcon icon={faStar} />,
  iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
};

export const Timeline = () => {
  const timeline = [
    {
      icon: workIcon,
      date: 'june/2022 - present',
      title: 'IT support',
      subtitle: 'Palmtree Computers',
      desc: `I have developing web applications and Bash scripts to optimize in production line processes,\ntroubleshooted and resolved a wide array of technical issues.`,
    },
    {
      icon: schoolIcon,
      date: '2022 - 2023',
      title: 'Front-end Course',
      subtitle: 'FreeCodeCamp',
      desc: 'Ive dedicated over 50 hours to learning the React.js framework and building web applications.',
    },
    {
      icon: schoolIcon,
      date: '2020 - 2021',
      title: 'Training period',
      subtitle: 'National Authority for Graduate Employment Sudan',
      desc: 'I have learned the principles of web programming and collaborated on a full-stack project.',
    },
    // {
    //   icon: schoolIcon,
    //   date: '2002 - 2006',
    //   title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
    //   subtitle: 'Bachelor Degree',
    //   desc: 'Creative Direction, Visual Design',
    // },
    { icon: starIcon },
  ];

  return (
    <section className='timeline ' >
      <div className="light-right"></div>
      <div className="light-left"></div>
  
      <VerticalTimeline className='container'>
        {timeline.map((t, i) => {
          const contentStyle =
            i === 0
              ? { background: 'rgb(171 218 255)', color: 'rgb(11, 53, 88)' }
              : undefined;
          const arrowStyle =
            i === 0
              ? { borderRight: '7px solid rgb(171 218 255)' }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}













