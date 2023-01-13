import React, { useState } from 'react'
import Repo from './Repo'
import '../App.css'
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Repositories = ({ repos }) => {
    console.log('repos comp', repos);

    const [pageNo, setPageNo] = useState(0)
    const [pages, setpages] = useState(repos.length);

    return (
        <div div className='repos' >
            <h1 className='title'>All Repos</h1>
            {
                repos && repos.slice(pageNo, pageNo + 6).map((repo) => {
                    return (
                        // <a to={repo.html_url} >
                        <Repo key={repo.id} repo={repo} />
                        // </a>
                    )
                })
            }

            {
                repos.length > 6 &&
                <div className='paginaation'>
                    <button onClick={() => {
                        if (pageNo > 0) {
                            setPageNo(pageNo - 6)
                        }
                    }}
                        disabled={(pageNo == 0)}
                    >
                        {/* <ArrowBackIcon /> */}
                        PrevPage
                    </button>
                    <span>{(pageNo + 6) / 6} / {repos.length / 6}</span>
                    <button
                        onClick={() => {
                            if (pageNo < repos.length - 6) {
                                setPageNo(pageNo + 6)
                            }
                        }}
                        disabled={(pageNo > (repos.length - 7))}
                    >
                        nextPage
                        {/* <ArrowForwardIcon /> */}
                    </button>
                </div>
            }
        </div>
    )
}

export default Repositories