import './App.css';
import { withLDProvider, useFlags } from 'launchdarkly-react-client-sdk';
import Form from './Form'
import ProdFeature from './ProdFeature' 


function App() {
  const {form,prodCode} = useFlags()
  

  return (
    <div className="App">
      <header className="App-header">
        {form ? (<Form/>) : (<div/>)}
        {prodCode ? (<ProdFeature/>) : (<div/>)}
      </header>
    </div>
  );
}
export default withLDProvider({
  clientSideID: '62ccb4c384101710f3c13a21'
})(App);