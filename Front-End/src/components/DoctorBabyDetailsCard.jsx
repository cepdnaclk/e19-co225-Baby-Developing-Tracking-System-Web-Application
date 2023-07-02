// BabyDetailsCard.jsx
import "./BabyDetailsCard.css";
import React from "react";
import VaccinationTimeline from "./Timeline";
import { useState, useEffect } from "react";
import axios from "axios";
import BabyVaccinationEditForm from "./BabyVaccinationEditForm";

const API_URL_DOC = "http://localhost:8080/api/v1/doctor";
const API_URL_VAC = "http://localhost:8080/api/v1/vaccine";

const DoctorBabyDetailsCard = ({
  baby,
  onClose,
  babyTableData,
  callbackFunc,
}) => {
  const [vaccine, setVaccine] = useState("Select Vaccine Type");
  const [date, setSuggestedDate] = useState("");
  const [babyId, setBabyId] = useState(baby.id);
  const [thisBaby, setThisBaby] = useState(baby);
  const [vaccineId, setVaccineId] = useState(0);
  const [vaccinations, setVaccinations] = useState([]);
  const [vaccineMessage, setVaccineMessage] = useState("");
  const [selectedBabyVaccination, setShowBabyVaccinationEditForm] =
    useState("");

  useEffect(() => {
    const fetchedBaby = babyTableData.find((baby) => baby.id === babyId);
    setThisBaby(fetchedBaby);
  }, [babyId, babyTableData]);

  const handleVaccineSelect = (vaccine) => {
    console.log(vaccine);
    setVaccineId(vaccine);
    setVaccicationData();
    setVaccineMessage("");
    for (let i = 0; i < vaccinations.length; i++) {
      console.log(vaccinations[i].id);
      if (vaccinations[i].id == vaccine) {
        setVaccine(vaccinations[i].name);
        break;
      }
    }
    console.log(relavantVax);
    setVaccine(relavantVax.name);
  };
  const setVaccicationData = () => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;

      axios
        .get(
          API_URL_VAC,

          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          setVaccinations(response.data);
        });
    } catch (err) {
      alert(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);
      console.log(babyId);
      axios
        .post(
          API_URL_DOC + "/baby_vaccine/add",
          {
            babyId,
            vaccineId,
            date,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .catch((error) => {
          setVaccineMessage(`Error: Vaccine Already Assigned`);
        });
    } catch (err) {
      alert(err);
    }

    callbackFunc();
  };

  const handleVaccineMark = (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);

      console.log(API_URL_DOC + "/baby_vaccine/mark/" + id);

      axios.put(
        API_URL_DOC + "/baby_vaccine/mark/" + id,
        {},
        {
          headers: {
            Authorization: "Bearer " + access,
          },
        }
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    callbackFunc();
  };
  const handleVaccineDelete = (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);
      console.log(API_URL_DOC + "/baby_vaccine/delete/" + id);

      axios.delete(API_URL_DOC + "/baby_vaccine/delete/" + id, {
        headers: {
          Authorization: "Bearer " + access,
        },
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    callbackFunc();
  };

  return (
    <div className="baby-details-card border-slate-100 border-8">
      <div className="card-header sticky top-0 bg-white z-10">
        <h3>&nbsp;Baby Details</h3>
        <button
          className="close-button h-10 w-10 rounded-full bg-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <div className="card-content">
        <div className="baby-info">
          <div>
            <strong>Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</strong> {thisBaby.babyName}
          </div>
          {/* <div>
            <strong>Age:</strong> {thisBaby.babyAge}
          </div> */}
          <div>
            <strong>Parent Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:</strong> {thisBaby.parentName}
          </div>
          <div>
            <strong>Appointed Midwife Name&nbsp;:</strong> {thisBaby.midWifeName}
          </div>
          <br></br>
          <form onSubmit={handleSubmit}>
            <fieldset className="flex flex-col gap-3">
              <legend>
                <strong>Reccommond a Vaccine</strong>
              </legend>
              <select
                style={{ width: "97%", height: "35px" }}
                value={vaccine}
                onClick={() => setVaccicationData()}
                onChange={(input) => handleVaccineSelect(input.target.value)}
                id="vaccine"
                name="vaccine"
                className="mx-5 px-3 border border-gray-300 rounded-md"
              >
                <option disabled selected hidden>
                  <strong>{vaccine}</strong>
                </option>
                {vaccinations.map((vaccine) => (
                  <option key={vaccine.id} value={vaccine.id}>
                    {vaccine.name}
                  </option>
                ))}
              </select>
              <div className="flex flex-row align-center border-gray-300 justify-start gap-6 border rounded-md ml-5 mr-1 px-4">
                <p className="py-1">Suggest a Date:</p>
                <input
                  type="date"
                  value={date}
                  onChange={(input) => setSuggestedDate(input.target.value)}
                  required="requred"
                  className="mx-5 py-1"
                />
              </div>
              <button
                type="submit"
                className="suggest-date-button bg-gray-600 mx-5 w-1/4"
              >
                Reccommond Vaccine
              </button>
              <div>{vaccineMessage}</div>
            </fieldset>
          </form>
        </div>

        <div>
          <strong>Vaccine Details:</strong>
        </div>
        <table className="w-full table-fixed border-collapse rounded-lg scale-90">
          <thead>
            <tr>
              <th className="bg-blue-200 font-bold py-2">
                <button>Vaccine Name</button>
              </th>
              <th className="bg-blue-200 font-bold py-2">
                <button>Due Date</button>
              </th>
              <th className="bg-blue-200 font-bold py-2">
                <button>Status</button>
              </th>
              <th className="bg-blue-200 font-bold py-2"></th>
            </tr>
          </thead>
          <tbody>
            {thisBaby.babyVaccinations.map((babyVaccinations) => (
              <tr
                key={babyVaccinations.vaccineName}
                className="cursor-pointer hover:bg-gray-100"
              >
                <td className="border py-2 px-3 text-center">
                  {babyVaccinations.vaccineName}
                </td>
                <td className="border py-2 px-3 text-center">
                  {babyVaccinations.dueDate}
                </td>
                <td className="border py-2 px-3 text-center">
                  {babyVaccinations.status}
                  {babyVaccinations.status === "Pending" && (
                    <button
                      className="pending-vaccine"
                      onClick={() => handleVaccineMark(babyVaccinations.id)}
                    >
                      Mark
                    </button>
                  )}
                </td>
                <td className="border py-2 px-2 text-center">
                  <button
                    className="update-vaccine "
                    onClick={() =>
                      setShowBabyVaccinationEditForm(babyVaccinations)
                    }
                  >
                    Update
                  </button>
                  <button
                    className="delete-vaccine "
                    onClick={() => handleVaccineDelete(babyVaccinations.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedBabyVaccination && (
          <BabyVaccinationEditForm
            baby={baby}
            babyVaccination={selectedBabyVaccination}
            onClose={() => {
              setShowBabyVaccinationEditForm("");
              callbackFunc();
            }}
          ></BabyVaccinationEditForm>
        )}
      </div>
    </div>
  );
};

export default DoctorBabyDetailsCard;
