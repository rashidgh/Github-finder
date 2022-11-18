import React,{useContext} from 'react';
import { GlobalContextApi } from './../ContextApi/GlobalContext';

const SidebarComp = () => {
  let { result } = useContext(GlobalContextApi);
  return (
    <div className="sideBar">
      <header>
        <figure>
          <img src={result.avatar_url} alt="" />
        </figure>
        <h2 className="side-name">{result.name}</h2>
        <h2 className="user-name">{result.login}</h2>
        <p>{result.bio}</p>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default SidebarComp