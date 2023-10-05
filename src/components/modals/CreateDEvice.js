import React, { useContext, useState, useEffect} from 'react'
import { Form, FormControl, Modal, Button, Row, Col } from 'react-bootstrap'
// import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import { Context } from '../../index'
// import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import Dropdown from 'react-bootstrap/Dropdown';
import { fetchTypes, fetchBrands,fetchDevices } from '../../http/deviceApi'
import { observer } from 'mobx-react-lite';

const CreateDEvice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [brand, setBrand] = useState(null)
    const [type, setType] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
        console.log(e.target.files[0])
    }



    const addInfo = () => {
        setInfo([...info, { title: ' ', description: ' ', number: Date.now() }])
    }
    const removInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    console.log(device)
    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
        fetchDevices().then(data => device.setDevices(data.rows))
      },[])
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
                        {device.selectedType  
                            ? <Dropdown.Toggle>{device.selectedType.name }</Dropdown.Toggle>
                            : <Dropdown.Toggle>{"выберите тип"}</Dropdown.Toggle>
                        }
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2 mb-2'>
                        {device.selectedBrand
                           ? <Dropdown.Toggle>{device.selectedBrand.name}</Dropdown.Toggle>
                           : <Dropdown.Toggle>{"выберите бренд"}</Dropdown.Toggle>
                        }
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item  onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <FormControl
                        onChange={e => setName(e.target.value)}
                        className='mt-3'
                        placeholder='Введите название устройства'
                        value={name}

                    />

                    <FormControl
                        onChange={e => setPrice(Number(e.target.value))}
                        className='mt-3'
                        placeholder='Введите стоимость устройства'
                        type='number'
                        value={price}
                    />
                    <FormControl
                        className='mt-3'
                        type='file'
                        onChange={selectFile}
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
                                        onClick={() => removInfo(i.number)}
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
})

export default CreateDEvice
