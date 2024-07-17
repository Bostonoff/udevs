import React from "react";
import "./team.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Team = () => {
  return (
    <div className="team__module" id="command" data-aos="fade-up">
      <div className="container">
        <h1 className="title__modules">Team</h1>
        <div className="team__flex__module">
          <div className="left__flex__module">
            <p className="text__team">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <p className="total__team">
                  {isVisible ? (
                    <CountUp start={0} end={100} duration={2} />
                  ) : (
                    "1"
                  )}
                  +
                </p>
              )}
            </VisibilitySensor>
            <p className="dedicated__team">Dedicated team</p>
          </div>
          <div className="right__flex__module">
            <img
              src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
              alt="sos!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
