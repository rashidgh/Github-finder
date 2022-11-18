import React,{useContext} from 'react'
import Pages from './Services/Pages'
import Spinner from './Services/Spinner';
import { GlobalContextApi } from './ContextApi/GlobalContext';

const App = () => {
    let { load } = useContext(GlobalContextApi);
  return (
    <div>
        {load === true ? (
          <Spinner />
        ) : (
          <>
        <Pages/>
          </>
        )}
    </div>
  );
}

export default App;