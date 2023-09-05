import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Homepage/Home';
import Programs from './Homepage/Programs';
import Blogs from './Homepage/Blogs';
import Contact from './Homepage/Contact';
import Gallery from './Homepage/Gallery';
import Login from './Homepage/Login';
import './App.css';
import Footer from './Homepage/Footer'
import Header from './Homepage/Headers';
import Admin from './AdminComponent/Admin';
import AdminProfileComponents from './AdminComponent/AdminProfile';
import UserComponents from './AdminComponent/UserList';
import CreateAdminUserComponent from './AdminComponent/AddAdminTableForm';
import MembershipplanComponent from './AdminComponent/MembershipSubscriptionPlans';
import CreateSubplanComponent from './AdminComponent/AddSubscriptionPlanForm';
import GymMemberComponent from './AdminComponent/GymMemberList';
import Member from './MemberComponent/Member';
import MemberProfileComponents from './MemberComponent/MemberProfile';
import HealthStat from './MemberComponent/HealthStatus';
import SubscriptionplanComponents from './MemberComponent/SubscriptionPlanDisplay';
import CreateGymMemberComponent from './MemberComponent/MembershipForm';
import MemberWorkoutComponents from './MemberComponent/MemberWorkoutPlan';
import MemberDietComponents from './MemberComponent/MemberDietPlan';
import MemberOrderComponents from './MemberComponent/MemberOrder';
import Trainer from './TrainerComponent/Trainer';
import TrainProfileComponents from './TrainerComponent/TrainerProfile';
import TrainDietComponents from './TrainerComponent/TrainerDietPage';
import CreateDietplanComponent from './TrainerComponent/AddDietplan';
import UpdateDietComponent from './TrainerComponent/UpdateDietPlan';
import TrainWorkoutComponents from './TrainerComponent/TrainerWorkoutPage';
import CreateWorkoutplanComponent from './TrainerComponent/AddWorkoutplan';
import UpdateWorkoutComponent from './TrainerComponent/UpdateWorkoutPlan';
import CreateUserComponent from './Homepage/SignUp'
import HomeNavbar from './NavbarComponent/HomeNavbar';





const App = () => {
  return (


    <BrowserRouter>
      <Header />

      <HomeNavbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Login" element={<Login />} />



        <Route path='/admin' element={<Admin />} />

        <Route path="/createuser" element={<CreateUserComponent />} />
        <Route path='/admin/adminprofile' element={<AdminProfileComponents />} />
        <Route path='/admin/userlist' element={<UserComponents />} />
        <Route path='/admin/addUsers' element={<CreateAdminUserComponent />} />
        <Route path='/admin/planlist' element={<MembershipplanComponent />} />
        <Route path='/admin/addplan' element={<CreateSubplanComponent />} />
        <Route path='/admin/gymmemberlist' element={<GymMemberComponent />} />
        <Route path='/admin/usercomponent' element={<UserComponents />} />


        <Route path='/member' element={<Member />} />

        <Route path='/member/memberprofile' element={<MemberProfileComponents />} />
        <Route path='/member/healthstatus' element={<HealthStat />} />
        <Route path='/member/membsubplan' element={<SubscriptionplanComponents />} />
        <Route path='/member/membform' element={<CreateGymMemberComponent />} />
        <Route path='/member/membworkoutplan' element={<MemberWorkoutComponents />} />
        <Route path='/member/membdietplan' element={<MemberDietComponents />} />
        <Route path='/member/memberorder' element={<MemberOrderComponents />} />


        <Route path='/trainer' element={<Trainer />}></Route>

        <Route path='/trainer/trainprofile' element={<TrainProfileComponents />} />
        <Route path='/trainer/dietplan' element={<TrainDietComponents />} />
        <Route path='/trainer/adddietplan' element={<CreateDietplanComponent />} />
        <Route path='/trainer/updateDietplan/:planid' element={<UpdateDietComponent />} />
        <Route path='/trainer/workoutplan' element={<TrainWorkoutComponents />} />
        <Route path='/trainer/addworkout' element={<CreateWorkoutplanComponent />} />
        <Route path='/trainer/updateWorkoutplan/:workoutid' element={<UpdateWorkoutComponent />} />
        <Route path='/trainer/updateWorkoutplan/:id' element={<UpdateWorkoutComponent />} />


      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;
