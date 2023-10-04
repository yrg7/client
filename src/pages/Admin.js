import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDEvice from '../components/modals/CreateDEvice'
import CreateType from '../components/modals/CreateType'

const Admin = () => {
  const [brandVisible, setBrandVisible]=useState(false)
  const [typeVisible, setTypeVisible]=useState(false)
  const [deviceVisible, setDeviceVisible]=useState(false)
  // console.log('admin')
  return (
    <Container className='d-flex flex-column'>
      <Button variant={'outline-dark'} className='mt-4 p-2' onClick={()=>setTypeVisible(true)}>Добавить тип</Button>
      <Button variant={'outline-dark'} className='mt-4 p-2' onClick={()=>setBrandVisible(true)}>Добавить бренд</Button>
      <Button variant={'outline-dark'} className='mt-4 p-2' onClick={()=>setDeviceVisible(true)}>Добавить устройство </Button>
      <CreateBrand show={brandVisible}  onHide={setBrandVisible}/>
      <CreateDEvice show={deviceVisible} onHide={setDeviceVisible}/>
      <CreateType show={typeVisible} onHide={setTypeVisible}/>
    </Container>
  )
}

export default Admin
