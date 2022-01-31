import React from 'react'

const Header =(props)=>{
    return(
        <div >
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container px-4">
                <a class="navbar-brand" href="#page-top">Virtual Labs</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#Objective">Objective</a></li>
                        <li class="nav-item"><a class="nav-link" href="#Theory">Theory</a></li>
                        <li class="nav-item"><a class="nav-link" href="#Assignment">Assignment</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="bg-primary bg-gradient text-white">
            <div class="container px-4 text-center">
                <h1 class="fw-bolder">Welcome to Virtual Labs</h1>
                <a class="btn btn-lg btn-light" href="#about">Start exploring!</a>
            </div>
        </header>
        </div>
    )
}
export default Header