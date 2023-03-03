import React, { useState } from "react";
import RepoList from "./RepoList.jsx";
import axios from "axios";
import "./Landing.css"

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [badSearchTerm, setBadSearchTerm] = useState(false);
  const [goodSearchTerm, setGoodSearchTerm] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  const getData = () => {
    let noSpacesSearchTerm = searchTerm.replace(/\s+/g, "");

    axios({
      method: "get",
      url: `https://api.github.com/orgs/${noSpacesSearchTerm}/repos`,
    })
      .then((res) => {
        console.log(res.data);

        const parseData = () => {

          return res.data
            .sort((a, b) => b.stargazers_count - a.stargazers_count)

            .map(
              ({
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
              }) => ({
                name: name,
                language: language,
                description: description,
                stargazers_count: stargazers_count,
                forks_count: forks_count,
                created_at: created_at,
                // commitTitle,
                // committerUsername,
                // commitHash,
                // dateCommitCreated
              })
            );
        };

        setSearchResult(parseData());

        setGoodSearchTerm(true)
        setTimeout(() => {
          setGoodSearchTerm(false)}, 3000)

      })

      .catch((err) => {
        console.log(
          err,
          "So we don't have this repo, but we DO have law degrees... maybe chug some Brawndo and try searching a cooler company?"
        );
        setBadSearchTerm(true);
        setTimeout(() => {
          setBadSearchTerm(false);
        }, 3000);
      });
  };

  // const datesForHumanEyes = (utc) => {
  //   // const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  //   const parseMonth = utc.getUTCMonth();

  //   const convertCase = (monthNumber) => {
  //     switch (monthNumber) {
  //       case 0:
  //         return "Jan";
  //       case 1:
  //         return "Feb";
  //       case 2:
  //         return "Mar";
  //       case 3:
  //         return "Apr";
  //       case 4:
  //         return "May";
  //       case 5:
  //         return "Jun";
  //       case 6:
  //         return "Jul";
  //       case 7:
  //         return "Aug";
  //       case 8:
  //         return "Sep";
  //       case 9:
  //         return "Oct";
  //       case 10:
  //         return "Nov";
  //       case 11:
  //         return "Dec";
  //       default:
  //         return "";
  //     }
  //   };

  //   return convertCase(parseMonth);
  // };

  // const datesForHumanEyes = (utc) => {
  //       switch (utc) {
  //         case 0:
  //           return "Jan";
  //         case 1:
  //           return "Feb";
  //         case 2:
  //           return "Mar";
  //         case 3:
  //           return "Apr";
  //         case 4:
  //           return "May";
  //         case 5:
  //           return "Jun";
  //         case 6:
  //           return "Jul";
  //         case 7:
  //           return "Aug";
  //         case 8:
  //           return "Sep";
  //         case 9:
  //           return "Oct";
  //         case 10:
  //           return "Nov";
  //         case 11:
  //           return "Dec";
  //         default:
  //           return "";
  //       }
  //     };
  
  // const {datesForHumanEyes} = new Intl.DateTimeFormat('en-US', {
  //   timeZone: 'UTC',
  //   dateStyle: 'full',
  //   timeStyle: 'long'
  // })

  

  const displayRepoList = () => {
    return searchResult.map((data) => {
      return (
        <RepoList
          name={data.name}
          language={data.language}
          description={data.description}
          stargazers_count={data.stargazers_count}
          forks_count={data.forks_count}
          created_at={data.created_at}
        />
      );
    });
  };

  return (
    <div className="full-page">
      <div className="left-hand-side">
          <div className="search-container">
          <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="search repos"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button type="submit"><p id="button">GO</p></button>
          </form>
          {goodSearchTerm
            ?
            (<div className="i-love-you-message">Welcome to Repo Depot, <br/>I love you</div>)
            :
              null}
          {badSearchTerm 
            ? 
              (<div className="error-message">
                  Uhhh, what's {searchTerm}? <br/>We got Brawndo?
              </div>)
            : 
              null}
        </div>
        <header>Repo | Depot</header>
      </div>
      <div className="right-hand-side">{displayRepoList()}</div>
    </div>
  );
};

export default Landing;
