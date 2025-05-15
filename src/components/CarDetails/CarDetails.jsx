import React, { useEffect, useState } from 'react'
import { useFetch } from '../../helpers/useFetch'
import { Link, useParams } from 'react-router-dom'
import WhyChoose from '../Home/components/WhyChoose/WhyChoose'

export default function CarDetails() {
  const { id } = useParams()
  const { data } = useFetch(`https://myfakeapi.com/api/cars/${id}`)
  const [myCar, setMyCar] = useState({});
  useEffect(() => {
    if (data)
      setMyCar(data?.Car)
  }, [data]);
  return (
    <>
      <ol class="breadcrumb mt-md-4 mt-2 mx-md-5 mx-1">
        <li class="breadcrumb-item fs-5">
          <Link to="/">Home</Link>
        </li>
        <li class="breadcrumb-item fs-5">
          <Link to="/all-vehicles">Cars</Link>
        </li>
        <li class="breadcrumb-item active fs-5" aria-current="page">Car Details</li>
        <li class="breadcrumb-item active fs-5" aria-current="page"></li>
      </ol>    <div className='vh-80 d-flex align-items-center'>
        <WhyChoose />
      </div>
    </>
  )
}
