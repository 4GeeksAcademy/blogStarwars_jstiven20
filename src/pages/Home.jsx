// src/pages/Home.jsx
import React, { useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalReducer";
import CardList from "../components/CardList";

const Home = () => {
  const { store, dispatch } = useGlobalContext();

  useEffect(() => {
    const fetchAll = async () => {
      dispatch({ type: "set_loading" });

      const endpoints = ["people", "vehicles", "planets"];
      for (let type of endpoints) {
        try {
          const res = await fetch(`https://www.swapi.tech/api/${type}`);
          const data = await res.json();
          dispatch({ type: "set_data", payload: { key: type, data: data.results } });

          for (let item of data.results) {
            const detailRes = await fetch(`https://www.swapi.tech/api/${type}/${item.uid}`);
            const detailData = await detailRes.json();
            dispatch({
              type: "set_data",
              payload: {
                key: `${type}_details`,
                data: {
                  ...store[`${type}_details`],
                  [item.uid]: detailData.result.properties
                }
              }
            });
          }
        } catch (err) {
          dispatch({ type: "set_error", payload: err.message });
        }
      }
    };

    fetchAll();
  }, []);

  return (
    <>
      <h1 className="text-center mt-5">Hello from Home</h1>
      <div className="container-fluid">
        <CardList
          title="Characters"
          items={store.people}
          type="people"
          detailsMap={store.people_details || {}}
        />
        <CardList
          title="Vehicles"
          items={store.vehicles}
          type="vehicles"
          detailsMap={store.vehicles_details || {}}
        />
        <CardList
          title="Planets"
          items={store.planets}
          type="planets"
          detailsMap={store.planets_details || {}}
        />
      </div>
    </>
  );
};

export default Home;

