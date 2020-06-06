import React, { useEffect, useState } from "react";
import "./App.scss";
import "../../variables.scss";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Jumbotron from "../Jumbotron";
import About from "../About";
import Users from "../Users";
import RegistrationForm from "../RegistrationForm";
import Footer from "../Footer";
import { UploadingStateData, Users as UsersData } from "../../lib/types";
import { getUsers } from "../../lib/api";
import { sortByRegistraion } from "../../lib/sort";
import Modal from "../Modal";

const USERS_COUNT = 6;
const App = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [uploadingState, setUploadingState] = useState<UploadingStateData>({
    error: false,
    loading: false,
  });
  const [users, setUsers] = useState<UsersData>({
    loading: false,
    data: [],
    error: false,
    end: false,
  });

  const [page, setPage] = useState<number>(1);

  const handleMenuActiveChange = (value: boolean) => {
    setMenuActive(value);
  };

  useEffect(() => {
    setUsersData(page);
  }, [page]);

  const setUsersData = async (page: number) => {
    try {
      const usersData = await getUsers(page, USERS_COUNT);
      let end = usersData.page === usersData.total_pages;
      let data = usersData.users;
      if (!data) data = [];
      setUsers((prev) => ({
        loading: false,
        error: false,
        data: sortByRegistraion([...prev.data, ...data]),
        end,
      }));
    } catch (e) {
      setUsers((prev) => ({
        loading: false,
        error: true,
        data: prev.data,
        end: false,
      }));
    }
  };

  const incrementPage = async () => {
    await setPage(page + 1);
  };

  const refreshUsers = () => {
    setUsers({ loading: false, end: false, error: false, data: [] });
    if (page === 1) {
      setPage(1);
      setUsersData(1);
    } else {
      setPage(1);
    }
  };

  return (
    <div className="App">
      <Navbar handleMenuActiveChange={handleMenuActiveChange} />
      <Sidebar
        handleMenuActiveChange={handleMenuActiveChange}
        menuActive={menuActive}
      />
      <Jumbotron />
      <About />
      <Users users={users} incrementPage={incrementPage} />
      <RegistrationForm
        setUploadingState={setUploadingState}
        setModalActive={setModalActive}
        refreshUsers={refreshUsers}
      />
      <Footer />
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        uploadingState={uploadingState}
      />
    </div>
  );
};

export default App;
