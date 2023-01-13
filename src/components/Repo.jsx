import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css';

const Repo = ({ repo }) => {

    // console.log(repo);
    const [languages, setLanguages] = useState({})
    const langList = []

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(repo.languages_url)
            setLanguages(res.data)
            if (languages.length > 0) {
                for (lang of languages) {
                    langList.push(lang)
                }
            }
            console.log(langList);
        }
    }, [])


    return (
        <div className='repo'>
            <div className="wrapper">
                <h2 className="username"> {repo.name} </h2>
                <p className="bio">{repo.description}</p>
                <ul>
                    {
                        langList.map((l, i) => {
                            return <li key={i}>{l}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Repo