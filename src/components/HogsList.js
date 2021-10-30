import Hog from "./Hog";
// import { Grid, Container } from '@mui/material'
import {Card} from 'semantic-ui-react'

export default function HogsList(props) {
    // const section = {
    //     height: "10%",
    //     // paddingTop: 5,
    //     backgroundColor: "#fff"
    // }
    // return (
    //     <Container mt={10}>
    //         <Grid container spacing={2} direction='row'>
    //             {props.hogs.map(hog => (
    //                 <Grid item key={hog.name} xs={4}>
    //                     <Hog style={section} hog={hog} />
    //                 </Grid>))}
    //         </Grid>
    //     </Container>
    // )
    return(

        <div className={'ui center aligned container'}>        
            <Card.Group>
            {props.hogs.map(hog => 
                <Hog key={hog.name} hog={hog}/>
                )}
        </Card.Group>
        </div>
    )
}