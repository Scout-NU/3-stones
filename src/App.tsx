import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import EducationPage from './pages/education';

   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/education" element={<EducationPage />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;