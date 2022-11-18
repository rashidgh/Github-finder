import React, { Fragment, useContext } from "react";
import Search from "./Search";
// import { GlobalContextApi } from '../ContextApi/GlobalContext';
import Moment from "react-moment";
import { GlobalContextApi } from "./../ContextApi/GlobalContext";

const Mainpage = () => {
  let { repos } = useContext(GlobalContextApi);
  return (
    <div className="mainPage">
      <header>
        <Search />
      </header>
      <main>
        {/* <figure><img alt="" /></figure> */}
        {repos === null ? (
          "loading"
        ) : (
          <Fragment>
            {repos.map(repo => {
              return (
                <div className="container" key={repo.id}>
                  <h1>{repo.name}</h1>
                  <p className="desc">
                    {repo.description === null
                      ? "no description"
                      : repo.description.slice(0, 20) + "..."}
                  </p>
                  <p className="repo_content">
                    <span>{repo.language}</span>
                    <span>{repo.visibility} </span>
                    <span>
                      <Moment fromNow>{repo.created_at}</Moment>
                    </span>
                  </p>
                  <p className="btn_block">
                    <a href={repo.clone_url}>Clone</a>
                    <a href={repo.downloads_url}>download</a>
                    <a href={repo.html_url} target="_blank">
                      View Github repo
                    </a>
                  </p>
                </div>
              );
            })}
          </Fragment>
        )}
      </main>
      <footer></footer>
    </div>
  );
};

export default Mainpage;
