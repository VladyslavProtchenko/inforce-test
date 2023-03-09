import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='' element={<Home/>}/>
  </Route>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;