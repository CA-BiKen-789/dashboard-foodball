import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes } from '~/routes';
import Sidebar from '~/components/Sidebar';
import Header from '~/components/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <div style={{ display: 'flex', height: '100%' }}>
          <Sidebar />
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route
                key={index}
                path={route.path}
                element={<Page />}
              />
            })}
          </Routes>
        </div >
      </Router>
    </>
  );
}

export default App;
