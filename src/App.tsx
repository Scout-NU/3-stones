import { BrowserRouter, Routes, Route } from 'react-router-dom';
   import EducationPage from './pages/education';
   import Homepage from './pages/Homepage'

   function App() {
     return (
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Homepage />} />
           <Route path="/education" element={<EducationPage />} />
         </Routes>
       </BrowserRouter>
     );
   }

   export default App;