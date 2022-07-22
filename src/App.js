import React from "react";

// react-router-dom
//React Router คือ module ที่ทำหน้าที่ในการ Navigating หรือการเปลี่ยน page ไปมา ภายในระบบของ React นั้นคือการที่เราทำให้ app ของเรานั่นมีเพจหลายหน้า
//เรียกว่า Multi pages Application ดยเมื่อผู้ใช้ต้องการไปยังเว็บเพจนั้นก็จะสามารถกรอก URL
//หรือคลิกที่ลิงก์แล้วเปลี่ยนไปยังหน้าเว็บเพจปลายทางที่เราได้ทำการกำหนดไว้ได้นั่นเอง
import { Route, Switch } from "react-router-dom";

import AllMeetupPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        {/* switch */}
        {/* exact คือการกำหนดให้แยกส่วนหน้าต่างๆได้ */}
        <Route path="/" exact>
          <AllMeetupPage></AllMeetupPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage></NewMeetupPage>
        </Route>
        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
