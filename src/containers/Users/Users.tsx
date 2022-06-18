import React, { useState } from "react";
import { Table } from "antd";
import "./Users.scss";
import Navbar from "../../components/Navbar/Navbar";

const Users: React.FC = () => {
  const dataSource = [
    {
      type: "admin",
      _id: "61404b1543eea5412cec03db",
      name: "Dipan Roy",
      email: "dipanroy@mindwebs.org",
      profile_pic:
        "https://elixir.mwv.one/drive/1640270765843-68768931-avatar.png",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: null,
        _id: "619be85da089e64544f28c92",
        name: "Institute KGEC",
        level: 0,
      },
      enrollment_number: 1020021058,
    },
    {
      type: "teacher",
      _id: "614062e1582d52a04e786422",
      profile_pic:
        "https://elixir.mwv.one/drive/1637265593274-220749059-Nabanita.jpeg",
      name: "Nabanita Sarkar",
      email: "nabanita.sarkar@mindwebs.org",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
      enrollment_number: 1020021049,
    },
    {
      type: "student",
      _id: "6141dba6ff7868b6760a0b34",
      name: "Bijan Kundu",
      email: "bijan.kundu@mindwebs.org",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Bijan%20Kundu.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: "Technology School",
        _id: "619beb84d73d624074f5f07a",
        parent_id: "619bea20289efa7a48899505",
        name: "B.Tech - ECE",
        level: 2,
      },
      departmentName: "End Department Test",
      enrollment_number: 1120021048,
    },
    {
      type: "student",
      _id: "61994ca0ce13d4561cd37b76",
      name: "Ayush Singh",
      email: "ayush.singh@mindwebs.org",
      enrollment_number: 123,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Ayush%20Singh.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
    {
      type: "student",
      _id: "61994d820963357414712981",
      name: "Anindya Kanti Mitra",
      email: "anindya.mitra@mindwebs.org",
      enrollment_number: 124,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Anindya%20Kanti Mitra.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "CSE",
    },
    {
      type: "student",
      _id: "619a8abbe84a8846daaf0298",
      name: "Kimmy Brandice",
      email: "Kimmy.Brandice@yopmail.com",
      enrollment_number: 34268006,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Kimmy%20Brandice.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "student",
      _id: "619a8abbe84a8879a1af0299",
      name: "Linet Armanda",
      email: "hefod30234@luxiu2.com",
      enrollment_number: 13327425,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "student",
      _id: "619b0eb284dab33eff940fea",
      name: "Linet Armanda",
      email: "focag82230@kyrescu.com",
      enrollment_number: 13444425,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "student",
      _id: "619b0f3984dab3a7a2940feb",
      name: "Linet Armanda",
      email: "hamilaf742@nefacility.com",
      enrollment_number: 13321499,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "teacher",
      _id: "620c06b5e3dbf2d58bc58af1",
      name: "Vidhya MS",
      email: "vidhya.ms@manipal.edu",
      enrollment_number: "001010",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Vidhya%20MS.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
    },
    {
      type: "teacher",
      _id: "621071a6e3dbf2284bc58b10",
      name: "Vidyasagar Potdar",
      email: "vidyasagar.potdar@gmail.com",
      enrollment_number: "11001",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Vidyasagar%20Potdar.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
    },
    {
      type: "student",
      _id: "62107600e3dbf2d633c58b11",
      name: "Abubakar Mohammed",
      email: "contact@vidypotdar.com",
      enrollment_number: "10101",
      profile_pic:
        "https://elixir.mwv.one/drive/1645680439650-199928714-abubakar.jpg",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
    },
    {
      type: "student",
      _id: "62108687d58dc872b6cbee7c",
      name: "Melisent Pacorro",
      email: "Melisent.Pacorro@yopmail.com",
      enrollment_number: 56655111,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Melisent%20Pacorro.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
    {
      type: "student",
      _id: "6210880fd58dc865a8cbee87",
      name: "Linet Armanda",
      email: "Linet.Armanda@yopmail.com",
      enrollment_number: "gjcdjc759",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
    {
      type: "student",
      _id: "6210880fd58dc86665cbee88",
      name: "Sarette Brackely",
      email: "Sarette.Brackely@yopmail.com",
      enrollment_number: "bkvkhvk8559",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Sarette%20Brackely.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
  ];

  const [dataState, setDataState] = useState<any>([
    {
      type: "admin",
      _id: "61404b1543eea5412cec03db",
      name: "Dipan Roy",
      email: "dipanroy@mindwebs.org",
      profile_pic:
        "https://elixir.mwv.one/drive/1640270765843-68768931-avatar.png",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: null,
        _id: "619be85da089e64544f28c92",
        name: "Institute KGEC",
        level: 0,
      },
      enrollment_number: 1020021058,
    },
    {
      type: "teacher",
      _id: "614062e1582d52a04e786422",
      profile_pic:
        "https://elixir.mwv.one/drive/1637265593274-220749059-Nabanita.jpeg",
      name: "Nabanita Sarkar",
      email: "nabanita.sarkar@mindwebs.org",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
      enrollment_number: 1020021049,
    },
    {
      type: "student",
      _id: "6141dba6ff7868b6760a0b34",
      name: "Bijan Kundu",
      email: "bijan.kundu@mindwebs.org",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Bijan%20Kundu.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: "Technology School",
        _id: "619beb84d73d624074f5f07a",
        parent_id: "619bea20289efa7a48899505",
        name: "B.Tech - ECE",
        level: 2,
      },
      departmentName: "End Department Test",
      enrollment_number: 1120021048,
    },
    {
      type: "student",
      _id: "61994ca0ce13d4561cd37b76",
      name: "Ayush Singh",
      email: "ayush.singh@mindwebs.org",
      enrollment_number: 123,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Ayush%20Singh.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
    {
      type: "student",
      _id: "61994d820963357414712981",
      name: "Anindya Kanti Mitra",
      email: "anindya.mitra@mindwebs.org",
      enrollment_number: 124,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Anindya%20Kanti Mitra.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "CSE",
    },
    {
      type: "student",
      _id: "619a8abbe84a8846daaf0298",
      name: "Kimmy Brandice",
      email: "Kimmy.Brandice@yopmail.com",
      enrollment_number: 34268006,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Kimmy%20Brandice.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "student",
      _id: "619a8abbe84a8879a1af0299",
      name: "Linet Armanda",
      email: "hefod30234@luxiu2.com",
      enrollment_number: 13327425,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "student",
      _id: "619b0eb284dab33eff940fea",
      name: "Linet Armanda",
      email: "focag82230@kyrescu.com",
      enrollment_number: 13444425,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "student",
      _id: "619b0f3984dab3a7a2940feb",
      name: "Linet Armanda",
      email: "hamilaf742@nefacility.com",
      enrollment_number: 13321499,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Kalyani Government Engineering College",
      departmentId: null,
      departmentName: "ECE",
    },
    {
      type: "teacher",
      _id: "620c06b5e3dbf2d58bc58af1",
      name: "Vidhya MS",
      email: "vidhya.ms@manipal.edu",
      enrollment_number: "001010",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Vidhya%20MS.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
    },
    {
      type: "teacher",
      _id: "621071a6e3dbf2284bc58b10",
      name: "Vidyasagar Potdar",
      email: "vidyasagar.potdar@gmail.com",
      enrollment_number: "11001",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Vidyasagar%20Potdar.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
    },
    {
      type: "student",
      _id: "62107600e3dbf2d633c58b11",
      name: "Abubakar Mohammed",
      email: "contact@vidypotdar.com",
      enrollment_number: "10101",
      profile_pic:
        "https://elixir.mwv.one/drive/1645680439650-199928714-abubakar.jpg",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: null,
        _id: "619bea20289efa7a48899505",
        parent_id: "619be85da089e64544f28c92",
        name: "Bachelor's of Technology",
        level: 1,
      },
      departmentName: "Bachelor's of Technology",
    },
    {
      type: "student",
      _id: "62108687d58dc872b6cbee7c",
      name: "Melisent Pacorro",
      email: "Melisent.Pacorro@yopmail.com",
      enrollment_number: 56655111,
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Melisent%20Pacorro.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
    {
      type: "student",
      _id: "6210880fd58dc865a8cbee87",
      name: "Linet Armanda",
      email: "Linet.Armanda@yopmail.com",
      enrollment_number: "gjcdjc759",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Linet%20Armanda.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
    {
      type: "student",
      _id: "6210880fd58dc86665cbee88",
      name: "Sarette Brackely",
      email: "Sarette.Brackely@yopmail.com",
      enrollment_number: "bkvkhvk8559",
      profile_pic:
        "https://avatars.dicebear.com/api/initials/Sarette%20Brackely.svg?radius=50",
      collegeId: "60f47da0f1163c42267286aa",
      collegeName: "Institute Elixir",
      departmentId: {
        school_name: "Technology",
        _id: "619bea42289efa7a48899506",
        parent_id: "619be85da089e64544f28c92",
        name: "Master's of Technology",
        level: 1,
      },
      departmentName: "Master's of Technology",
    },
  ]);
  const [filter, setFilter] = useState<string>();
  const [search, setSearch] = useState<string>();
  const [sort, setSort] = useState<string>();
  // const [sortRoll, setSortRoll] = useState<string>();

  const columns = [
    {
      title: "User",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Enrollment No",
      dataIndex: "enrollment_number",
      key: "enrollment_number",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "College",
      dataIndex: "collegeName",
      key: "collegeName",
    },
    {
      title: "Department",
      render: (item: any) => {
        if (item.departmentId) return item.departmentId.name;
        return "NA";
      },
      key: "departmentId",
    },
  ];

  const updateSearch = (e: any) => setSearch(e.target.value);

  const getSearch = (e: any) => {
    e.preventDefault();
    const searchVal = search;
    console.log(searchVal);
    const searchData = dataSource.filter(
      (item: any) =>
        item.name === searchVal ||
        item.name.toUpperCase().includes(searchVal?.toUpperCase()) ||
        item.name.toLowerCase().includes(searchVal?.toLowerCase()) ||
        item.email === searchVal ||
        item.email.toUpperCase().includes(searchVal?.toUpperCase()) ||
        item.email.toLowerCase().includes(searchVal?.toLowerCase())
    );
    setDataState(searchData);
    setSearch("");
  };

  const getFilter = (e: any) => {
    e.preventDefault();
    setFilter(e.target.value);
    const filterVal = e.target.value;
    console.log(filterVal);
    const filterData = dataSource.filter(
      (item: any) => item.type === filterVal
    );
    console.log(filterData);
    setDataState(filterData);
  };

  function compareFn(a: any, b: any) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }

  const getSort = (e: any) => {
    e.preventDefault();
    setSort(e.target.value);
    const sortVal = e.target.value;
    console.log(sortVal);
    const sortData =
      sortVal === "name"
        ? dataSource.sort(compareFn)
        : dataSource.sort(
            (a: any, b: any) => a.enrollment_number - b.enrollment_number
          );
    setDataState(sortData);
  };

  return (
    <section className="users-container">
      <Navbar title="Users" />
      <div className="table-top-bar">
        <form className="search-box top-bar-box" onSubmit={getSearch}>
          <input
            type="text"
            className="input_detail search-input"
            placeholder="Search"
            required
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="btn search-btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
        <div className="filter-box top-bar-box">
          {/* <span className="filter-placeholder">Filter by user types</span> */}
          <select
            className="input_detail filter-input"
            name="type"
            id="type"
            value={filter}
            onChange={getFilter}
          >
            <option value="">filter by user types</option>
            <option value="teacher">teacher</option>
            <option value="student">student</option>
            <option value="admin">admin</option>
          </select>
          <div>
            <button className="btn-clear" onClick={() => setFilter("")}>
              Clear Filter
            </button>
          </div>
        </div>
        <div className="sort-box top-bar-box">
          <select
            className="input_detail sort-input"
            name="type"
            id="type"
            value={sort}
            onChange={getSort}
          >
            <option value="">sort by</option>
            <option value="name">name</option>
            <option value="roll">roll</option>
          </select>
          <div>
            <button className="btn-clear" onClick={() => setSort("")}>
              Clear Sort
            </button>
          </div>
        </div>
      </div>
      <Table
        dataSource={filter === "" || sort === "" ? dataSource : dataState}
        columns={columns}
        className="users-table"
      />
    </section>
  );
};

export default Users;
