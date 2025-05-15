import React, { useEffect, useState } from 'react'
import CarCard from '../Home/components/CarCard/CarCard'
import { useFetch } from '../../helpers/useFetch'
import { Link, useLocation } from 'react-router-dom';
import PaginationComponent from '../Pagination/PaginationComponent';

export default function AllCars() {
  const location = useLocation();
  const { pathname } = location;
  const [cars, setCars] = useState([])
  const [page, setPage] = useState(1)
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState()
  const [pageCount, setPageCount] = useState(1)
  const [value, setvalue] = useState("");
  const { data } = useFetch("https://myfakeapi.com/api/cars/")


  const handleChange = (e) => {
    setvalue(e?.target?.value)
  }

  useEffect(() => {
    let carsArr = [...cars]
    carsArr = carsArr?.filter((car) => car.car_model.toLowerCase().includes(value.toLowerCase()) == true)
    setCars(carsArr)
  }, [value]);

  useEffect(() => {
    if (data.cars?.length) {
      setCars(data.cars)
      setPageCount(Math.ceil(data.cars?.length / 16))
      setPage(1)
      setLastIndex(16)
    }
  }, [data]);

  useEffect(() => {
    setLastIndex(page * 16)
    setFirstIndex(page * 16 - 16)
  }, [page]);

  return (
    <div className='container'>
      {
        pathname !== "/" ?
          <ol class="breadcrumb mt-md-4 mt-2 mx-1">
            <li class="breadcrumb-item fs-5">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item active fs-5" aria-current="page">Cars</li>
          </ol>
          : null
      }
      {pathname == "/" ?
        <div className='d-flex justify-content-center my-1'>
          <div className="input-group mb-3" style={{ width: "90%" }}>
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-location-dot"></i>
            </span>
            <input value={value}
              onChange={(e) => handleChange(e)}
              type="text" className="form-control" placeholder="Search by car model" aria-label="Username" aria-describedby="basic-addon1" />
            <button className="btn btn-primary" type="button" id="button-addon2">Search</button>
          </div>
        </div> : ""}

      <div className='d-flex align-items-center my-3 flex-column'>
        <div className={`rounded-2 text-uppercase blueDiv`}>popular rental deals</div>
        <div className='w-100 text-center'>
          <h2 className='sectionTitle'>most popular cars rental deals</h2>
        </div>
      </div>

      <div className='row mt-3 '>
        <div className='col-md-12'>
          <div className='row'>
            {
              pathname == "/" ?
                cars?.slice(0, 4)?.map((car, index) =>
                  <CarCard key={index} car={car} index={index} />

                ) :
                cars?.slice(firstIndex, lastIndex)?.map((car, index) =>
                  <CarCard key={index} car={car} index={index} />

                )
            }

          </div>
        </div>
      </div>
      {pathname == "/" || pageCount == 0 ? null
        :
        <PaginationComponent page={page} pageCount={pageCount} setPage={setPage} />
      }
    </div>

  )
}
