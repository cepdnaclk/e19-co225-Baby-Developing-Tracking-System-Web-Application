import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Admin/BabyReg.css";
import { Nav } from "../Nav";
import { Footer } from "../Footer";
import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/parent";

export const BabyRegister = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [birthHeight, setBirthHeight] = useState("");
  const [birthWeight, setBirthWeight] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [nationality, setNationality] = useState("");
  const [motherName, setMotherName] = useState("");
  const [motherContact, setMotherContact] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [fatherContact, setFatherContact] = useState("");
  const [allergies, setAllergies] = useState("");
  const [immunizationRecords, setImmunizationRecords] = useState("");
  const [growthRecords, setGrowthRecords] = useState("");
  const [developmentMilestones, setDevelopmentMilestones] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = JSON.parse(localStorage.getItem("user"));
      const access = token.access_token;
      console.log(access);
      console.log({
        firstName,
        lastName,
        birthday,
        gender,
        bloodType,
        birthHeight,
        birthWeight,
        eyeColor,
        hairColor,
        skinColor,
        nationality,
        motherName,
        motherContact,
        fatherName,
        fatherContact,
        allergies,
        immunizationRecords,
        growthRecords,
        developmentMilestones,
      });
      axios
        .post(
          API_URL + "/registerBaby",
          {
            firstName,
            lastName,
            birthday,
            gender,
            bloodType,
            birthHeight,
            birthWeight,
            eyeColor,
            hairColor,
            skinColor,
            nationality,
            motherName,
            motherContact,
            fatherName,
            fatherContact,
            allergies,
            immunizationRecords,
            growthRecords,
            developmentMilestones,
          },
          {
            headers: {
              "Access-Control-Allow-Origin": true,
              Authorization: "Bearer " + access,
            },
          }
        )
        .then((response) => {
          console.log(response);
          navigate("/parent");
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="add-baby-container">
      <Nav />
      <div className="add-baby-form-container">
        <h2 className="h2">Baby Details</h2>
        <h3>Please fill in this form with your baby details</h3>
        <form className="add-baby-form" onSubmit={handleSubmit}>
          <div className="Fname">
            <input
              value={firstName}
              onChange={(input) => setFirstName(input.target.value)}
              type="name"
              placeholder="First Name"
              id="firstname"
              name="firstname"
            />
            <input
              value={lastName}
              onChange={(input) => setLastName(input.target.value)}
              type="name"
              placeholder="Last Name"
              id="lastname"
              name="lastname"
            />
          </div>
          <div className="Fname">
            <label htmlFor="birthday">Birthday:</label>
            <input
              value={birthday}
              onChange={(input) => setBirthday(input.target.value)}
              type="date"
              placeholder="Birthday"
              id="birthday"
              name="birthday"
            />
          </div>
          <label htmlFor="gender">Gender:</label>

          <div className="radio-group">
          <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={() => setGender("male")}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="female"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={() => setGender("female")}
            />
            

            <label htmlFor="other">Other</label>
            <input
              type="radio"
              id="other"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={() => setGender("other")}
            />
            
          </div>
          <input
            value={bloodType}
            onChange={(input) => setBloodType(input.target.value)}
            type="text"
            placeholder="Blood Type"
            id="bloodType"
            name="bloodType"
          />
          <input
            value={birthHeight}
            onChange={(input) => setBirthHeight(input.target.value)}
            type="text"
            placeholder="Birth Height"
            id="birthHeight"
            name="birthHeight"
          />
          <input
            value={birthWeight}
            onChange={(input) => setBirthWeight(input.target.value)}
            type="text"
            placeholder="Birth Weight"
            id="birthWeight"
            name="birthWeight"
          />
          <input
            value={eyeColor}
            onChange={(input) => setEyeColor(input.target.value)}
            type="text"
            placeholder="Eye Color"
            id="eyeColor"
            name="eyeColor"
          />
          <input
            value={hairColor}
            onChange={(input) => setHairColor(input.target.value)}
            type="text"
            placeholder="Hair Color"
            id="hairColor"
            name="hairColor"
          />
          <input
            value={skinColor}
            onChange={(input) => setSkinColor(input.target.value)}
            type="text"
            placeholder="Skin Color"
            id="skinColor"
            name="skinColor"
          />
          <select
            style={{ width: "100%", height: "35px"}}
            value={nationality}
            onChange={(input) => setNationality(input.target.value)}
            id="nationality"
            name="nationality"
          >
            <option value="">Select Nationality</option>
            <option value="">Select Nationality</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cabo Verde">Cabo Verde</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                  <option value="Congo, Republic of the">Congo, Republic of the</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor (Timor-Leste)">East Timor (Timor-Leste)</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Greece">Greece</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India">India</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea, North">Korea, North</option>
                  <option value="Korea, South">Korea, South</option>
                  <option value="Kosovo">Kosovo</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montenegro">Montenegro</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="North Macedonia (formerly Macedonia)">North Macedonia (formerly Macedonia)</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">United Arab Emirates</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States of America">United States of America</option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City (Holy See)">Vatican City (Holy See)</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>

          </select>
          <br />
          <br />
          <fieldset>
            <legend>Mother's info</legend>
            <input
              value={motherName}
              onChange={(input) => setMotherName(input.target.value)}
              type="text"
              placeholder="Mother's Name"
              id="motherName"
              name="motherName"
            />
            <input
              value={motherContact}
              onChange={(input) => setMotherContact(input.target.value)}
              type="text"
              placeholder="Mother's Contact Number"
              id="motherContact"
              name="motherContact"
            />
          </fieldset>
          <br />
          <fieldset>
            <legend>Father's info</legend>
            <input
              value={fatherName}
              onChange={(input) => setFatherName(input.target.value)}
              type="text"
              placeholder="Father's Name"
              id="fatherName"
              name="fatherName"
            />
            <input
              value={fatherContact}
              onChange={(input) => setFatherContact(input.target.value)}
              type="text"
              placeholder="Father's Contact Number"
              id="fatherContact"
              name="fatherContact"
            />
          </fieldset>
          <br />
          <textarea
            style={{ width: "100%" }}
            value={allergies}
            onChange={(input) => setAllergies(input.target.value)}
            placeholder="Allergies"
            id="allergies"
            name="allergies"
          />
          <br />
          <textarea
            style={{ width: "100%" }}
            value={immunizationRecords}
            onChange={(input) => setImmunizationRecords(input.target.value)}
            placeholder="Immunization Records"
            id="immunizationRecords"
            name="immunizationRecords"
          />
          <br />
          <textarea
            style={{ width: "100%" }}
            value={growthRecords}
            onChange={(input) => setGrowthRecords(input.target.value)}
            placeholder="Growth Records"
            id="growthRecords"
            name="growthRecords"
          />
          <br />
          <textarea
            style={{ width: "100%" }}
            value={developmentMilestones}
            onChange={(input) => setDevelopmentMilestones(input.target.value)}
            placeholder="Development Milestones"
            id="developmentMilestones"
            name="developmentMilestones"
          />
          <br />
          <button type="submit">
            <b>Register Baby</b>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
