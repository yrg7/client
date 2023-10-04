import React, { useContext, useState } from 'react'
import { Form, FormControl, Modal, Button, Row, Col } from 'react-bootstrap'
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { Context } from '../../index'
// import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import Dropdown from 'react-bootstrap/Dropdown';

const CreateDEvice = ({ show, onHide }) => {
    const { device } = useContext(Context)
    const [ info, setInfo ] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: ' ', description: ' ', number: Date.now() }])
    }
    const removInfo =(number) =>{
        setInfo(info.filter(i=>i.number !== number))
    }
    console.log(device)
    return (
        <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={onHide}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>выберите тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        <Dropdown.Toggle>выберите бренд</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        className='mt-3'
                        placeholder='Введите название устройства'
                    />

                    <FormControl
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'
                    />
                    <FormControl
                        className='mt-3'
                        type='file'
                    />
                    <hr />
                    <Button
                        variant='outline'
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {
                        info.map(i =>
                            <Row className='mt-4' key={i.number}>
                                <Col md={4}>
                                    <FormControl placeholder='введите название свойства' />

                                </Col>
                                <Col md={4}>
                                    <FormControl placeholder='введите описание свойства' />
                                </Col>
                                <Col md={4}>
                                    <Button 
                                    variant={'outline-danger'}
                                    onClick={()=>removInfo(i.number)}
                                    >удалить</Button>
                                </Col>

                            </Row>
                        )
                    }

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>закрыть</Button>
                <Button variant='outline-success' onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateDEvice
