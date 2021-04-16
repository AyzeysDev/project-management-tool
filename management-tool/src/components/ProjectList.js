import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';
import ProjectContext from '../context/ProjectContext';
import Project from './Project';

const ProjectList = () => {

  const { project, setProject } = useContext(ProjectContext);

  const handleRemoveProject = (id) => {
    setProject(project.filter((projects) => projects.id !== id));
  };

  return (
    <React.Fragment>
      <h2>Project Hub</h2>
        {!_.isEmpty(project) ? (
          <Row>
          {project.map((projects) => (
            <Col key={projects.id} sm={10} md={5} lg={4} xl={4}>
            <Project key={projects.id} {...projects} handleRemoveProject={handleRemoveProject} />
            </Col>
          ))}
          </Row>
          )  : (
          <p className="message">Looks like your project tool box is empty. Prepare a new project by adding a task.</p>
        )}
    </React.Fragment>
  );
};

export default ProjectList;
