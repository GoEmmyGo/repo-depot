import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./RepoList.css";

const RepoList = (props) => {
  const {
    name,
    language,
    description,
    stargazers_count,
    forks_count,
    created_at,
    // commitTitle,
    // committerUsername,
    // commitHash,
    // dateCommitCreated
  } = props;


  return (
    <div className="repo-list">
      <div>
        <Accordion
          style={{ backgroundColor: "#B8C0FF",
                   borderRadius: "0.3rem" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ textAlign: 'left',
                    color: '#0B3954',
                    margin: '0.5rem' }}>
            <p style={{ fontFamily: 'Press Start 2P | cursive'}}>{name}</p>
          </AccordionSummary>
          <Typography style={{ textAlign: 'left',
                    color: '#0B3954',
                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
                    marginLeft: '1.5rem',
                    marginRight: '1.5rem'}}>{description}</Typography>
          <div className="accordian-details">
            <AccordionDetails>
                  <p>{language}</p>
                  <p>{stargazers_count} stargazers</p>
                  <p>{forks_count} forks</p>
                  <p>Created {created_at}</p>                   
            </AccordionDetails>
          </div> 
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          ></AccordionSummary>
          <AccordionDetails></AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default RepoList;
