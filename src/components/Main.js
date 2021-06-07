import React from 'react';
import HornedBeast from './HornedBeast';
import Data from './Data.json';

class Main extends React.Component {
    render() {
        return (

            <div>
                {Data.map((beasts) => {
                    return (


                        <HornedBeast
                            title={beasts.title}
                            imgUrl={beasts.image_url}
                            description={beasts.description}

                        />
                    )
                })

                }

            </div>
        )
    }
}




export default Main;
