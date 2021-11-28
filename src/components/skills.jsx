import React from "react";
import Mongo from '../image/MongoDB.jfif'
import Node from '../image/nodejs.png'


function skills(){
    return (
        <div className='container' id='skills'>
            <h1 className='title' style={{textAlign:"center"}}>My Skills</h1>
            <div className='row' >
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://en.wikipedia.org/wiki/HTML' target="blank">
                    <img className='tool shadow-sm' src="https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/37/52/eb/3752eb86-964f-b0f0-5230-934624522ed7/AppIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png" alt="HTML"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://en.wikipedia.org/wiki/CSS' target="blank">
                    <img className='tool shadow-sm' src="https://alwarg.gallerycdn.vsassets.io/extensions/alwarg/css-class-builder/0.0.1/1625206357042/Microsoft.VisualStudio.Services.Icons.Default" alt="CSS"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://en.wikipedia.org/wiki/JavaScript' target="blank">
                    <img className='tool shadow-sm' src="data:image/jpeg;base64,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" alt="JS"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://reactjs.org/' target="blank">
                    <img className='tool shadow-sm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://nodejs.org/' target="blank">
                    <img className='tool shadow-sm' src={Node} alt="NODE"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://flask.palletsprojects.com/en/2.0.x/' target="blank">
                    <img className='tool shadow-sm' src="data:image/png;base64,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" alt="flask"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://en.wikipedia.org/wiki/SQL' target="blank">
                    <img className='tool shadow-sm' src="https://ojt.com/wp-content/uploads/2021/08/sql.png" alt="SQL"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>
                    <a className='hvr-float-shadow' href='https://www.python.org/' target="blank">
                    <img className='tool shadow-sm' src="https://images.ctfassets.net/mrop88jh71hl/55rrbZfwMaURHZKAUc5oOW/9e5fe805eb03135b82e962e92169ce6d/python-programming-language.png" alt="python"/></a>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 icon'>   
                    <a className='hvr-float-shadow' href='https://www.mongodb.com/' target="blank">
                    <img className='tool shadow-sm' src={Mongo} alt="MONGODB"/></a>
                </div>
            </div>
        </div>
    )
}

export default skills