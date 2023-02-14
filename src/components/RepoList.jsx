import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const RepoList = (props) => {

    const {name,
          language
          // description,
          // stargazers_count,
          // forks_count,
          // created_at,
          // commitTitle,
          // committerUsername,
          // commitHash,
          // dateCommitCreated
        } = props

    const listLanguage = () => {
      return language.map((title) => {
        return (
          <Typography>{title.name}</Typography>
        )
      }
        
      )
    }

  // const repoName = props.parseData.name
  // const repoLanguage = props.parseData.language
  // const repoDescription = props.parseData.description
  // const repoStars = props.parseData.stargazers_count
  // const repoForks = props.parseData.forks_count
  // const repoCreationDate = props.parseData.created_at
  

  return(
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
          <Typography>
            {listLanguage()}
            {/* {repoDescription}
            {repoStars}
            {repoForks}
            {repoCreationDate} */}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RepoList

// const RepoList = (props) => {

//   // const { name,
//   //         language,
//   //         description,
//   //         starCount,
//   //         forkCount,
//   //         dateRepoCreated,
//   //         commitTitle,
//   //         committerUsername,
//   //         commitHash,
//   //         dateCommitCreated
//   //       } = props
  
//   // const repoLanguages = () => {
//   //   return language.map((language) => {
//   //     return (
//   //       <ul>{language.name}</ul>
//   //     )
//   //   })
//   // }

//   const {name} = props

//   const repoName = props.parseData.name
//   // const repoLanguage = props.parsedData.language
//   // const repoDescription = props.parsedData.description
//   // const repoStars = props.parsedData.stargazers_count
//   // const repoForks = props.parsedData.forks_count
//   // const repoCreationDate = props.parsedData.created_at
  

//   return (
//     <>
//       <div>{repoName}</div>
//       {/* <div class="accordion" id="accordionPanelsStayOpenExample">
//           <div class="accordion-item">
//                   <h2 
//                       // key={data.id}
//                       value={repoName}
//                       class="accordion-header" id="panelsStayOpen-headingOne">
//                   <button 
//                       class="accordion-button" 
//                       type="button" 
//                       data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
//                   {data.repo}
//               </button>
//               </h2>            
//           <div 
//               id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
//           <div 
//               class="accordion-body">
//           <strong>{language}</strong>
//           </div>
//           </div>
//           </div>
//       </div> */}
//     </>
//   )
// }
// export default RepoList
