"use client";

import { useEffect, useState } from "react";
import { Advocate } from "./types"

export default function Home() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(jsonResponse.data);
      });
    });
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Get query and sanitize input
    const searchTerm = e.target.value.toLowerCase().trim();
    if (searchTerm.length >= 3) {
      console.log("filtering advocates...");
      const filteredAdvocates = advocates.filter((advocate: Advocate) => {
        return (
          advocate.specialties.some(speciality => speciality.toLowerCase().includes(searchTerm))
        );
      });

      setFilteredAdvocates(filteredAdvocates);
    }
  };

  const onClick = () => {
    console.log(advocates);
    setFilteredAdvocates(advocates);
  };

  return (
    <main style={{ margin: "24px" }}>
      <h1 className="mb-4 text-slate-50 text-4xl font-bold tracking-tight text-heading md:text-5xl lg:text-4xl">Solace Advocates</h1>
      <br />
      <br />
      <div className="w-full max-w-sm min-w-[200px]">
        <input className="w-full bg-transparent placeholder:text-slate-50 text-slate-50 text-sm border border-slate-50 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search" onChange={onChange} />
        <button className="text-slate-50" onClick={onClick}>Reset Search</button>
      </div>
      <br />
      <br />
      <table className="table-auto w-full bg-white border border-gray-300">
        <thead className="bg-slate-500 text-white">
          <tr>
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">City</th>
            <th className="border border-gray-300 px-4 py-2">Degree</th>
            <th className="border border-gray-300 px-4 py-2">Specialties</th>
            <th className="border border-gray-300 px-4 py-2">Years of Experience</th>
            <th className="border border-gray-300 px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredAdvocates.map((advocate: Advocate) => {
            return (
              <tr key={advocate.phoneNumber}>
                <td className="border border-gray-300 px-4 py-2">{advocate.firstName}</td>
                <td className="border border-gray-300 px-4 py-2">{advocate.lastName}</td>
                <td className="border border-gray-300 px-4 py-2">{advocate.city}</td>
                <td className="border border-gray-300 px-4 py-2">{advocate.degree}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {advocate.specialties.map((s) => (
                    <div key={s}>{s}</div>
                  ))}
                </td>
                <td className="border border-gray-300 px-4 py-2">{advocate.yearsOfExperience}</td>
                <td className="border border-gray-300 px-4 py-2">{advocate.phoneNumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}
