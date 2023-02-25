import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{language}</Typography>
          <Typography>{description}</Typography>
          <Typography>{stargazers_count}</Typography>
          <Typography>{forks_count}</Typography>
          <Typography>{created_at}</Typography>
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
