import React, { useState, useEffect } from 'react';
import styles from "../../scss/Register.module.scss"
import { Navbar } from '../../components/Navbar';
import TextField from '@mui/material/TextField';
import { MdNavigateNext } from "react-icons/md";
import Loader from "../../components/Loader";
import { ConfirmEmailToken } from './handler';
import { useParams } from 'react-router-dom';

export default function ConfirmRegistration() {
    const { token } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ConfirmEmailToken(token)
            .then(res => {
                setLoading(false);
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [token])

    return (
        <div className={styles.wrapper}>
            <Navbar />
            <div className={styles.box} style={{ alignItems: loading ? "center" : null, justifyContent: loading ? "center" : null }}>
                {loading ? <Loader /> :
                    <></>
                }
            </div>
        </div>
    )
}