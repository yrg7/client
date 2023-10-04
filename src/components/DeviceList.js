import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import { Col, Row } from 'react-bootstrap'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const { device } = useContext(Context)
    return (
        <Row className='d-flex'>
            {device.devices.length &&
            
                device.devices.map(device =>
                    <DeviceItem key={device.id} device={device} />

                )
            
            }
        </Row>

    )
})

export default DeviceList
