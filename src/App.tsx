import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import EducationPage from './pages/education';
   import Homepage from './pages/Homepage'
   import DeveloperPage from './developer/DeveloperPage'

   function App() {
     return (
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Homepage />} />
           <Route path="/education" element={<EducationPage />} />
           <Route path="/developer" element={<DeveloperPage />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;