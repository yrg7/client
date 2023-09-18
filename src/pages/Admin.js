import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Admin = () => {
  console.log('admin')
  return (
    <div>
      <Button>Добавить тип</Button>
      <Button>Добавить бренд</Button>
      <Button>Добавить устройство </Button>
    </div>
  )
}

export default Admin
