import React, { useState } from 'react'
import Repo from './Repo'
import '../App.css'
import { Link } from 'react-router-dom';
const Repositories = ({ repos }) => {
    console.log('repos comp', repos);

    const [pageNo, setPageNo] = useState(0)
    const [pages, setpages] = useState((repos.length));

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

            <div className='paginaation'>
                <button onClick={() => {
                    if (pageNo > 0) {
                        setPageNo(pageNo - 6)
                        // setpages(pages + 1)
                    }
                }}> {"<-"}</button>
                <span>{pageNo} / {30}</span>
                <button
                    onClick={() => {
                        if (pageNo < repos.length - 6) {
                            setPageNo(pageNo + 6)
                            // setpages(pages - 1)
                        }
                    }}
                // disabled={(pageNo > repos.length - 6) ? 'true' : 'false'}
                > {"->"} </button>
            </div>
        </div>
    )
}

export default Repositories