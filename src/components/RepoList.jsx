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


  // const repoName = props.parseData.name
  // const repoLanguage = props.parseData.language
  // const repoDescription = props.parseData.description
  // const repoStars = props.parseData.stargazers_count
  // const repoForks = props.parseData.forks_count
  // const repoCreationDate = props.parseData.created_at

  return (
    <div className="repo-list">
      <Accordion
        style={{ width: "80%",
                 backgroundColor: "#F7BFB4",
                //  backgroundImage: 'url(images/crumpled-ticket.jpg)',
                //  margin: "0.3rem",
                //  alignitems: "center",
                 borderRadius: "0.3rem" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{ textAlign: 'center',
                   color: '#ff10f0',
                  //  color: '#F7BFB4',
                   margin: '0.5rem' }}>
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: 'left', margin: '0.5rem', }}>
          <Typography>{description}</Typography>
          <Typography style={{ color: '#F7BFB4' }}>{language}</Typography>
          <Typography>Stargazers Count: {stargazers_count}</Typography>
          <Typography>Fork Count: {forks_count}</Typography>
          <Typography>Date Created: {created_at}</Typography>
        </AccordionDetails>
        {/* </Accordion>
      <Accordion> */}
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        ></AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
};

export default RepoList;
