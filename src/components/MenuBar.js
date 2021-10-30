

import { Menu, Checkbox, Select } from 'semantic-ui-react'

export default function MenuBar({func, toggle, sortTextFunc}) {

    const options = [
        {
            key: 'none',
            text: 'None'
        },
        {
            key: 'text',
            value : 'Name',
            text : 'Name'
        },
        {
            key: 'number',
            value: 'Weight',
            text: 'Weight'
        }
    ]


    // function handleChecked() {
    //     setChecked(!checked)
    // }
    
    return (
        <Menu>
            <Menu.Menu position='right'>
                
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Select onChange={(e) => sortTextFunc(e.target.textContent)} placeholder={'Sort Hogs by'} options={options}/>
                    </Menu.Item>
                </Menu.Menu>
                
                <Menu.Item>
                    <Checkbox checked={toggle} onChange={() => func()} label='Greased' toggle/>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

