import React, { useState } from "react";
import RepoList from "./RepoList.jsx";
import axios from "axios";

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [badSearchTerm, setBadSearchTerm] = useState(false);

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
      })

      .catch((err) => {
        console.log(
          err,
          "So we don't have this repo, but we DO have law degrees... maybe chug some Brawndo and try searching a cooler company?"
        );
        setBadSearchTerm(true);
        setTimeout(() => {
          setBadSearchTerm(false);
        }, 9000);
      });
  };

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
    <>
      <div className="left-hand-side-page">
        <header>Repo | Depot</header>
        <div className="search-container">
          <form className="search-form" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              placeholder="Welcome to Repo Depot, I love you"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            <button type="submit">Get Repo</button>
          </form>
          {badSearchTerm ? (
            <div className="error-message">
              So we don't have this repo, but we DO have law degrees... maybe
              chug some Brawndo and try searching a cooler company?
            </div>
          ) : null}
        </div>
        <div className="repo-list-container">{displayRepoList()}</div>
      </div>
    </>
  );
};

export default Landing;
