import React from 'react'
import NotFoundImg from '../images/404.gif'
import '../components/styles/400-500.css'

const NotFound = () => (
    <div className = 'text-center'>
        <img src={NotFoundImg} alt="404 Not Found" className = 'Error_Image'/>
    </div>
)

export default NotFound