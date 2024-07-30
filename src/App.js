// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import ForgotPassword from './pages/ForgotPassword';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import LoginPage from './pages/LoginPage';

// const App = () => {
//   return (
//       <Router>
//         <Routes>
//           <Route path="/sign-in" element={<SignIn />} />
//           <Route path="/forgot-password" element={<ForgotPassword />} />
//           <Route path="/Sign-up" element={<SignUp />} />
//           <Route path="/login-page" element={<LoginPage />} />
//           {/* <Route path="*" element={<Navigate to="/SignIn" />} /> */}
//         </Routes>
//       </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login2" element={<SignIn />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;

