import React, { useState } from 'react'
import styles from "../../scss/Register.module.scss"
import { Navbar } from '../../components/Navbar';
import TextField from '@mui/material/TextField';
import DatePicker from "react-multi-date-picker";
import { MenuItem, Select } from '@mui/material';
import { countryList, genders } from './data';
import Checkbox from '@mui/material/Checkbox';
import {MdNavigateNext} from "react-icons/md";
import { useEffect } from 'react';
import { SubmitData } from './handler';

export default function Register() {

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState(new Date());
  const [gender, setGender] = useState("Choose a Gender");
  const [country, setCountry] = useState("Choose a Country");
  const [agrees, setAgrees] = useState(false);
  const [allowProceed, setAllowProceed] = useState(false);

  const handleSubmit = () => {
    const data = {email, firstName, lastName, date, gender, country}
    SubmitData(data)
    .then(res => {
      console.log(res.status);
    })
  }

  useEffect(() => {
    if (email !== "" && firstName!=="" && lastName!=="" && gender!=="Choose a Gender" && country!=="Choose a Country" && agrees===true){
      setAllowProceed(true);
    }
  }, [email, firstName, lastName, gender, country, agrees])


  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.box}>
        <h5 className={styles.heading}>Let's get you registered!</h5>
        <div className={styles.dividerWrapper}>
          <hr className={styles.divider} />
          <div className={styles.circle}></div>
          <hr className={styles.divider} />
        </div>
        <div className={styles.form}>
          <p className={styles.detailsHeading}>Basic Details</p>
          <div className={styles.row}>
            <div className={styles.formItem}>
              <label className={styles.label}>First Name</label>
              <TextField variant="standard" placeholder="Jon" size='large' value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div className={styles.formItem}>
              <label className={styles.label}>Last Name</label>
              <TextField variant="standard" placeholder="Snow" size='large' value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className={styles.formItem}>
              <label className={styles.label}>E-mail Address</label>
              <TextField variant="standard" value={email} onChange={e => setEmail(e.target.value)} placeholder="Jonsnow@winterfell.com" size='large' />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.formItem}>
              <label className={styles.label}>Date of Birth</label>
              <DatePicker format='MM/DD/YYYY' value={date} onChange={date => setDate(date.toString())} />

            </div>
            <div className={styles.formItem}>
              <label className={styles.label}>Country of Residence</label>
              <Select value={country} label="Age" onChange={e => setCountry(e.target.value)} className={styles.input}>
                <MenuItem value="Choose a Country" disabled selected hidden>Choose a Country</MenuItem>
                {countryList.map(country => {
                  return <MenuItem key={country} value={country}>{country}</MenuItem>
                })}
              </Select>
            </div>
            <div className={styles.formItem}>
              <label className={styles.label}>Preferred Gender</label>
              <Select value={gender} label="Age" onChange={e => setGender(e.target.value)} className={styles.input} required>
                <MenuItem value="Choose a Gender" disabled selected hidden>Choose a Gender</MenuItem>
                {genders.map(gender => {
                  return <MenuItem key={gender} value={gender}>{gender}</MenuItem>
                })}
              </Select>
            </div>
          </div>
          <div className={styles.noticeRow}>
            <Checkbox checked={agrees} onClick={() => setAgrees(!agrees)}/>
            <p className={styles.notice}>By clicking submit, I consent to submitting my information to Cupid's Arrow©.</p>
          </div>
          {allowProceed ? 
          <div className={styles.button} onClick={handleSubmit}>
            <MdNavigateNext className={styles.next} color="white"/>
            <p style={{textAlign: 'center'}}>Next</p>
          </div>
          :
          <div className={`${styles.button} ${styles.disabled}`}>
            <MdNavigateNext className={styles.next} color="white"/>
            <p style={{textAlign: 'center'}}>Next</p>
          </div>
}
        </div>
      </div>
    </div >
  )
}