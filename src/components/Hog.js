
import { useState } from 'react'
import { Card, Image } from 'semantic-ui-react'
export default function Hog(props) {

    const [showHideDetail, setShowHideDetails] = useState(false)
    const {name, greased, weight, specialty, "highest medal achieved" : medal} = props.hog
    return (

        <Card onClick={() => setShowHideDetails(!showHideDetail)}>
            <Image floated={'right'} size={'massive'} src={props.hog.image} wrapped ui={false} />
            <Card.Content extra>
                <Card.Header>
                    {name}
                </Card.Header>
                {showHideDetail ?
                    <> <Card.Meta>
                        {specialty}
                    </Card.Meta>
                        <Card.Description>
                           Weight: {weight}
                          <p>Greased: {greased ? "true" : "false"}</p>
                          <p>Highetst medal achieved : {medal}</p>
                        </Card.Description>
                    </>
                    :
                    null
                }
            </Card.Content>
        </Card>

    )

    // const [isHidden, setIsHidden] = useState(false);
    // const [showDetails, setShowDetails] = useState(false);

    // function handleDetailsClick() {
    //     setShowDetails((prevShowDetails) => !prevShowDetails);
    // }

    // // hide the hog
    // if (isHidden) return null;

    // // show the hog
    // const { name, specialty, image } = hog;

    // return (
    //     <div className="card ">
    //         <div className="image">
    //             <img src={image} alt="hogPic" />
    //         </div>
    //         <div className="content">
    //             <h3 className="header">{name}</h3>
    //             <div className="description">Specialty: {specialty}</div>
    //         </div>
    //         <div className="extra content">
    //             {/* {showDetails ? <HogDetails hog={hog} /> : null} */}

    //             <button className="ui button" onClick={handleDetailsClick}>
    //                 {showDetails ? "Less Info" : "More Info"}
    //             </button>
    //             <button className="ui button" onClick={() => setIsHidden(true)}>
    //                 Hide Me{" "}
    //                 <span role="img" aria-label="snout">
    //                     🐽
    //                 </span>
    //             </button>
    //         </div>
    //     </div>
    // );
}