import React, { useState } from 'react'
import Repo from './Repo'
import '../App.css'

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
                        <Repo key={repo.id} repo={repo} />
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
                    <span>{(pageNo + 6) / 6} / {Math.ceil(repos.length / 6)}</span>
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