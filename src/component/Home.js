import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function Home() {
    const location=useLocation();
    const navigate=useNavigate();
    const params=useParams();   

    console.log('location',location)
    console.log('navigate',navigate)
    console.log('params',params)

    return (
    <div>        <iframe width="560" height="315" src="https://www.youtube.com/embed/voxtIKnW22Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
